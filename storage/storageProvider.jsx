import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageContext = createContext();

const STORAGE_KEY = "app_storage";

const defaultStorage = {
  isHapticEnabled: true,
};

export function StorageProvider({ children }) {
  const [storage, setStorage] = useState(defaultStorage);

  useEffect(() => {
    loadStorage();
  }, []);

  const loadStorage = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);

      if (stored) {
        setStorage(JSON.parse(stored));
      }
    } catch (error) {
      console.log("Error loading storage:", error);
    }
  };

  const saveStorage = async (newStorage) => {
    try {
      setStorage(newStorage);
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newStorage)
      );
    } catch (error) {
      console.log("Error saving storage:", error);
    }
  };

  const toggleHapticEnabled = () => {
    saveStorage({
      ...storage,
      isHapticEnabled: !storage.isHapticEnabled,
    });
  };

  return (
    <StorageContext.Provider
      value={{
        storage,
        toggleHapticEnabled,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error("useStorage must be used inside StorageProvider");
  }

  return context;
}