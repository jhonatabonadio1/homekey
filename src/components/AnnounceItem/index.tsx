import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { Announce } from '../../interfaces/Announce';

import {
    Container,
    AnnounceImage,
    Favourite,
    FavouriteIcon,
    ItemTop,
    ItemBottom,
    ItemInfo,
    AnnounceTitle,
    AnnounceAddress,
    AnnouncePrice,
    AnnounceSubprice,
    ItemHorizontal,
    Item,
    ItemIcon,
    ItemText
} from './styles'

interface Data{
    data: Announce;
}

export function AnnounceItem({data}: Data){

    const navigation = useNavigation();
    const theme = useTheme();

    const [favourited, setFavourited] = useState(false);

    return(
        <Container activeOpacity={1} onPress={() => navigation.navigate("SingleAnnounce", {data})}>
            <ItemTop>
                <AnnounceImage source={{uri: data.image_url}} />
                <Favourite 
                    activeOpacity={1} 
                    onPress={() => setFavourited(!favourited)}
                    style={{
                        backgroundColor: favourited ? theme.colors.primary : theme.colors.shape
                    }}
                >
                    <FavouriteIcon 
                        name={favourited ? "heart" : "heart-outline"} 
                        style={{
                            color: favourited ? theme.colors.shape : theme.colors.title
                        }}
                    />
                </Favourite>
            </ItemTop>
            <ItemBottom>
                <ItemInfo>
                    <AnnounceAddress>{data.address}</AnnounceAddress>
                    <AnnounceTitle>{data.title}</AnnounceTitle>
                </ItemInfo>
                <ItemInfo>
                    <AnnouncePrice>R$ {data.price}</AnnouncePrice>
                    <AnnounceSubprice>{data.administration_price != "0" ? "Condomínio R$ " + data.administration_price : "Sem valor de condomínio" }</AnnounceSubprice>
                </ItemInfo>
                <ItemHorizontal>
                    <Item>
                        <ItemIcon name="expand-outline" />
                        <ItemText>{data.area} m²</ItemText>
                    </Item>
                    <Item>
                        <ItemIcon name="ios-bed-outline" />
                        <ItemText>{data.rooms} {data.rooms > 1 ? "quartos" : "quarto"}</ItemText>
                    </Item>
                    <Item>
                        <ItemIcon name="car-outline" />
                        <ItemText>{data.spaces} {data.spaces > 1 ? "vagas" : "vaga"}</ItemText>
                    </Item>
                </ItemHorizontal>
            </ItemBottom>
        </Container>
    )
}