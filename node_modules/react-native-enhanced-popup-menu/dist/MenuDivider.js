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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDivider = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
exports.MenuDivider = ({ color = 'rgba(0,0,0,0.12)' }) => {
    return <react_native_1.View style={[styles.divider, { borderBottomColor: color }]}/>;
};
const styles = react_native_1.StyleSheet.create({
    divider: {
        flex: 1,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudURpdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTWVudURpdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsK0NBQWdEO0FBTW5DLFFBQUEsV0FBVyxHQUFHLENBQUMsRUFDMUIsS0FBSyxHQUFHLGtCQUFrQixFQUNULEVBQUUsRUFBRTtJQUNyQixPQUFPLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQztBQUN6RSxDQUFDLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsQ0FBQztRQUNQLGlCQUFpQixFQUFFLHlCQUFVLENBQUMsYUFBYTtLQUM1QztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFN0eWxlU2hlZXQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVEaXZpZGVyUHJvcHMge1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1lbnVEaXZpZGVyID0gKHtcbiAgY29sb3IgPSAncmdiYSgwLDAsMCwwLjEyKSdcbn06IE1lbnVEaXZpZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmRpdmlkZXIsIHsgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yIH1dfSAvPjtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZGl2aWRlcjoge1xuICAgIGZsZXg6IDEsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFN0eWxlU2hlZXQuaGFpcmxpbmVXaWR0aFxuICB9XG59KTtcbiJdfQ==