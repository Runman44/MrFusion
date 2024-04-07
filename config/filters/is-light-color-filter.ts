import StyleDictionary, { TransformedToken } from 'style-dictionary';
import { AttributeType } from './filters.constants';

export const isLightColorFilter = StyleDictionary.registerFilter({
    name: 'isLightColor',
    matcher: ({ attributes }: TransformedToken) => {
        if (!attributes) {
            return false;
        }
        const { category, type } = attributes;

       return category === 'color' && type === AttributeType.LIGHT;
    },
});
