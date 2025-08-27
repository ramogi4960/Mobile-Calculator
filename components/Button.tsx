import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { InputContext } from "../context API/InputContext";

interface TextProps {
    textContent: string;
    type?: string;
}

export default function Button({ textContent, type }: TextProps) {
    const inputContext = useContext(InputContext);

    const types = {
        digit: '#333639',
        operator: '#ff9500',
        function: '#a5a5a5',
        equals: '#359155ff',
        decimal: '#333639',
    }


    return (
        <Pressable
        style={[
            styles.button,
            {
                backgroundColor: types[type as keyof typeof types] || types.digit,
                width: textContent === '0' ? (89 * 2) + 5 : 89,
                borderRadius: textContent === '0' ? 50 : 89,
            }
            ]}>
            <Text style={styles.text}>{textContent}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333639',
        width: 89,
        height: 89,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: '800',
        textAlign: 'center',
    }
});