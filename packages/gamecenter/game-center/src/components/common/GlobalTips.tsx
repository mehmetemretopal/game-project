import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParam = {
  HomeList: undefined;
  Detail: {
    title?: string;
    id: any;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParam, 'HomeList'>;
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParam, 'Detail'>;
export type DetailScreenRouteProp = RouteProp<RootStackParam, 'Detail'>;