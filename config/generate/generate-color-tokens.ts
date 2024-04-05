import { generatePlatformTokens } from './generate-platform-tokens';
import { Appearance, Platform, TokenType } from '../token-data';

const colorTokenTypes = [TokenType.LIGHT_COLOR, TokenType.DARK_COLOR, TokenType.CORE_COLOR];

const platforms = [
    Platform.ANDROID,
];

export const generateColorTokens = () => {
    platforms.forEach(platform => {
            colorTokenTypes.map(tokenType => {
                generatePlatformTokens({
                    platform: platform as Platform,
                    tokenType: tokenType as TokenType,
                });
            });
    });
};
