import React, {
  useState,
  useContext,
  PropsWithChildren,
  useCallback,
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

  const showSpinner = useCallback(() => {
    setShow(true);
  }, []);

  const hideSpinner = useCallback(() => {
    setShow(false);
  }, []);

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
