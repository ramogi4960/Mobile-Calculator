import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function BottomPart() {
    return (
        <View style={styles.container}>
            <Button textContent="C" type="function" />
            <Button textContent="+/-" type="function" />
            <Button textContent="%" type="function" />
            <Button textContent="AC" type="function" />
            <Button textContent="7" />
            <Button textContent="8" />
            <Button textContent="9" />
            <Button textContent="x" type="operator" />
            <Button textContent="4" />
            <Button textContent="5" />
            <Button textContent="6" />
            <Button textContent="-" type="operator" />
            <Button textContent="1" />
            <Button textContent="2" />
            <Button textContent="3" />
            <Button textContent="+" type="operator" />
            <Button textContent="0" />
            <Button textContent="." />
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