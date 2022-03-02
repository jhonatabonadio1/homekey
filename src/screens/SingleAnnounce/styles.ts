import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {Ionicons, Feather} from '@expo/vector-icons'
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex:1;
`;


export const Header = styled.View`
    
`;

export const AnnounceImage = styled.Image`
    width:100%;
    height: ${RFPercentage(40)}px;
    border-top-left-radius: ${RFValue(12)}px;
    border-top-right-radius: ${RFValue(12)}px;
    z-index:1;
`;

export const AnnounceControl = styled.View`
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    padding:0 24px;
    align-items: center;
    width: 100%;
    top: ${getBottomSpace() + RFValue(20)}px;
    z-index:2;
`;

export const GoBackButton = styled.TouchableOpacity`
    width:${RFValue(35)}px;
    height:${RFValue(35)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(8)}px;
    background:${({theme}) => theme.colors.shape};
 
`;

export const GoBackIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(16)}px;
`;


export const Favourite = styled.TouchableOpacity`
    width:${RFValue(35)}px;
    height:${RFValue(35)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(8)}px;
    background:${({theme}) => theme.colors.shape};
 
`;

export const FavouriteIcon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(16)}px;
`;

export const Content = styled.View`
     flex:1;
`;

export const ScrollContent = styled.ScrollView`
    
`;

export const Section = styled.View`
    padding:0 24px;
    margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(20)}px;
`;

export const Address = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
    margin-top: ${RFValue(8)}px;
`;


export const ItemInfo = styled.View`
    margin-top: 20px;
`;

export const AnnouncePrice = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(16)}px;
`;

export const AnnounceSubprice = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
`;

export const PublishTime = styled.View`
    margin:0 24px;
    margin-top:${RFValue(12)}px;
    padding:${RFValue(20)}px 0;
    flex-direction: row;
    align-items: center;
    border-color: ${({theme}) => theme.colors.divisor};
    border-style: solid;
    border-bottom-width: 1px;
`;

export const ClockIcon = styled(Feather)`
    margin-right: 6px;
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(12)}px;
`;

export const Time = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(12)}px;
`;

export const SectionTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
`;
export const Footer = styled.View`
    margin-bottom: ${getBottomSpace()}px;
    border-color: ${({theme}) => theme.colors.divisor};
    border-style: solid;
    border-top-width: 1px;
`;

export const Buttons = styled.View`
    flex-direction: row;
    justify-content: center;
    padding:${RFValue(12)}px 0;
`;

export const CallButton = styled.TouchableOpacity`
    flex-direction: row;
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-color: ${({theme}) => theme.colors.divisor};
    border-style: solid;
    border-width: 1px;
    margin-right: 8px;
    border-radius: ${RFValue(12)}px;
    align-items: center;
    justify-content: center;
`;

export const ChatButton = styled.TouchableOpacity`
    flex-direction: row;
    padding:0 24px;
    height: ${RFValue(50)}px;
    border-color: ${({theme}) => theme.colors.divisor};
    border-style: solid;
    border-width: 1px;
    margin-right: 8px;
    border-radius: ${RFValue(12)}px;
    align-items: center;
    justify-content: center;
`;

export const ButtonIcon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(26)}px;
`;

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(14)}px;
    margin-left: 6px;
`;

export const VisitImmobile = styled.TouchableOpacity`
    flex-direction: row;
    padding:0 24px;
    height: ${RFValue(50)}px;
    border-color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.primary};
    border-style: solid;
    border-width: 1px;
    border-radius: ${RFValue(12)}px;
    align-items: center;
    justify-content: center;
`;

export const VisitImmobileIcon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.shape};
    font-size:${RFValue(26)}px;
`;

export const VisitImmobileText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.shape};
    font-size:${RFValue(14)}px;
`;