import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Golden Corral",
    address = "1800 random street",
    icon,
    photos = [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-corral-buffet-grill-news-photo-1599763874.jpg",
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
