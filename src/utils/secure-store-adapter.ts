import * as SecureStore from 'expo-secure-store';
import { chunk } from 'lodash';

const chunkString = (str: string, size: number) =>
    chunk(str.split(''), size).map(s => s.join(''));

/**
 * Secure Storage with support for storing strings larger than 2048 characters
 */
const ExpoSecureStoreAdapter = {
    getItem: async (key: string) => {
        const value = await SecureStore.getItemAsync(key);

        if (value === null) {
            let chunkedValue = '';
            let done = false;
            let index = 0;
            while (!done) {
                const v = await SecureStore.getItemAsync(`${key}_chunk_${index}`);
                if (v === null) {
                    done = true;
                } else {
                    chunkedValue += v;
                }
                index++;
            }

            if (chunkedValue) {
                return chunkedValue;
            }
        }

        return value;
    },
    setItem: async (key: string, value: string) => {
        if (value.length > 2048) {
            const values = chunkString(value, 2048);
            await Promise.all(
                values.map((v, i) => SecureStore.setItemAsync(`${key}_chunk_${i}`, v))
            );
        } else {
            return SecureStore.setItemAsync(key, value);
        }
    },
    // HACK: No way of knowing if we have removed all chunks
    removeItem: async (key: string) => {
        await Promise.all([
            SecureStore.deleteItemAsync(key),
            SecureStore.deleteItemAsync(`${key}_chunk_0`),
            SecureStore.deleteItemAsync(`${key}_chunk_1`),
            SecureStore.deleteItemAsync(`${key}_chunk_2`),
            SecureStore.deleteItemAsync(`${key}_chunk_3`)
        ]);
    }
};

export default ExpoSecureStoreAdapter;
