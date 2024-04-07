"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAllFilters = void 0;
const is_core_color_filter_js_1 = require("./is-core-color-filter.js");
const is_light_color_filter_js_1 = require("./is-light-color-filter.js");
const is_dark_color_filter_js_1 = require("./is-dark-color-filter.js");
const allFilters = [
    is_core_color_filter_js_1.isCoreColorFilter,
    is_light_color_filter_js_1.isLightColorFilter,
    is_dark_color_filter_js_1.isDarkColorFilter,
];
const registerAllFilters = () => {
    allFilters.forEach(filter => {
        filter;
    });
};
exports.registerAllFilters = registerAllFilters;
