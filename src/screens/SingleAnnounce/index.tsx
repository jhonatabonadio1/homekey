import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { useTheme } from 'styled-components';

import { Announce } from '../../interfaces/Announce';

import {
    Container,
    Header,
    AnnounceControl,
    AnnounceImage,
    GoBackButton,
    GoBackIcon,
    Favourite,
    FavouriteIcon,
    Content,
    ScrollContent,
    Section,
    Title,
    Address,
    ItemInfo,
    AnnouncePrice,
    AnnounceSubprice,
    PublishTime,
    ClockIcon,
    Time,
    SectionTitle,
    Footer,
    Buttons,
    CallButton,
    ChatButton,
    ButtonIcon,
    ButtonText,
    VisitImmobile,
    VisitImmobileText
} from './styles'

interface Data{
    data: Announce;
}

export function SingleAnnounce(){

    const navigation = useNavigation();
    const theme = useTheme();
    const route = useRoute()

    const {data} = route.params as Data

    const [favourited, setFavourited] = useState(false);

    return(
        <Container>
            <Header>
                <AnnounceImage source={{uri: data.image_url}} />
                <AnnounceControl>
                     <GoBackButton 
                        activeOpacity={1} 
                        onPress={() => navigation.goBack()}
                    >
                        <GoBackIcon name="chevron-left" />
                    </GoBackButton>
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
                </AnnounceControl>
            </Header>
            <Content>
                <ScrollContent
                    showsVerticalScrollIndicator={false}
                >
                <Section>
                    <Title>{data.title}</Title>
                    <Address>{data.address}</Address>
                    <ItemInfo>
                        <AnnouncePrice>R$ {data.price}</AnnouncePrice>
                        <AnnounceSubprice>{data.administration_price != "0" ? "Condomínio R$ " + data.administration_price : "Sem valor de condomínio" }</AnnounceSubprice>
                    </ItemInfo>
                </Section>
                <PublishTime>
                    <ClockIcon name="clock" />
                    <Time>Publicado há 2 meses</Time>
                </PublishTime>
                <Section>
                    <SectionTitle>Características</SectionTitle>
                </Section>
                <Section>
                    <SectionTitle>Descrição do anúncio</SectionTitle>
                </Section>
                <Section>
                    <SectionTitle>Anunciante</SectionTitle>
                </Section>
                </ScrollContent>
            </Content>
            <Footer>
                <Buttons>
                    <CallButton
                        activeOpacity={.7}
                    >
                        <ButtonIcon name="call-outline" />
                    </CallButton>
                    <ChatButton
                        activeOpacity={.7}
                    >
                        <ButtonIcon name="chatbubble-outline" />
                        <ButtonText>Chat</ButtonText>
                    </ChatButton>
                    <VisitImmobile
                        activeOpacity={.7}
                    >
                        <VisitImmobileText>Visitar imóvel</VisitImmobileText>
                    </VisitImmobile>
                </Buttons>
            </Footer>
        </Container>
    )
}
  