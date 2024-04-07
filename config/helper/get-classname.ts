import { Platform, TokenData } from '../token-data';
import { capitalizeFirstLetter } from './capitalize-first-letter';

type GetClassNameFunction = (
    tokenData: TokenData,
) => string;

export const getDefaultClassName = ({
    tokenType,
}: TokenData): string =>
    `Fushion${capitalizeFirstLetter(tokenType)}`;

export const platformToClassNameFunction: Record<
    Platform,
    GetClassNameFunction
> = {
    [Platform.ANDROID]: getDefaultClassName,
    [Platform.IOS]: getDefaultClassName,
};

export const getClassName = (tokenData: TokenData): string => {
    const { platform } = tokenData;
    const classNameFunction = platformToClassNameFunction[platform];
    return classNameFunction(tokenData);
};
