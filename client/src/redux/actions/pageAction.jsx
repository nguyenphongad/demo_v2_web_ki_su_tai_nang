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

export const createPage = ({pageNameValue, titleTable, descriptionTable, rowTitleList}) => async (dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        });

        const res = await postDataApi('/page', {
            pageName: pageNameValue,
            tableName: titleTable,
            tableDescription: descriptionTable,
            rowTitleList
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
                error: 'Tạo Page Thất Bại'
            }
        });
    }
}