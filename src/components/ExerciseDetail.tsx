import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ExerciseDetailProps {
  style?: ViewStyle;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ style }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dumbbell Floor Press</Text>
        {/* <Text style={styles.subtitle}>3 sets 1 min rest</Text> */}
        <View style={styles.actionIcons}>
          
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="clock" size={24} color="#757FFA" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton}>
            <Icon name="target" size={24} color="#757FFA" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabSection}>
        <TouchableOpacity style={styles.tabButtonActive}>
          <Text style={styles.tabTextActive}>Track</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.setsSection}>

        <View style={styles.set}>
          <Text style={styles.setTitle}>Set 1</Text>
          <View style={styles.repBox}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>reps</Text>
          </View>
          <View style={styles.weightBox}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>lbs</Text>
          </View>
        </View>

        <View style={styles.set}>
          <Text style={styles.setTitle}>Set 2</Text>
          <View style={styles.repBox}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>reps</Text>
          </View>
          <View style={styles.weightBox}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>lbs</Text>
          </View>
        </View>

        <View style={styles.set}>
          <Text style={styles.setTitle}>Set 3</Text>
          <View style={styles.repBox}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>reps</Text>
          </View>
          <View style={styles.weightBox}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>lbs</Text>
          </View>
        </View>

      </View>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={24} color="#000060" />
        <Text style={styles.addButtonText}>Add set</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Complete Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // the component is positioned to the right of the screen,
    // and it takes up 30% of the screen width
    position: 'absolute',
    right: 20,
    width: '30%',
    backgroundColor: '#F2F3F5',
    paddingTop: 16,
    overflow: 'scroll',
    justifyContent: 'center',

  },

  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
  },

  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#000',
  },

  subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#888',
  },

  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  headerButton: {
    margin: 8,
    padding: 8,
    backgroundColor: '#E5F2FF',
    borderRadius: 10,
  },

  tabSection: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 3.2 * 16, 
  },

  tabText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#000060',
  },

  tabButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    width: '33.33%',
  },

  tabButtonActive: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D1F60',
    padding: 16,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '33.33%',

  },

  tabTextActive: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: '#FFF',
  },

  setsSection: {
    flexDirection: 'column',
    // Add your sets section styles here
  },

  set: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0.5 * 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
  },

  setTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#000060',
  },

  repBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#DFDEEC',
    paddingVertical: 8,
    borderRadius: 5,
  },

  weightBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#DFDEEC',
    paddingVertical: 8,
    borderRadius: 5,
  },

  input: {
    width: 50,
    height: 40,
    backgroundColor: '#FFF',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#2D1A65',
    textAlign: 'center',
    borderRadius: 5,
  },

  label: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#7E74B3',
  },

  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  addButtonText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#000060',
    marginLeft: 8,
  },

  completeButton: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
  },

  completeButtonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default ExerciseDetail;