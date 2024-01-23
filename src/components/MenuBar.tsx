import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      {renderIcon("home", "Home")}
      {renderIcon("clipboard", "Training Plan")}
      {renderIcon("message-square", "Groups")}
      {renderIcon("bell", "Notifications")}
      {renderIcon("user", "Menu")}
    </View>
  );
};

const renderIcon = (name: string, label: string) => (
  <TouchableOpacity style={styles.button}>
    <Icon name={name} size={24} color="#000060" />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 60, // Adjust as needed
  },
  button: {
    alignItems: 'center',
    // marginHorizontal: 16, // Adjust as needed
  },
  label: {
    fontFamily: 'OpenSans-Regular', // Make sure you have this font loaded
    fontSize: 8, // Adjust the size as needed
  },
});

export default MenuBar;