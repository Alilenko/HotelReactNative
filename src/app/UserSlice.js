import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {email: null,
        id: null,
        favorites: [],
        balance: null}
    ],
    currentUser: {
        email: null,
        id: null,
        favorites: [],
        balance: null
    },
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload
        },
        deleteCurrentUser: (state)=> {
            state.currentUser = {email: null,
                id: null,
                favorites: [],
                balance: null}
        },
        addNewUser: (state, action) => {
            state.users.push(action.payload)
        },     
        changeBalance: (state, action) => {
            state.currentUser.balance = action.payload
        },
        addFavorites: (state, action) => {
            state.currentUser.favorites.push(action.payload)
        },
        userLoading: state => {
            state.loading = true
        },
        userError: state => {
            state.error = true
            state.loading = false
        },
    }
})

const {actions, reducer} = userSlice;
export default reducer;
export const {
    setUser,
    changeBalance,
    addFavorites
} = actions;