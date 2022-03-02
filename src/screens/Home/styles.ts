import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { Platform } from 'react-native';

export const Container = styled.View`
    flex:1;
    background: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    margin-top: ${Platform.OS == "ios" ? getStatusBarHeight() + RFValue(30) : RFValue(30)}px;
    padding:0 24px;
`;

export const Localization = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LocalizationName = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(16)}px;
`;
export const LocalizationIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.primary};
    font-size:${RFValue(20)}px;
    margin-right: 12px;
`;

export const FiltersContainer = styled.View`
    margin-top:${RFValue(20)}px;
    flex-direction: row;
`;

export const Filter = styled.View`
    flex-direction: row;
    align-items: center;
    background:${({theme}) => theme.colors.secondary};
    padding:${RFValue(6)}px ${RFValue(12)}px;
    margin-right: 12px;
    border-radius: ${RFValue(20)}px;
    border:1px solid ${({theme}) => theme.colors.primary};
`;

export const FilterIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.primary};
    font-size:${RFValue(14)}px;
    margin-right: 6px;
`;

export const FilterText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.primary};
    font-size:${RFValue(14)}px;
`;


export const FilterInactive = styled.View`
    flex-direction: row;
    align-items: center;
    background:${({theme}) => theme.colors.background};
    padding:${RFValue(6)}px ${RFValue(12)}px;
    margin-right: 12px;
    border-radius: ${RFValue(20)}px;
    border:1px solid ${({theme}) => theme.colors.line};
`;

export const FilterIconInactive = styled(Feather)`
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
    margin-right: 6px;
`;

export const FilterIconInactiveRight = styled(Feather)`
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
    margin-left: 6px;
`;

export const FilterTextInactive = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
`;

export const SearchResult = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size:${RFValue(14)}px;
    margin-right: 6px;
`;

export const Content = styled.View`
    padding:0 24px;
    margin-top:${RFValue(20)}px;
    flex:1;
`;

export const Section = styled.View`
    margin-top: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size:${RFValue(18)}px;
`;
