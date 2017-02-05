import Immutable from 'Immutable';

let initialState = Immutable.Map({
    "connections": Immutable.List([]),
    "openTabs": Immutable.List([]),
    "activeTab": ""
});

const connectionReducer = (state = initialState, action = "") => {
    var payload = action.payload;
    switch (action.type) {
        case "OPEN_NEW_TAB":
        {
            return state.set('openTabs', state.get('openTabs').push(payload));
        }
        case "CLOSE_TAB":
        {
            let index = state.get('openTabs').indexOf(payload);
            return state.set('openTabs', state.get('openTabs').delete(index));
        }
        case "LOAD_CONNECTIONS":
        {
            return state.set('connections', payload);
        }
        case "SET_ACTIVE_TAB":
        {
            return state.set('activeTab', payload);
        }
        default:
            return state;
    }
};

export default connectionReducer