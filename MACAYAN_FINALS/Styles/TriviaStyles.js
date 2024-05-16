import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: blur
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    button1: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 10,
    },
    buttonfinish: {
        backgroundColor: '#2ecc71',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    disabledButton: {
        backgroundColor: '#95a5a6',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resultText: {
        marginTop: 20,
        fontSize: 16,
    },
});

export default styles;
