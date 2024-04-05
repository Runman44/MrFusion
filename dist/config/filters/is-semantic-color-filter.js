"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSemanticColorFilter = void 0;
const style_dictionary_1 = __importDefault(require("style-dictionary"));
const filters_constants_1 = require("./filters.constants");
exports.isSemanticColorFilter = style_dictionary_1.default.registerFilter({
    name: 'isSemanticColor',
    matcher: ({ attributes }) => {
        if (!attributes) {
            return false;
        }
        const { category, type } = attributes;
        return (category === 'color' &&
            type !== filters_constants_1.AttributeType.CORE &&
            type !== filters_constants_1.AttributeType.GRADIENT);
    },
});
