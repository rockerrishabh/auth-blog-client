import { createContext, useState } from "react";
import { UserProps } from "../hooks/useAuth.ts";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthProps = {
  user: UserProps | null;
  token: string | null;
};

type AuthContextProps = {
  auth: AuthProps | undefined | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthProps | undefined | null>>;
};

const initialValues = {
  auth: {
    user: null,
    token: null,
  },
  setAuth: () => {},
};

export const AuthContext = createContext<AuthContextProps>({
  ...initialValues,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthProps | null>();
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
