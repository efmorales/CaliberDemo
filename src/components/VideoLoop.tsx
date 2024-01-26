import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Video from 'react-native-video';

interface VideoLoopProps {
  style?: ViewStyle;
}

const VideoLoop: React.FC<VideoLoopProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Video
        source={require('../assets/videos/dumbbellDemo.mp4')}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    left: 20,
    
  },
  video: {
    height: '65%',
    width: '65%',
  },
});

export default VideoLoop;