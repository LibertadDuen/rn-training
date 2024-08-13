import React, { useState } from "react";
import { View } from "react-native";
import StepOneForm from "./(form)/step1";
import StepTwoForm from "./(form)/step2";
import StepThreeForm from "./(form)/step3";
import StepFourForm from "./(form)/step4";
import { Button } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

const StepForm = () => {
  const styles = useGlobalStyles();
  const [shippingSite, setShippingSite] = useState();
  const [client, setClient] = useState();
  const [dateSent, setDateSent] = useState();
  const [dateDelivery, setDateDelivery] = useState();
  const [timeSent, setTimeSent] = useState();
  const [timeDelivery, setTimeDelivery] = useState();

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOneForm setShippingSite={setShippingSite} />;
      case 2:
        return <StepTwoForm setClient={setClient} />;
      case 3:
        return <StepThreeForm />;
      case 4:
        return (
          <StepFourForm
            client={client}
            shippingSite={shippingSite}
            dateSent={dateSent}
            dateDelivery={dateDelivery}
          />
        );
      default:
        return <StepOneForm setShippingSite={setShippingSite} />;
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
};

export default StepForm;
