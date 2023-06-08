//? Defines optional propertes for any Icon being instantiated
export interface IconProperties {
  iconHeight: string;
  iconWidth: string;
  iconFillColor?: string;
}

//? Adds stroke properties to the previous interface
export interface IconPropertiesWithStroke extends IconProperties {
  iconStrokeColor?: string;
  iconStrokeWidth?: string;
}
