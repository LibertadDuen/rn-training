// import * as React from "react";

// import { View } from "react-native";
// import { customText } from "react-native-paper";
// import { useAppTheme } from "../../_layout";
// import { useForm } from "react-hook-form";

// export const Text = customText<"customVariant">();

// export default function Step1({ navigation }: { navigation: any }) {
//   const {
//     colors: { ...colors },
//   } = useAppTheme();
//   React.useLayoutEffect(() => {
//     navigation.setOptions(
//       {
//         headerLeft: () => null,
//       },
//       [navigation]
//     );
//   });
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({ defaultValues: Bulk.useState((s) => s) });
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text style={{ fontSize: 30, color: colors.brandPrimary }}>
//         Soy el paso 1
//       </Text>
//     </View>
//   );
// }
import * as React from "react";

import { View } from "react-native";
import { customText } from "react-native-paper";
import { useAppTheme } from "../../_layout";

export const Text = customText<"customVariant">();

export default function Index() {
  const {
    colors: { ...colors },
  } = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: colors.brandPrimary }}>
        Soy el paso 1
      </Text>
    </View>
  );
}
