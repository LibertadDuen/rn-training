import React, { useState } from "react";
import { View } from "react-native";
import Step1 from "./(form)/step1";
import Step2 from "./(form)/step2";
import Step3 from "./(form)/step3";
import { IconButton } from "react-native-paper";

const StepForm = () => {
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {renderStep()}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        {currentStep > 1 && <IconButton icon="arrow-left" onPress={prevStep} />}
        {currentStep < 3 && (
          <IconButton icon="arrow-right" onPress={nextStep} />
        )}
      </View>
    </View>
  );
};

export default StepForm;
