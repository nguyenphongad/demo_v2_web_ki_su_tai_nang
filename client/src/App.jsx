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
import FirstLogin from './components/ComponentFirstLoggin/FirstLoggin';
const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);
    const location = useLocation();
    const pathName = location.pathname;

    useEffect(() => {
        dispatch(verifyAccessToken());
        if (pathName.includes('/page/')) {
            getDataApi(`${decodeURI(pathName)}`)
                .then((res) => {
                    dispatch({
                        type: GLOBALTYPES.PAGE.DYNAMIC_PAGE_INFO,
                        payload: {
                            pageName: res.data.data?.pageName,
                            tables: res.data.data.tables
                        }
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, []);

  return (
    <>  
        <Alert />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={auth?.user ? <Layout /> : auth?.firstLogin ? <FirstLogin studentId={auth.firstLogin.mssv}/> : <Login />}>
                <Route index element={<Home />} />
                <Route path='/:page' element={<PageRender />} />
                <Route path='/:page/:id' element={<PageRender />} />
                <Route path='/page/:dynamicPage' element={<PageRender />} />
                <Route path='*' element={<PageRender />} />
            </Route>
        </Routes>
    </>
   
  )
}
export default App;
