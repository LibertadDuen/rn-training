import React, { useState } from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import StepOneForm from "./(form)/step1";
import StepTwoForm from "./(form)/step2";
import StepThreeForm from "./(form)/step3";
import StepFourForm from "./(form)/step4";
import StepFiveForm from "./(form)/step5";
import { Button } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import ProgressBar from "@/components/ProgressBar";
import axios from "axios";

interface ShippingSite {
  _id: string;
  contactName: string;
  companyName: string;
  siteName: string;
  address: string;
  postalCode: number;
  city: string;
  state: string;
}
interface Client {
  _id: string;
  name: string;
  company: string;
  companyName?: string;
  address: string;
  postalCode: number;
  city: string;
  state: string;
  email: string;
  phone: string;
}
interface Product {
  quantity: number;
  name: string;
  description?: string;
  unit: string;
  vendor?: string;
  sku?: string;
  idProduct?: string;
}

export default function StepForm() {
  const styles = useGlobalStyles();
  const [shippingSite, setShippingSite] = useState<ShippingSite>();
  const [client, setClient] = useState<Client>();
  const [products, setProducts] = useState<Product>();
  const [dateSent, setDateSent] = useState(new Date());
  const [dateDelivery, setDateDelivery] = useState(new Date());
  const [timeSent, setTimeSent] = useState();
  const [timeDelivery, setTimeDelivery] = useState();

  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<string>();

  const totalSteps = 5;

  const validateStepOne = () => {
    if (!shippingSite) {
      setError("Por favor, selecciona una sede.");
      return false;
    }
    setError(undefined);
    return true;
  };

  const validateStepTwo = () => {
    if (!client) {
      setError("Por favor, selecciona uno de tus clientes.");
      return false;
    }
    setError(undefined);
    return true;
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateStepOne()) return;
    if (currentStep === 2 && !validateStepTwo()) return;
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOneForm
            setShippingSite={setShippingSite}
            shippingSite={shippingSite!}
            error={error}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 2:
        return (
          <StepTwoForm
            setClient={setClient}
            client={client!}
            error={error}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 3:
        return (
          <StepThreeForm
            setProducts={setProducts}
            products={products}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 4:
        return (
          <StepFourForm
            setTimeDelivery={setTimeDelivery}
            setTimeSent={setTimeSent}
            setDateDelivery={setDateDelivery}
            setDateSent={setDateSent}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 5:
        return (
          <StepFiveForm
            client={client}
            shippingSite={shippingSite}
            dateSent={dateSent}
            dateDelivery={dateDelivery}
            timeDelivery={timeDelivery}
            timeSent={timeSent}
            products={products}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      default:
        return (
          <StepOneForm
            setShippingSite={setShippingSite}
            shippingSite={shippingSite!}
            error={error}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
    }
  };

  const onSubmit = () => {
    const shipment = {
      creatorId: "6601d2991a4596bffe6ac18a",
      dateSent: dateSent.toISOString(),
      timeSent: timeSent,
      dateDelivery: dateDelivery.toISOString(),
      timeDelivery: timeDelivery,
      status: "scheduled",
      clientEmails: [
        "erick.silva@ilumps.com",
        "ericknintendo@gmail.com",
        "ericknintendo@hotmail.com",
      ],
      updateRequested: false,
      shippingSite: {
        contactName: shippingSite?.contactName,
        companyName: shippingSite?.companyName,
        siteName: shippingSite?.siteName,
        address: shippingSite?.address,
        postalCode: shippingSite?.postalCode,
        city: shippingSite?.city,
        state: shippingSite?.state,
      },
      client: {
        name: client?.name,
        companyName: client?.companyName,
        address: client?.address,
        postalCode: client?.postalCode,
        city: client?.city,
        state: client?.state,
        email: client?.email,
        phone: client?.phone,
      },
      bulk: [],
      tripFinalized: false,
      evidences: [],
      product: [products],
    };

    axios
      .post("http://localhost:3000/shipments/create", shipment)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data: ", error);
      });
  };

  return (
    <>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: 16,
        }}
      >
        <ScrollView>{renderStep()}</ScrollView>
        <View
          style={{
            justifyContent: "center",
            gap: 8,
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {currentStep < 5 && (
            <Button
              mode="contained"
              style={styles.primaryButton}
              labelStyle={styles.primaryButtonLabel}
              onPress={nextStep}
            >
              Continuar
            </Button>
          )}
          {currentStep === 5 && (
            <Button
              mode="contained"
              style={styles.primaryButton}
              labelStyle={styles.primaryButtonLabel}
              onPress={onSubmit}
            >
              Registrar
            </Button>
          )}
          {currentStep > 1 && (
            <Button
              mode="contained"
              onPress={prevStep}
              style={styles.tertiaryButton}
              labelStyle={styles.tertiaryButtonLabel}
            >
              Regresar
            </Button>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}
