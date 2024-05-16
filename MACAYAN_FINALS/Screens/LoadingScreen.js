import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../Styles/Styles';

const LoadingScreen = () => {
    return (
        <View style={[styles.loadingContainer, styles.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

export default LoadingScreen;