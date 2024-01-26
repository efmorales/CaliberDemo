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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 5 * 16, // rem size
  },
  button: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
});

export default MenuBar;