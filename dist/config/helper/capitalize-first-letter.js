"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = (name) => {
    if (!name) {
        return '';
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
