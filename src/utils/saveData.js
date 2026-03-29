
export const saveData = (fileName, data) => {
    localStorage.setItem(fileName, JSON.stringify(data));
}

export const loadData = (fileName) => {
    const rawData = localStorage.getItem(fileName);

    if (rawData) {
        try {
            return JSON.parse(rawData);
        }
        catch (e) {
            console.error("Failed to load the data from the local storage", e);
            return [];
        }
    }

    return [];
};