import React from "react";
import { View, StyleSheet } from "react-native";
import { ProgressBar as PaperProgressBar } from "react-native-paper";
import { useAppTheme } from "@/app/_layout";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = currentStep / totalSteps;
  const {
    colors: { ...colors },
  } = useAppTheme();

  return (
    <View style={styles.container}>
      <PaperProgressBar
        progress={progress}
        color={colors.brandPrimary}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  progressBar: {
    height: 8,
    borderRadius: 0,
    backgroundColor: "#D2CDDE",
  },
});

export default ProgressBar;
