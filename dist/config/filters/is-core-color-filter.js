"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCoreColorFilter = void 0;
const style_dictionary_1 = __importDefault(require("style-dictionary"));
const filters_constants_1 = require("./filters.constants");
exports.isCoreColorFilter = style_dictionary_1.default.registerFilter({
    name: 'isCoreColor',
    matcher: ({ attributes }) => {
        if (!attributes) {
            return false;
        }
        const { category, type } = attributes;
        return category === 'color' && type === filters_constants_1.AttributeType.CORE;
    },
});
