import React, { createContext } from 'react';

export const ServerContext = createContext(null)

const ServerProvider = ({ children }) => {
    const serverLink = 'http://localhost:5000'
    const serverInfo = { serverLink }
    return (
        <ServerContext.Provider value={serverInfo}>
            {children}
        </ServerContext.Provider>
    );
};

export default ServerProvider;