import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
            <Icon name="arrow-left" size={30} color="#1D143F" />
        </TouchableOpacity>

      <Text style={styles.title}>Pro Workout 1: Chest, Triceps & Shoulders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      width: Dimensions.get('window').width,
      // position: 'absolute',
      // top: 0,
      // left: 0,
      height: 6.5 * 16, // Assuming 1 rem = 16px
      backgroundColor: '#1D143F',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    title: {
      flex: 1,
      textAlign: 'center',
      color: '#FFFFFF',
      fontFamily: 'OpenSans-Regular',
      fontSize: 20, 
    },
    button: {
      width: 50, 
      height: 50, 
      backgroundColor: '#F5F7F9',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25, // Half of width and height to make it circular
      marginLeft: 20,
    },
  });

export default Header;