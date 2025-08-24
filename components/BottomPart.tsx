import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function BottomPart() {
    return (
        <View style={styles.container}>
            <Button textContent="C" type="function" />
            <Button textContent="+/-" type="function" />
            <Button textContent="%" type="function" />
            <Button textContent="AC" type="function" />
            <Button textContent="7" type="digit" />
            <Button textContent="8" type="digit" />
            <Button textContent="9" type="digit" />
            <Button textContent="x" type="operator" />
            <Button textContent="4" type="digit" />
            <Button textContent="5" type="digit" />
            <Button textContent="6" type="digit" />
            <Button textContent="-" type="operator" />
            <Button textContent="1" type="digit" />
            <Button textContent="2" type="digit" />
            <Button textContent="3" type="digit" />
            <Button textContent="+" type="operator" />
            <Button textContent="0" type="digit" />
            <Button textContent="." type="decimal" />
            <Button textContent="=" type="equals" />
            <Button textContent="/" type="operator" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        columnGap: 2
    }
})