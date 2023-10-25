import { Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom/dist';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import PageRender from './config/routes/PageRender';
import { useEffect } from 'react';
import { authSelector } from './redux/selector';
import { verifyAccessToken } from './redux/actions/authAction';
import Alert from './components/ComponentToast/Alert';
import FirstLogin from './components/ComponentFirstLogin/FirstLogin';
import GLOBALTYPES from './redux/actions/globalTypes';
import { getLogged } from './utils/handleLogged';
import { getDataApi } from './utils/fetchData';
import NotFound from './pages/NotFound';

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);
    // console.log(auth?.user?.roles.includes("0004") && auth?.user?.roles.includes("0003"));

    const location = useLocation();
    const pathName = location.pathname;

    useEffect(() => { 
        if(auth?.user || getLogged()) {
            dispatch(verifyAccessToken());
            if (pathName.includes('/page/')) {
                getDataApi(pathName)
                    .then((res) => {
                        dispatch({
                            type: GLOBALTYPES.PAGE.DYNAMIC_PAGE_INFO,
                            payload: {
                                pathName, 
                                pageId: res.data.data?._id,
                                pageName: res.data.data?.pageName,
                                tables: res.data.data.tables
                            }
                        });
                    })
                    .catch((e) => {
                        dispatch({
                            type: GLOBALTYPES.ALERT,
                            payload: {
                                error: 'Lấy Dữ Liệu Page Thất Bại'
                            }
                        })
                    });
            }
        }
    }, []);

  return (
    <>  
        <Alert />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' 
                element={auth?.user ? <Layout auth={auth} /> : auth?.firstLogin ? 
                <FirstLogin studentId={auth.firstLogin.studentId} birthday={auth.firstLogin.birthday}/> : <Login />}>
                <Route index element={<Home auth={auth} />} />
                <Route path='/:page' element={<PageRender />} />
                <Route path='/:page/:id' element={<PageRender />} />
                <Route path='/page/:dynamicPage' element={<PageRender />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </>
   
  )
}
export default App;
