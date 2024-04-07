"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileName = exports.getIOSFileName = exports.getAndroidFileName = void 0;
const token_data_1 = require("../token-data");
const capitalize_first_letter_1 = require("./capitalize-first-letter");
const iOSFilePostFix = '.generated';
const getAndroidFileName = ({ tokenType, }) => `Fushion${(0, capitalize_first_letter_1.capitalizeFirstLetter)(tokenType)}`;
exports.getAndroidFileName = getAndroidFileName;
const getIOSFileName = ({ tokenType, component }) => `Fushion${tokenType}{iOSFilePostFix}`;
exports.getIOSFileName = getIOSFileName;
const platformToFileNameFunction = {
    [token_data_1.Platform.ANDROID]: exports.getAndroidFileName,
    [token_data_1.Platform.IOS]: exports.getIOSFileName,
};
const getFileName = (tokenData) => {
    const { platform, tokenType } = tokenData;
    const getFileNameFunction = platformToFileNameFunction[platform];
    return getFileNameFunction(tokenData);
};
exports.getFileName = getFileName;
