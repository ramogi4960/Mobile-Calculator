import { Pressable, StyleSheet, Text } from "react-native";

interface TextProps {
    textContent: string
}

export default function Button({ textContent }: TextProps) {
    return (
        <Pressable style={styles.button}>
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
        textAlign: 'center'        
    }
});