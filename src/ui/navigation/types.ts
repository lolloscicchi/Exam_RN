export enum Screen {
  Home = 'Home',
  Detail = 'Detail',
  Favourite = 'Favourite',
}

export type TabParams = {
  [Screen.Home]: undefined; // Home ha il proprio Stack interno
  [Screen.Favourite]: undefined;
};

// Per il RootStack
export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
  };
};
