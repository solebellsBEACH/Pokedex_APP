import AsyncStorage from '@react-native-async-storage/async-storage'

const setAsyncStorageData = async (value: string, key: string) => {
  try {
    await AsyncStorage.setItem(`@storage_Key_${key}`, value)
  } catch (e) {
    console.error(`Não foi possivel alterar storage @storage_Key_${key}`)
  }
}

const getAsyncStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@storage_Key_${key}`)
    if (value) return value
    return null
  } catch (e) {
    console.error(`Não foi possivel retornar storage @storage_Key_${key}`)
    return null
  }
}

export {
  getAsyncStorageData,
  setAsyncStorageData
}