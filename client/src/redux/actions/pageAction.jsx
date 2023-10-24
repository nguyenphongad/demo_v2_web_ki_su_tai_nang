import {postDataApi} from '../../utils/fetchData';
import GLOBALTYPES from '../../redux/actions/globalTypes';

export const addRow = (data) => async (dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        })
        const res = await postDataApi('/row', data);
        
        console.log(res);

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.status
            }
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: 'Thêm Thông Tin Bảng Thất Bại'
            }
        })
    }
}