import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const makeGuess = () => {
    const userGuess = parseInt(guess);
    setGuessCount(guessCount + 1);

    if (userGuess < randomNumber) {
      Alert.alert('Your guess is too small!');
    } else if (userGuess > randomNumber) {
      Alert.alert('Your guess is too large!');
    } else {
      Alert.alert(`Correct! You've guessed the number in ${guessCount} attempts!`);
      setGameOver(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Guess the Number!</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setGuess(text)} 
        value={guess} 
        keyboardType="numeric" 
        editable={!gameOver}
      />
      <Button onPress={makeGuess} title="Make guess" disabled={gameOver} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
});