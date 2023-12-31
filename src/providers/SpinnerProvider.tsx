import React, {
  useState,
  useContext,
  PropsWithChildren,
} from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "../components/Spinner";

type SpinnerContextType = {
  showSpinner: () => void;
  hideSpinner: () => void;
};

const SpinnerContext = React.createContext<SpinnerContextType>(
  {} as SpinnerContextType
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
        {show && <Spinner style={styles.spinner} />}
        <View style={styles.content}>{children}</View>
      </View>
    </SpinnerContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 1,
  },
  spinner: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 0,
  },
  content: {
    height: "100%",
    position: "relative",
    zIndex: 1,
  },
});
