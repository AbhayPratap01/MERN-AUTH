import { createContext, useContext, useEffect, useState } from "react";
import { refreshToken, getDashboard } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [accessToken, setAccessToken] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        initializeAuth();

    }, []);

    const initializeAuth = async () => {
  try {
    const refreshResponse = await refreshToken();

    const token = refreshResponse.data.accessToken;

    setAccessToken(token);

    const profileResponse = await getDashboard(token);

    setUser(profileResponse.data.user);

  } catch (error) {
    setAccessToken(null);
    setUser(null);
  } finally {
    setLoading(false);
  }
};

    const login = (userData, token) => {

        setUser(userData);

        setAccessToken(token);

    };

    const logout = () => {

        setUser(null);

        setAccessToken(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                accessToken,
                loading,
                login,
                logout,
                setUser,
                setAccessToken,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);