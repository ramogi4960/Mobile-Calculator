import { StyleSheet, Text, View } from "react-native";

interface TopPartProps {
    input: string
}

export default function TopPart({ input }: TopPartProps) {
    return (
        <View style={styles.container}>
            {/* Top part content goes here */}
            <Text style={styles.text}>{input}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        height: '30%',
        width: '100%',
        boxSizing: 'border-box',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 60,
        fontWeight: '800',
        textAlign: 'right',
        padding: 20
    }
})