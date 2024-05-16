import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AnswerScreen = ({ route }) => {
    const { questionsData, userAnswers, totalScore } = route.params;
    const navigation = useNavigation();

    const handleNavigateHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Answers</Text>
            {questionsData.map((question, index) => {
                const isCorrect = userAnswers[index] === question.questionAnswer.toLowerCase();
                return (
                    <View key={question.questionId} style={[styles.card, isCorrect ? styles.correctCard : styles.wrongCard]}>
                        <Text style={styles.questionText}>{question.question}</Text>
                        <Text style={styles.answerText}>{userAnswers[index]}</Text>
                        {!isCorrect && (
                            <Text style={styles.correctAnswerText}>
                                Correct Answer: {question.questionAnswer}
                            </Text>
                        )}
                    </View>
                );
            })}
            <Text style={styles.totalScore}>Total Score: {totalScore}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNavigateHome}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    correctCard: {
        backgroundColor: '#c8e6c9',
    },
    wrongCard: {
        backgroundColor: '#ffcdd2',
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    answerText: {
        fontSize: 16,
        color: 'green',
    },
    correctAnswerText: {
        fontSize: 16,
        color: 'red',
        marginTop: 5,
    },
    totalScore: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AnswerScreen;