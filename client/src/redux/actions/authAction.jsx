import { getDataApi, postDataApi } from "../../utils/fetchData"
import { getLogged, removeLogged, setLogged } from "../../utils/handleLogged";
import GLOBALTYPES from "./globalTypes";

export const login = ({
    studentId,
    password
}) => async (dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        })

        const res = await postDataApi('/login', {
            studentId,
            password
        });

        dispatch({
            type: GLOBALTYPES.AUTH.SET_INFO_LOGIN,
            payload: res.data.data
        })

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {success: res.data.status}
        })

        setLogged();
    } catch (error) {
        console.log(error);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: error.reponse?.data.msg || 'Error Login'}
        })
    }
}

export const register = (data) => async(dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        });

        const res = await postDataApi('/register', data);

        dispatch({
            type: GLOBALTYPES.AUTH.SET_INFO_LOGIN,
            payload:  res.data.data
        });

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.status
            }
        });

    } catch (error) { 
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: "Error Update Student Infomation"
            }
        });
    }
}
export const logout = () => async(dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        });

        const res = await getDataApi('/logout');

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.status
            }
        });

        removeLogged();
        window.location.reload();
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: 'Error Logout'
            }
        });
    }
}

export const verifyAccessToken = () => async (dispatch) => {
    try {
        const res = await getDataApi('/access_token');
        
        dispatch({
            type: GLOBALTYPES.AUTH.SET_INFO_LOGIN,
            payload: res.data
        });

    } catch (error) {
        if(getLogged()) {
            removeLogged();
            window.location.reload();
        }
    }
}


