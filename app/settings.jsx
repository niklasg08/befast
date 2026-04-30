import { StyleSheet, Text, View } from "react-native";

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>How to use the app</Text>
            <Text style={styles.text}>
                1. Open the app and allow location access when prompted.
                {"\n"}2. The app will automatically track your location and speed.
                {"\n"}3. If you exceed the speed limit, the app will send an alert to your emergency contacts.
                {"\n"}4. You can add or edit your emergency contacts in the settings.
                {"\n"}5. Stay safe and drive responsibly!
            </Text>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
});