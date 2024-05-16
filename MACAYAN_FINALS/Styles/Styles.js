import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
      },
      welcomeText: {
        fontSize: 20,
        marginBottom: 20,
      },
      splash: {
        width: '100%',
        height: '100%',
      },
      splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Ensure a matching background color
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
      button: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 200,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
export default Styles;