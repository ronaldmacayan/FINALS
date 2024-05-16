import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from '../Styles/SplashStyles'; // Ensure this path is correct

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image
                source={require('../assets/HI.jpg')}
                style={styles.splash}
                resizeMode='cover'
            />
        </View>
    );
};

export default SplashScreen;