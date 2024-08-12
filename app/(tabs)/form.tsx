import React, { useState } from "react";
import { View } from "react-native";
import Step1 from "./(form)/step1";
import Step2 from "./(form)/step2";
import Step3 from "./(form)/step3";
import { Button } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

export default function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [headquarters, setHQ] = useState<string>();
  const [stepTwoData, setStepTwoData] = useState<string>();
  const [error, setError] = useState<string>();
  const styles = useGlobalStyles();

  const validateStepOne = () => {
    if (!headquarters) {
      setError("Por favor, selecciona una sede.");
      return false;
    }
    setError(undefined);
    return true;
  };

  const validateStepTwo = () => {
    if (!stepTwoData || stepTwoData === "0") {
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
          <Step1 headquarters={headquarters} setHQ={setHQ} error={error} />
        );
      case 2:
        return (
          <Step2
            stepTwoData={stepTwoData}
            setStepTwoData={setStepTwoData}
            error={error}
          />
        );
      case 3:
        return <Step3 />;
      default:
        return (
          <Step1 headquarters={headquarters} setHQ={setHQ} error={error} />
        );
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
}
