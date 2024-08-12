import React, { useState } from "react";
import { View } from "react-native";
import Step1 from "./(form)/step1";
import Step2 from "./(form)/step2";
import Step3 from "./(form)/step3";
import { Button, IconButton } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

const StepForm = () => {
  const styles = useGlobalStyles();
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
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
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
        {currentStep < 3 && (
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
