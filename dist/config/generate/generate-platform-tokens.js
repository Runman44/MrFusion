"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePlatformTokens = void 0;
const style_dictionary_1 = __importDefault(require("style-dictionary"));
const get_classname_1 = require("../helper/get-classname");
const get_file_name_1 = require("../helper/get-file-name");
const token_data_1 = require("../token-data");
// The generic part which uses Figma JSON file to generate tokens for each platform
const generatePlatformTokens = (_a) => __awaiter(void 0, [_a], void 0, function* ({ platform, tokenType, }) {
    console.log(`\nProcessing: [${platform}] [${tokenType}]`);
    const filterName = token_data_1.tokenTypeToFilterMap[tokenType];
    const buildPlatform = token_data_1.platformToBuildPlatform[platform];
    const tokenData = {
        platform,
        tokenType,
        filterName,
    };
    const fileName = (0, get_file_name_1.getFileName)(tokenData);
    const className = (0, get_classname_1.getClassName)(tokenData);
    const styled = style_dictionary_1.default.extend({
        source: ['tokens/**/*.json'],
        platforms: {
            android: {
                transforms: [
                    'attribute/cti',
                    'name/cti/camel',
                    'color/composeColor',
                ],
                buildPath: '../build/android/',
                files: [{
                        destination: `${fileName}.kt`,
                        format: 'compose/object',
                        className: className,
                        packageName: 'fushion.fundamentals.token',
                        filter: filterName,
                    }]
            }
        }
    });
    styled.buildPlatform(buildPlatform);
    console.log('\nEnd processing');
});
exports.generatePlatformTokens = generatePlatformTokens;
