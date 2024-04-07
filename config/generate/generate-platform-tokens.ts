import StyleDictionary from 'style-dictionary';
import { getClassName } from '../helper/get-classname';
import { getFileName } from '../helper/get-file-name';
import { GeneratePlatformTokensParams, platformToBuildPlatform, tokenTypeToFilterMap, TokenData } from '../token-data';

// The generic part which uses Figma JSON file to generate tokens for each platform
export const generatePlatformTokens = async ({
    platform,
    tokenType,
}: GeneratePlatformTokensParams) => {
    console.log(`\nProcessing: [${platform}] [${tokenType}]`);

    const filterName = tokenTypeToFilterMap[tokenType];
    const buildPlatform = platformToBuildPlatform[platform];


    const tokenData: TokenData = {
        platform,
        tokenType,
        filterName,
    };

    const fileName = getFileName(tokenData);
    const className = getClassName(tokenData);

    const styled = StyleDictionary.extend({
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
};
