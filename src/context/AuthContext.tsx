import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_URL, GET_USER_PROFILE_ROUTE } from '@/constants';

type authContextType = {
  user: any|null;
};

const authContextDefaultValues: authContextType = {
  user: null
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export const AuthProvider = ({ children }:{children: React.ReactNode}) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
        const getUser = await fetch(API_URL+GET_USER_PROFILE_ROUTE );
        const user = await getUser.json();
        setUser(user);
    }
    getData();
  }, []);

  // const login = async (email, password) => {
  //   // Implement your login logic here
  // };

  // const logout = async () => {
  //   // Implement your logout logic here
  // };

  return (
    <AuthContext.Provider value={{ user }}>
    {children}
  </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);