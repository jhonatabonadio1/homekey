import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Ionicons} from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    border: 1px solid ${({theme}) => theme.colors.line};
    border-radius:${RFValue(12)}px;
    margin-bottom: 16px;
`;

export const ItemTop = styled.View`
    
`;

export const AnnounceImage = styled.Image`
    width:100%;
    height: ${RFValue(160)}px;
    border-top-left-radius: ${RFValue(12)}px;
    border-top-right-radius: ${RFValue(12)}px;
    z-index:1;
`;

export const Favourite = styled.TouchableOpacity`
    width:${RFValue(35)}px;
    height:${RFValue(35)}px;
    z-index:2;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(8)}px;
    background:${({theme}) => theme.colors.shape};
    position: absolute;
    right: ${RFValue(16)}px;
    top: ${RFValue(16)}px;
`;

export const FavouriteIcon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(16)}px;
`;

export const ItemBottom = styled.View`
    padding:24px;
`;

export const ItemInfo = styled.View`
    margin-bottom: 20px;
`;

export const AnnounceAddress = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
`;

export const AnnounceTitle = styled.Text`
    margin-top: 4px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(16)}px;
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

export const ItemHorizontal = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Item = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 16px;
`;

export const ItemIcon = styled(Ionicons)`
    margin-right: 6px;
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(16)}px;
`;

export const ItemText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(13)}px;
`;