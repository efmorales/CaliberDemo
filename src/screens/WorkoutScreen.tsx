import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ExerciseDetail from '../components/ExerciseDetail';
import VideoLoop from '../components/VideoLoop';
import MenuBar from '../components/MenuBar';

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
        <ExerciseDetail />
        <VideoLoop />
        <MenuBar />
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
