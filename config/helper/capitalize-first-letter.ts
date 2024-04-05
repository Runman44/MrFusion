export const capitalizeFirstLetter = (name: string | undefined): string => {
    if (!name) {
        return '';
    }

    return name.charAt(0).toUpperCase() + name.slice(1);
};
