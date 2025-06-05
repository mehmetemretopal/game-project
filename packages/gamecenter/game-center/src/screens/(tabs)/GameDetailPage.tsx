// DetailPage.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DATA } from '../../services/Data';


interface DetailRouteParams {
 id:string;
}

const GameDetailPage: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as DetailRouteParams;

  const itemData = DATA.find(item=>item.id===id);

  if (!itemData) {
    return (
      <View style={styles.container}>
        <Text>Detay bilgisi bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{itemData.title}</Text>
      {itemData.image && (
        <Image source={{ uri: itemData.image }} style={styles.image} />
      )}
      <Text style={styles.description}>{itemData.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default GameDetailPage;