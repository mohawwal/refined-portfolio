import {
    CONTACT_ME_REQUEST,
    CONTACT_ME_SUCCESS,
    CONTACT_ME_FAIL
} from "../constant/contactConstant"

export const contactReducer = (state = {}, action) => {
    switch(action.type) {

        case CONTACT_ME_REQUEST:
            return {
                loading: true,
            }

        case CONTACT_ME_SUCCESS:
            return {
                loading: false,
                delivered: action.payload.delivered,
                message: action.payload.message
            }

        case CONTACT_ME_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

