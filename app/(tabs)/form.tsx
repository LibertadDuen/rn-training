import React, { useState } from "react";
import { View } from "react-native";
import StepOneForm from "./(form)/step1";
import StepTwoForm from "./(form)/step2";
import StepThreeForm from "./(form)/step3";
import StepFourForm from "./(form)/step4";
import { Button } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

export default function StepForm() {
  const styles = useGlobalStyles();
  const [shippingSite, setShippingSite] = useState();
  const [client, setClient] = useState();
  const [dateSent, setDateSent] = useState();
  const [dateDelivery, setDateDelivery] = useState();
  const [timeSent, setTimeSent] = useState();
  const [timeDelivery, setTimeDelivery] = useState();

  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<string>();

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
        return <StepOneForm setShippingSite={setShippingSite} error={error} />;
      case 2:
        return <StepTwoForm setClient={setClient} error={error} />;
      case 3:
        return (
          <StepThreeForm
            setTimeDelivery={setTimeDelivery}
            setTimeSent={setTimeSent}
            setDateDelivery={setDateDelivery}
            setDateSent={setDateSent}
          />
        );
      case 4:
        return (
          <StepFourForm
            client={client}
            shippingSite={shippingSite}
            dateSent={dateSent}
            dateDelivery={dateDelivery}
            timeDelivery={timeDelivery}
            timeSent={timeSent}
          />
        );
      default:
        return <StepOneForm setShippingSite={setShippingSite} error={error} />;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
      }}
    >
      {renderStep()}
      <View
        style={{
          justifyContent: "center",
          gap: 16,
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        {currentStep < 4 && (
          <Button
            mode="contained"
            style={styles.primaryButton}
            labelStyle={styles.primaryButtonLabel}
            onPress={nextStep}
          >
            Continuar
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
    </View>
  );
}
