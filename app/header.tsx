import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  const _goBack = () => console.log("Went back");

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Oxito" />
    </Appbar.Header>
  );
};

export default Header;
