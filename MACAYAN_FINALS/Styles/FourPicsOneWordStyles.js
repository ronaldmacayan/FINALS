import { StyleSheet } from 'react-native';
const FourPicsOneWord = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    countText: {
      fontSize: 24,
      marginBottom: 20,
    },
    imagesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    image: {
      width: 50,
      height: 50,
    },
  });
  
  export default FourPicsOneWord;