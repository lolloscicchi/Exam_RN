export enum Screen {
  Home = 'Home',
  Detail = 'Detail',
  Favorite = 'Favorite',
}

export type TabParams = {
  [Screen.Home]: undefined; // Home ha il proprio Stack interno
  [Screen.Favorite]: undefined;
  [Screen.Detail]: undefined;
};

// Per il RootStack
export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
  };
};
