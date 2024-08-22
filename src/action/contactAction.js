import {
	CONTACT_ME_REQUEST,
	CONTACT_ME_SUCCESS,
	CONTACT_ME_FAIL,
	CLEAR_ERRORS,
} from "../components/constant/contactConstant";
import axios from "axios";

export const sendMessage = (messageData) => async (dispatch) => {
	try {
		dispatch({ type: CONTACT_ME_REQUEST });

		const { data } = await axios.post("/mail", messageData, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log("data from contact action", data);

		dispatch({
			type: CONTACT_ME_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CONTACT_ME_FAIL,
			payload: error.response ? error.response.data.message : error.message,
		});
	}
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
