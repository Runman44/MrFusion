export const AttributeType = {
    CORE: 'core',
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];
