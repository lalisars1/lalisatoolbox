/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useEffect, ReactNode } from "react";

interface UserContextType {
  username: string | undefined;
  setUserName: (user: string | undefined) => void;
  osVersion: number | undefined;
  setOsVersion: (os: number | undefined) => void;
}

const UserContext = createContext<UserContextType>({
  username: undefined,
  setUserName: () => {},
  osVersion: undefined,
  setOsVersion: () => {},
});

export const SystemProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUserName] = useState<string | undefined>(undefined);
  const [osVersion, setOsVersion] = useState<number | undefined>(undefined);

  useEffect(() => {
    window.ipcRenderer.on("os-data", (_event, data: any) => {
      setUserName(data.username);
      setOsVersion(data.version);
    });
  }, [username, osVersion]);

  return (
    <UserContext.Provider
      value={{ username, setUserName, osVersion, setOsVersion }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
