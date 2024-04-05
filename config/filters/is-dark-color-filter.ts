import StyleDictionary, { TransformedToken } from 'style-dictionary';
import { AttributeType } from './filters.constants';

export const isDarkColorFilter = StyleDictionary.registerFilter({
    name: 'isDarkColor',
    matcher: ({ attributes }: TransformedToken) => {
        if (!attributes) {
            return false;
        }
        const { category, type } = attributes;

       return category === 'color' && type === AttributeType.DARK;
    },
});
