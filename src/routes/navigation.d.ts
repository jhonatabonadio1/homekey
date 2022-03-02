import { RootStackParamList } from '../interfaces/Route'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}