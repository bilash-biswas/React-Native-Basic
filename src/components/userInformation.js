import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log('Data Successfully Saved');
    } catch (error) {
        console.error('Error saving data', error);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if(value !== null){
            console.log('Data retrieved', value);
            return value;
        }
    } catch (error) {
        console.error('Error retrieving data', error);
    }
}

export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Data removed');
    } catch (error) {
        console.error('Error removing data', error);
    }
}

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear();
        console.log("All Data cleared");
    } catch (error) {
        console.error('Error clearing data', error);
    }
}