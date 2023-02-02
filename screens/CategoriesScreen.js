import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemdata) {
    function pressHandler() {
      navigation.navigate('MealsOverview');
    }

    return (
      <CategoryGridTile
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
