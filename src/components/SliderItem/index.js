import React from "react";

import { Container, BannerItem, Title, RateContainer, Rate } from "./styles";

import { Ionicons } from "@expo/vector-icons";

function SliderItem({ data }) {
  return (
    <Container activeOpacity={0.9}>
      <BannerItem
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
        }}
      />

      <Title numberOfFiles={1}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={16} color="#E7A74E" />
        <Rate>{data.vote_average}</Rate>
      </RateContainer>
    </Container>
  );
}

export default SliderItem;