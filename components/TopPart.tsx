import { StyleSheet, View } from "react-native";

export default function TopPart() {
    return (
        <View style={styles.container}>
            {/* Top part content goes here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25597e',
        height: '35%',
        width: '100%',
        borderColor: 'white',
        borderWidth: 1,
        boxSizing: 'border-box',
    }
})