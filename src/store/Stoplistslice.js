import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "stopList";

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Не удалось прочитать стоп-лист из localStorage:", error);
    return [];
  }
}

function saveToStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Не удалось сохранить стоп-лист в localStorage:", error);
  }
}

const initialState = {
  items: loadFromStorage(),
};

const stopListSlice = createSlice({
  name: "stopList",
  initialState,
  reducers: {

    addToStopList: (state, action) => {
      state.items.push(action.payload);
      saveToStorage(state.items);
    },

    returnToMenu: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
      saveToStorage(state.items);
    },
  },
});

export const { addToStopList, returnToMenu } = stopListSlice.actions;

export default stopListSlice.reducer;
