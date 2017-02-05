import storage from 'electron-storage';

export const loadConnections = (connections) => {

    return {
        type: 'LOAD_CONNECTIONS',
        payload: connections
    }
};

export const addNewConnection = (connection) => {
    storage.set('connection', connection, (err) => {
        if (err) {
            console.error(err)
        }
        return {
            type: 'ADD_NEW_CONNECTION',
            payload: connection
        }
    });


};


export const openNewTab = (uuid) => {
    return {
        type: 'OPEN_NEW_TAB',
        payload: uuid
    }
};

export const closeTab = (uuid) => {
    return {
        type: 'CLOSE_TAB',
        payload: uuid
    }
};

export const setActiveTab = (uuid) => {
    return {
        type: 'SET_ACTIVE_TAB',
        payload: uuid
    }
};


