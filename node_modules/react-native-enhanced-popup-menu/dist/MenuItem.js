"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
exports.MenuItem = (_a) => {
    var { disabled = false, disabledTextColor = '#BDBDBD', underlayColor = '#E0E0E0', style, textStyle, children, onPress } = _a, props = __rest(_a, ["disabled", "disabledTextColor", "underlayColor", "style", "textStyle", "children", "onPress"]);
    return (<react_native_1.TouchableHighlight disabled={disabled} onPress={onPress} style={[styles.container, style]} underlayColor={underlayColor} {...props}>
      <react_native_1.Text ellipsizeMode={react_native_1.Platform.OS === 'ios' ? 'clip' : 'tail'} numberOfLines={1} style={[
        styles.title,
        disabled && { color: disabledTextColor },
        textStyle
    ]}>
        {children}
      </react_native_1.Text>
    </react_native_1.TouchableHighlight>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        height: 48,
        justifyContent: 'center',
        maxWidth: 248,
        minWidth: 124
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        paddingHorizontal: 16
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTWVudUl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUcvQiwrQ0FPc0I7QUFXVCxRQUFBLFFBQVEsR0FBRyxDQUFDLEVBU1UsRUFBRSxFQUFFO1FBVGQsRUFDdkIsUUFBUSxHQUFHLEtBQUssRUFDaEIsaUJBQWlCLEdBQUcsU0FBUyxFQUM3QixhQUFhLEdBQUcsU0FBUyxFQUN6QixLQUFLLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixPQUFPLE9BRTBCLEVBRDlCLEtBQUssY0FSZSwrRkFTeEIsQ0FEUztJQUVSLE9BQU8sQ0FDTCxDQUFDLGlDQUFrQixDQUNqQixRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FDbkIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQ2pCLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUNqQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FDN0IsSUFBSSxLQUFLLENBQUMsQ0FFVjtNQUFBLENBQUMsbUJBQUksQ0FDSCxhQUFhLENBQUMsQ0FBQyx1QkFBUSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQ3ZELGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNqQixLQUFLLENBQUMsQ0FBQztRQUNMLE1BQU0sQ0FBQyxLQUFLO1FBQ1osUUFBUSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1FBQ3hDLFNBQVM7S0FDVixDQUFDLENBRUY7UUFBQSxDQUFDLFFBQVEsQ0FDWDtNQUFBLEVBQUUsbUJBQUksQ0FDUjtJQUFBLEVBQUUsaUNBQWtCLENBQUMsQ0FDdEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsY0FBYyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxFQUFFO0tBQ3RCO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIFN0eWxlU2hlZXQsXG4gIFRleHQsXG4gIFRleHRQcm9wcyxcbiAgVG91Y2hhYmxlSGlnaGxpZ2h0LFxuICBUb3VjaGFibGVIaWdobGlnaHRQcm9wcyxcbiAgUGxhdGZvcm1cbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW50ZXJmYWNlIE1lbnVJdGVtUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkVGV4dENvbG9yPzogc3RyaW5nO1xuICB1bmRlcmxheUNvbG9yPzogVG91Y2hhYmxlSGlnaGxpZ2h0UHJvcHNbJ3VuZGVybGF5Q29sb3InXTtcbiAgc3R5bGU/OiBUb3VjaGFibGVIaWdobGlnaHRQcm9wc1snc3R5bGUnXTtcbiAgdGV4dFN0eWxlPzogVGV4dFByb3BzWydzdHlsZSddO1xuICBvblByZXNzOiBUb3VjaGFibGVIaWdobGlnaHRQcm9wc1snb25QcmVzcyddO1xufVxuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSAoe1xuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBkaXNhYmxlZFRleHRDb2xvciA9ICcjQkRCREJEJyxcbiAgdW5kZXJsYXlDb2xvciA9ICcjRTBFMEUwJyxcbiAgc3R5bGUsXG4gIHRleHRTdHlsZSxcbiAgY2hpbGRyZW4sXG4gIG9uUHJlc3MsXG4gIC4uLnByb3BzXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNZW51SXRlbVByb3BzPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUb3VjaGFibGVIaWdobGlnaHRcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uUHJlc3M9e29uUHJlc3N9XG4gICAgICBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHN0eWxlXX1cbiAgICAgIHVuZGVybGF5Q29sb3I9e3VuZGVybGF5Q29sb3J9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFRleHRcbiAgICAgICAgZWxsaXBzaXplTW9kZT17UGxhdGZvcm0uT1MgPT09ICdpb3MnID8gJ2NsaXAnIDogJ3RhaWwnfVxuICAgICAgICBudW1iZXJPZkxpbmVzPXsxfVxuICAgICAgICBzdHlsZT17W1xuICAgICAgICAgIHN0eWxlcy50aXRsZSxcbiAgICAgICAgICBkaXNhYmxlZCAmJiB7IGNvbG9yOiBkaXNhYmxlZFRleHRDb2xvciB9LFxuICAgICAgICAgIHRleHRTdHlsZVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgPC9Ub3VjaGFibGVIaWdobGlnaHQ+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGhlaWdodDogNDgsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heFdpZHRoOiAyNDgsXG4gICAgbWluV2lkdGg6IDEyNFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTZcbiAgfVxufSk7XG4iXX0=