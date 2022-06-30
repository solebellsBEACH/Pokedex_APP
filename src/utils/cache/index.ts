import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { IPokemonType } from '../interfaces'

export async function getDataAsyncStorage<T>(key: string): Promise<T> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    if (jsonValue === null) {
      throw new Error();
    }

    return JSON.parse(jsonValue);
  } catch (error) {
    return {} as T;
  }
}

export async function setDataAsyncStorage(
  key: string,
  value: string | object
): Promise<string | object | void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    return value;
  } catch (error) {
    return;
  }
}

export async function clearDataAsyncStorage(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // remove error
    return;
  }
}

// export const setFilters = (types: IPokemonType[]) => {
//     console.log(types.toString())
//     try {
//         AsyncStorage.setItem('@pokedex-app/type_filters', types.toString())
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const getFilters = async () => {
//     try {
//         console.log(await AsyncStorage.getItem('@pokedex-app/type_filters')+'kfjajkdfhajkfh')
//         return ''
//     } catch (error) {
//         console.error(error);
//     }

// }

// export const filtersIsFilled = () => {
//     const data = getFilters();
//     if (data == null || data == undefined) {
//         return false;
//     }
//     return true;
// }
