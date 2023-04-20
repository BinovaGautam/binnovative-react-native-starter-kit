export type IconType =
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'FontAwesome'
  | 'Entypo'
  | 'EvilIcons'
  | 'FontAwesome5'
  | 'Feather'
  | 'Foundation'
  | 'Fontisto'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial'
  | 'AntDesign';

export type optionType = {label: string; value: any};

export type AuthFragmentsType =
  | 'default'
  | 'forgotPassword'
  | 'welcome'
  | 'signin'
  | 'signup';

export type IconObj = {
  name: string;
  size?: number;
  color?: string;
  type: IconType;
};

export type AlertProps = {
  show: boolean;
  onClose?: () => void;
  onPress?: (value: any) => void; //TODO: Use Generics for different type of alerts
  hideClose?: boolean;
  extraProps?: any;
};

export type AssetType = {
  fileName: string;
  fileSize: number;
  type: string;
  uri: string;
};

export type GradientCardProps = {
  gradientColors?: string[];
  children?: React.ReactNode;
  style?: any;
  borderWidth?: number;
  opacity?: number;
};

export type DefaultCardProps = {
  children: React.ReactNode;
  style?: any;
  elevated?: boolean;
  containerStyle?: Object;
};

export type TextAlignType = 'left' | 'right' | 'center' | 'justify';

export type GeneralReducerProps = {
  alertObj?: AlertProps | null;
  imagesObj?: any;
  isLoading?: boolean;
  onConfirm?: () => void;
};

export type UpdateProfileFragmentType = {
  key : 'name' | 'email' | 'image'  ;
  value ?: string;
  label : string;
  editable ?: boolean;
  type ?: string;
}
