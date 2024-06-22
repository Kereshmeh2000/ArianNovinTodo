import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  filter: 'همه',
  theme: 'dark'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        status: 'انجام نشده',
        description: action.payload,
      });
    },
    setStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if(task) {
        task.status = action.payload.status;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    themeMode: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    }
  }
});

export const { addTask, setStatus, deleteTask, setFilter, themeMode } = taskSlice.actions;

export default taskSlice.reducer;
