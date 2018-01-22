const SHOW_CONTACT_PANEL = 'showContactPanel';
const HIDE_CONTACT_PANEL = 'hideContactPanel';

export const showContactPanel = () => {
    return {
        type: SHOW_CONTACT_PANEL
    };
};

export const hideContactPanel = () => {
    return {
        type: HIDE_CONTACT_PANEL
    };
};

export const displayContactPanelReducer = (state = false, action) => {
    switch (action.type) {
        case SHOW_CONTACT_PANEL:
            return true;
        case HIDE_CONTACT_PANEL:
            return false;
        default:
            return state;
    }
};