import { createSlice } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
export const authSlice = createSlice({
    name: 'isAdmin',
    initialState: {
        admin: null,
    },
    reducers: {
        setAdmin: (state, action) => {
            state.admin = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAdmin } = authSlice.actions


// Thunk action to sign in
export const login = (auth, email, password) => async (dispatch) => {
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const serializedUser = {
                    uid: user.uid,
                    email: user.email,
                };
                dispatch(setAdmin(serializedUser));
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                dispatch(setAdmin(null))
            });
    } catch (error) {
        console.log(error.message);
    }
};

export default authSlice.reducer