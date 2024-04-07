"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColorTokens = void 0;
const generate_platform_tokens_1 = require("./generate-platform-tokens");
const token_data_1 = require("../token-data");
const colorTokenTypes = [token_data_1.TokenType.LIGHT_COLOR, token_data_1.TokenType.DARK_COLOR, token_data_1.TokenType.CORE_COLOR];
const platforms = [
    token_data_1.Platform.ANDROID,
];
const generateColorTokens = () => {
    platforms.forEach(platform => {
        colorTokenTypes.map(tokenType => {
            (0, generate_platform_tokens_1.generatePlatformTokens)({
                platform: platform,
                tokenType: tokenType,
            });
        });
    });
};
exports.generateColorTokens = generateColorTokens;
