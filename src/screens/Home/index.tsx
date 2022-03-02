import React from 'react'
import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { AnnounceItem } from '../../components/AnnounceItem'
import { Announce } from '../../interfaces/Announce'

import {
    Container,
    Header,
    Localization,
    LocalizationIcon,
    LocalizationName,
    SearchResult,
    FiltersContainer,
    Filter,
    FilterIcon,
    FilterText,
    FilterInactive,
    FilterIconInactive,
    FilterIconInactiveRight,
    FilterTextInactive,
    Content,
    Section
} from './styles'

interface Data extends Announce{
    id: string;
}

export function Home(){

    const data: Data[] = [
        {
            id: "1",
            address: "Norte, Águas Claras",
            title: "Lindo apartamento para alugar nas avenida das araucárias",
            area: 140,
            administration_price: "350",
            image_url: "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg",
            price: "1.350",
            rooms: 2,
            spaces: 1,
            type: "Apartamento"
        },
        {
            id: "2",
            address: "Lago Norte, Brasília",
            title: "Casa luxuosa para alugar no Lago Norte",
            area: 700,
            administration_price: "0",
            image_url: "https://swellconstrucoes.com.br/wp-content/uploads/2021/04/apartamento-de-luxo-1.png",
            price: "7.135",
            rooms: 3,
            spaces: 4,
            type: "Casa"
        }
    ]

    return(
        <Container>
            <Header>
                <Localization>
                    <LocalizationIcon name="search" />
                    <LocalizationName>Águas Claras, Brasília -DF</LocalizationName>
                </Localization>
                <FiltersContainer>
                    <Filter>
                        <FilterIcon name="sliders" />
                        <FilterText>Filtro</FilterText>
                    </Filter>
                    <FilterInactive>
                        <FilterIconInactive name="bar-chart" />
                        <FilterTextInactive>Mais relevantes</FilterTextInactive>
                        <FilterIconInactiveRight name="chevron-down" />
                    </FilterInactive>
                </FiltersContainer>
            </Header>
            <Content>
                <SearchResult>354 imóveis para alugar</SearchResult>
                <Section>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <AnnounceItem key={item.id} data={item} />}
                        contentContainerStyle={{
                            paddingBottom: 20
                        }}
                    />
                </Section>
            </Content>
        </Container>
    )
}