import StyleDictionary from 'style-dictionary';
import { registerAllFilters } from './config/filters/filters';
import { generateColorTokens } from './config/generate/generate-color-tokens';

registerAllFilters();
generateColorTokens();
