import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    taskIdToDelete: null, // برای ذخیره id وظیفه‌ای که قرار است حذف شود
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.taskIdToDelete = action.payload; // ذخیره id وظیفه‌ای که قرار است حذف شود
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.taskIdToDelete = null; // پاک کردن id وظیفه‌ای که قرار است حذف شود
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
