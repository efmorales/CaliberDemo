import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Workout Screen Placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutScreen;