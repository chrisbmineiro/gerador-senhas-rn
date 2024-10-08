import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        borderColor: '#ffffff',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        backgroundColor: '#4D4D4D'
    },
    inputContainer: {
        flexDirection: 'column',
        width: '80%',
        alignItems: 'center',
    }
});