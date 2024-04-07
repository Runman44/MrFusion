import { Platform, TokenData, TokenType } from '../token-data';
import { capitalizeFirstLetter } from './capitalize-first-letter';

type GetFileNameFunction = (
    tokenData: TokenData,
) => string;

const iOSFilePostFix = '.generated';

export const getAndroidFileName = ({
    tokenType,
}: TokenData) =>
    `Fushion${capitalizeFirstLetter(tokenType)}`;

export const getIOSFileName = (
    {tokenType, component }: TokenData
) =>
    `Fushion${tokenType}{iOSFilePostFix}`;

const platformToFileNameFunction: Record<Platform, GetFileNameFunction> = {
    [Platform.ANDROID]: getAndroidFileName,
    [Platform.IOS]: getIOSFileName,
};

export const getFileName = (tokenData: TokenData): string => {
    const { platform, tokenType } = tokenData;
    const getFileNameFunction = platformToFileNameFunction[platform];
    return getFileNameFunction(tokenData);
};
