import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles'; // Ensure this file exists and has the required styles
import Loader from '../Screens/LoadingScreen'; // Ensure this component exists and is correctly implemented

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulate fetching data with a timeout
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trivia')}>
            <Text style={styles.buttonText}>TRIVIA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FourPicsOneWord')}>
            <Text style={styles.buttonText}>4 PIC 1 WORD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>LOG OUT</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Home;