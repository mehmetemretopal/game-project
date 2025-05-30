import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Surface } from 'react-native-paper'; // Only Surface is used from react-native-paper
import SpecificFlatList from '../../components/specific/SpecificFlatList';
import GlobalText from '../../components/common/GlobalText';
// Assuming BasicNavigation is not directly involved in the layout structure being fixed
// import BasicNavigation from '../../navigation/BasicNavigation';

// DATA is not used directly in HomePage, but kept as per original code
const DATA = [
  {
    id: 'bd7acbea-c1bfsaf1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1fdsb1-46c2-aed5-',
    title: 'Second Item',
  },
  {
    id: 'bd7acbea-fs-46c2-aed5-3ad53abb2dsasfsba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-fds-46c2-aefdsfsdd5-',
    title: 'Second Item',
  },
];

const HomePage = () => {
  // screenWidth is declared but not used for layout in this component
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Top section: Greetings, Games title, and SpecificFlatList */}
      {/* This section will take approximately 1/3 of the screen height */}
      <View style={styles.topSection}>
        {/* Row for "Hello" and "Mehmet Emre" */}
        <View style={{ flexDirection: 'row', paddingTop: 20 }}>
          <GlobalText
            title='Hello👋  '
            size={20}
            color='#253141'
            font=''
          />
          <GlobalText
            title='Mehmet Emre'
            size={20}
            color='#253141'
            font=''
          />
        </View>

        {/* "Games" title */}
        <GlobalText
          title='Games'
          font=''
          size={40}
          color='#253141'
        />

        <View style={{ flex: 1 }}>
          <SpecificFlatList
            
          />
        </View>
      </View>

      {/* Bottom section: Lobies Surface */}
      {/* This section will take approximately 2/3 of the screen height */}
       
      <View style={styles.bottomSection}>
        <Surface style={styles.surface} elevation={4}>
          <GlobalText
            title='Lobies'
            font=''
            size={40}
            color='#253141'
          />
        </Surface>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // The main container takes up all available space
    backgroundColor: '#E6EDFF', // Background color for the entire page
  },
  topSection: {
    flex: 0.5, // This section takes 0.5 units of flex space (approx. 1/3 of total screen height)
    paddingHorizontal: 10, // Horizontal padding for the content inside this section
    paddingBottom: 10, // Padding at the bottom to separate from the next section
  },
  bottomSection: {
    flex: 1, // This section takes 1 unit of flex space (approx. 2/3 of total screen height)
    // No padding here, as the Surface itself has padding
  },
  surface: {
    flex: 1, // The Surface component fills the entire space of its parent (bottomSection)
    // Removed absolute positioning and fixed dimensions that caused overlap
    borderTopLeftRadius: 50, // Rounded top-left corner
    borderTopRightRadius: 50, // Rounded top-right corner
    backgroundColor: '#fff', // White background for the surface
    paddingHorizontal: 16, // Horizontal padding inside the surface
    paddingVertical: 27, // Vertical padding inside the surface
    justifyContent: 'flex-start', // Aligns content to the top within the surface
  },
});

export default HomePage;
