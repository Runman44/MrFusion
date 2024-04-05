"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platformToBuildPlatform = exports.tokenTypeToFilterMap = exports.TokenType = exports.Appearance = exports.Platform = void 0;
var Platform;
(function (Platform) {
    Platform["IOS"] = "ios";
    Platform["ANDROID"] = "android";
})(Platform || (exports.Platform = Platform = {}));
var Appearance;
(function (Appearance) {
    Appearance["LIGHT"] = "light";
    Appearance["DARK"] = "dark";
})(Appearance || (exports.Appearance = Appearance = {}));
var TokenType;
(function (TokenType) {
    TokenType["CORE_COLOR"] = "coreColor";
    TokenType["LIGHT_COLOR"] = "lightColor";
    TokenType["DARK_COLOR"] = "darkColor";
})(TokenType || (exports.TokenType = TokenType = {}));
exports.tokenTypeToFilterMap = {
    [TokenType.CORE_COLOR]: 'isCoreColor',
    [TokenType.LIGHT_COLOR]: 'isLightColor',
    [TokenType.DARK_COLOR]: 'isDarkColor',
};
exports.platformToBuildPlatform = {
    [Platform.ANDROID]: 'android',
    [Platform.IOS]: 'ios',
};
