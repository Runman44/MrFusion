import { Core } from 'style-dictionary';
import { isCoreColorFilter } from './is-core-color-filter.js';
import { isLightColorFilter } from './is-light-color-filter.js';
import { isDarkColorFilter } from './is-dark-color-filter.js';

const allFilters: Core[] = [
    isCoreColorFilter,
    isLightColorFilter,
    isDarkColorFilter,
];

export const registerAllFilters = () => {
    allFilters.forEach(filter => {
        filter;
    });
};
