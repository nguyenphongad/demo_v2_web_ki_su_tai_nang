import { Outlet } from 'react-router-dom';
import LayoutSideBar from '../ComponentMenu/LayoutSideBar';
import TopHeader from '../ComponentHeader/TopHeader';
function Layout() {
    return (
        <div className='wrap__layout'>
            <LayoutSideBar />
            <div className='main__body'>
                <main>
                    <TopHeader />
                    <div className='main'>
                        <Outlet />
                    </div>

                </main>
            </div>
        </div>
    );
}

export default Layout;
