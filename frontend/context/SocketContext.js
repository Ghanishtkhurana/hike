import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const SocketContext = React.createContext(null);

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineusers, setOnlineUsers] = useState([]);
  const { authContext } = useContext(AuthContext);

  useEffect(() => {
    if (authContext) {
      const newSocket = io("http://localhost:8080", {
        query: { userId: authContext._id },
      });
      setSocket(newSocket);

      newSocket.on("getonlineusers", (users) => {
        setOnlineUsers(users);
      });
    } else {
      // socket.close();
      setSocket(null);
    }
  }, [authContext]);
  return (
    <SocketContext.Provider value={{ onlineusers, socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
