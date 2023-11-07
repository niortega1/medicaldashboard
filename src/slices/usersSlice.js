import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'Zach Stilwell', isOnline: true, lastOnline: 'Online', profilePic: 'images/stilwell.avif' },
        { id: 2, name: 'Joey Bastion', isOnline: false, lastOnline: '14 minutes ago', profilePic: 'images/joey.avif' },
        { id: 3, name: 'Delaney Long', isOnline: false, lastOnline: '1 Day ago', profilePic: 'images/delaney.avif' },
    ],
    status: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Append the new user to the users array
        addUsers: (state, action) => {
            state.users.push(action.payload);
        },
        // Remove a user by ID
        removeUsers: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        },
        // Update the online status of a user by ID
        updateUserStatus: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) { // Make sure to compare index with -1
                state.users[index].isOnline = action.payload.isOnline;
                state.users[index].lastOnline = action.payload.lastOnline;
            }
        },
    },
});

export const { addUsers, removeUsers, updateUserStatus } = usersSlice.actions;
export default usersSlice.reducer;
