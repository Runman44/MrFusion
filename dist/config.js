"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filters_1 = require("./config/filters/filters");
const generate_color_tokens_1 = require("./config/generate/generate-color-tokens");
(0, filters_1.registerAllFilters)();
(0, generate_color_tokens_1.generateColorTokens)();
