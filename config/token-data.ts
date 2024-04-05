import { Config } from 'style-dictionary';

export interface GeneratePlatformTokensParams {
    platform: Platform;
    tokenType: TokenType;
    component?: string;
    appearance?: Appearance;
    customConfig?: (tokenData: TokenData) => Promise<Config>;
}

export interface TokenData {
    platform: Platform;
    tokenType: TokenType;
    filterName: string;
    component?: string;
    tokenPrefix?: string;
    appearance?: Appearance;
}

export enum Platform {
    IOS = 'ios',
    ANDROID = 'android',
}

export enum Appearance {
    LIGHT = 'light',
    DARK = `dark`,
}

export enum TokenType {
    CORE_COLOR = 'coreColor',
    LIGHT_COLOR = 'lightColor',
    DARK_COLOR = 'darkColor',
}

export const tokenTypeToFilterMap: Record<TokenType, string> = {
    [TokenType.CORE_COLOR]: 'isCoreColor',
    [TokenType.LIGHT_COLOR]: 'isLightColor',
    [TokenType.DARK_COLOR]: 'isDarkColor',
};

export const platformToBuildPlatform: Record<Platform, string> = {
    [Platform.ANDROID]: 'android',
    [Platform.IOS]: 'ios',
};
