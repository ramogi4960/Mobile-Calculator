import BottomPart from "@/components/BottomPart";
import TopPart from "@/components/TopPart";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputContext } from "../context API/InputContext";


export default function Index() {
  const [ displayValue, setDisplayValue ] = useState<string>('0');
  const [ previousValue, setPreviousValue ] = useState<string | null>(null);
  const [ operation, setOperation ] = useState<string | null>(null);
  const [ waitingForOperand, setWaitingForOperand ] = useState<boolean>(false);


  return (
    <SafeAreaView style={styles.container} >
      <InputContext.Provider value={{ displayValue, setDisplayValue, previousValue, setPreviousValue, operation, setOperation, waitingForOperand, setWaitingForOperand }}>
        <TopPart input={displayValue} />
        <BottomPart />
      </InputContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center'
  }
})