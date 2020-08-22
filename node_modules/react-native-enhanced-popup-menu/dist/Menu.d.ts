import * as React from 'react';
import { Animated, NativeMethods, StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native';
export declare enum Position {
    TOP_LEFT = 0,
    TOP_RIGHT = 1,
    TOP_CENTER = 2,
    BOTTOM_LEFT = 3,
    BOTTOM_RIGHT = 4,
    BOTTOM_CENTER = 5
}
export interface Offset {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}
export declare type ComputeOffsetCallback = ((left: number, top: number, width: number, height: number) => Offset) | null;
declare const enum STATES {
    MEASURING = 0,
    CALCULATING = 1,
    SHOWN = 2,
    HIDDEN = 3,
    ANIMATING = 4
}
declare type PositionShift = {
    left: number;
    top: number;
};
interface ComponentLayout {
    left: number;
    top: number;
    width: number;
    height: number;
}
interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    onHidden?: () => {};
}
interface State {
    menuState: STATES;
    stickTo: Position;
    component: ComponentLayout;
    menu: ComponentLayout;
    offsets: {
        staticOffset: PositionShift;
        computedOffset: PositionShift;
    };
    animation: {
        menuSize: Animated.ValueXY;
        opacity: Animated.Value;
    };
}
export declare class Menu extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidUpdate(): void;
    show: (componentRef: React.RefObject<React.Component<any> & Readonly<NativeMethods>>['current'], stickTo?: Position | null, extraOffset?: Offset | null, computeOffset?: ComputeOffsetCallback) => void;
    _onMenuLayout: (event: LayoutChangeEvent) => void;
    _onDismiss: () => void;
    hide: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Menu.d.ts.map