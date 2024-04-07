"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassName = exports.platformToClassNameFunction = exports.getDefaultClassName = void 0;
const token_data_1 = require("../token-data");
const capitalize_first_letter_1 = require("./capitalize-first-letter");
const getDefaultClassName = ({ tokenType, }) => `Fushion${(0, capitalize_first_letter_1.capitalizeFirstLetter)(tokenType)}`;
exports.getDefaultClassName = getDefaultClassName;
exports.platformToClassNameFunction = {
    [token_data_1.Platform.ANDROID]: exports.getDefaultClassName,
    [token_data_1.Platform.IOS]: exports.getDefaultClassName,
};
const getClassName = (tokenData) => {
    const { platform } = tokenData;
    const classNameFunction = exports.platformToClassNameFunction[platform];
    return classNameFunction(tokenData);
};
exports.getClassName = getClassName;
