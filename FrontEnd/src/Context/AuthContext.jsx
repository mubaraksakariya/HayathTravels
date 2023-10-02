import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for routing
import { useFirebaseAuth } from './FirebaseContext';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin } from '../Store/authSlice';
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = useFirebaseAuth();
    const navigate = useNavigate();
    const admin = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const serializedUser = {
                    uid: user.uid,
                    email: user.email,
                };
                dispatch(setAdmin(serializedUser));
            } else {
                console.log("user loged out");
                navigate('/admin/login/')
            }
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    return (
        <AuthContext.Provider value={admin}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
