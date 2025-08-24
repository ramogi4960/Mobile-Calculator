import BottomPart from "@/components/BottomPart";
import TopPart from "@/components/TopPart";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [input, setInput] = useState('0');

  return (
    <SafeAreaView style={styles.container}>
      <TopPart input={input} />
      <BottomPart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})