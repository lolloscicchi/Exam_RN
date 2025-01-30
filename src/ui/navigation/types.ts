export enum Screen {
  Home = 'Home',
  Detail = 'Detail',
  Favorite = 'Favorite',
  Image = 'Image',
}

export type TabParams = {
  [Screen.Home]: undefined; // Home ha il proprio Stack interno
  [Screen.Favorite]: undefined;
  [Screen.Detail]: undefined;
  [Screen.Image]: undefined;
};

// Per il RootStack
export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
  };
  [Screen.Image]: {
    uri: string;
  };
};
