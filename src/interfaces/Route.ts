import { Announce } from "./Announce";

export type RootStackParamList = {
    Initial: undefined;
    Favourites: undefined;
    Inbox: undefined;
    Account: undefined;
    SingleAnnounce: {
      data: Announce;
    };
  };