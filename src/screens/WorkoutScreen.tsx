import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ExerciseDetail from '../components/ExerciseDetail';
import VideoLoop from '../components/VideoLoop';
import MenuBar from '../components/MenuBar';

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
      <View style={styles.content}>
        <VideoLoop style={styles.videoLoop} />
        <ExerciseDetail style={styles.exerciseDetail} />
      </View>
        <MenuBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Distributes space between header, content, and menu bar
    // backgroundColor: '#F2F3F5',
  },
  content: {
    flex: 1,
    flexDirection: 'row', // Aligns VideoLoop and ExerciseDetail side by side
    backgroundColor: '#F2F3F5',
  },
  videoLoop: {
    flex: 2, // Takes up 2/3 of the space
    
  },
  exerciseDetail: {
    flex: 1, // Takes up 1/3 of the space

  },
});

export default WorkoutScreen;
