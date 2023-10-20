import { Route, Routes} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useLocation } from 'react-router-dom/dist';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import PageRender from './config/routes/PageRender';
import { useEffect } from 'react';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathName = location.pathname;

    useEffect(() => {
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
    <Routes>
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/:page' element={<PageRender />} />
        <Route path='/:page/:id' element={<PageRender />} />
        <Route path='/page/:dynamicPage' element={<PageRender />} />
    </Route>
</Routes>
  )
}
export default App;
