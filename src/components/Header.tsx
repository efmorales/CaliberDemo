import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
            <Icon name="arrow-left" size={24} color="#1D143F" />
        </TouchableOpacity>

      <Text style={styles.title}>Pro Workout 1: Chest, Triceps & Shoulders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      width: Dimensions.get('window').width,
      // the header stays on top of the screen
      position: 'absolute',
      top: 0,
      left: 0,
      height: 4 * 16, // Assuming 1 rem = 16px
      backgroundColor: '#1D143F',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    title: {
      flex: 1,
      textAlign: 'center',
      color: '#FFFFFF',
      fontFamily: 'OpenSans-Regular', // Make sure you have this font loaded
      fontSize: 16, // Adjust the size as needed
    },
    button: {
      width: 40, // Adjust size as needed
      height: 40, // Adjust size as needed
      backgroundColor: '#F5F7F9',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20, // Half of width and height to make it circular
      marginLeft: 10, // Adjust as needed for positioning
    },
  });

export default Header;