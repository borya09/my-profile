import React, { useState, useContext, PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "../components/Spinner";

const SpinnerContext = React.createContext(
  {} as {
    showSpinner: () => void;
    hideSpinner: () => void;
  }
);
export const useSpinner = () => useContext(SpinnerContext);

export const SpinnerProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [show, setShow] = useState<boolean>(false);

  const showSpinner = () => {
    setShow(true);
  };

  const hideSpinner = () => {
    setShow(false);
  };

  return (
    <SpinnerContext.Provider value={{ showSpinner, hideSpinner }}>
      <View style={styles.container}>
        {show && <Spinner />}
        {children}
      </View>
    </SpinnerContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {    
    width: "100%",
    height: "100%",
  },
});
