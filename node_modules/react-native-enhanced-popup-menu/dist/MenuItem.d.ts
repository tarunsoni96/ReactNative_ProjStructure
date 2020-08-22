import { PropsWithChildren } from 'react';
import { TextProps, TouchableHighlightProps } from 'react-native';
interface MenuItemProps {
    disabled?: boolean;
    disabledTextColor?: string;
    underlayColor?: TouchableHighlightProps['underlayColor'];
    style?: TouchableHighlightProps['style'];
    textStyle?: TextProps['style'];
    onPress: TouchableHighlightProps['onPress'];
}
export declare const MenuItem: ({ disabled, disabledTextColor, underlayColor, style, textStyle, children, onPress, ...props }: PropsWithChildren<MenuItemProps>) => JSX.Element;
export {};
//# sourceMappingURL=MenuItem.d.ts.map