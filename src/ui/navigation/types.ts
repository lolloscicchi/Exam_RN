export enum Screen {
  Home = 'Home',
  Detail = 'Detail',
  Favorite = 'Favorite',
}

export type TabParams = {
  [Screen.Home]: undefined; // Home ha il proprio Stack interno
  [Screen.Favorite]: undefined;
};

// Per il RootStack
export type MainParamList = {
  TabNavigator: undefined;
};
