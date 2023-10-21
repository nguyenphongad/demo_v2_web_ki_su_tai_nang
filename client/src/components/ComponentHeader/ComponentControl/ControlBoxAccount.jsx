import React from 'react'
import { BsSun } from 'react-icons/bs';
import { PiUserCircleGear } from "react-icons/pi"
import { IoMdLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom';

const ControlBoxAccount = ({setState}) => {

    const LIST_CONTROL_ACCOUNT = [
        {
            id: 0,
            name_select: "Cập nhật thông tin",
            icon_before: <PiUserCircleGear />,
            toLink: "/profile",
        },
        {
            id: 1,
            name_select: "Darkmode",
            icon_before: <BsSun />,
        },
        {
            id: 2,
            name_select: "Đăng xuất",
            icon_before: <IoMdLogOut />,
        },
    ];
    const returnListControlAccount = LIST_CONTROL_ACCOUNT.map((item) => {
        const selToLink = item.toLink;
        return (
            <React.Fragment key={item.id}>
                {
                    selToLink ? 
                    <Link 
                        className='item_btn_control' 
                        key={item.id} 
                        to={item.toLink}
                        onClick={()=>setState(false)}
                    >
                        {item.icon_before}
                        {item.name_select}
                    </Link>
                        :
                        <div className='item_btn_control' key={item.id} onClick={()=>setState(false)}>
                            {item.icon_before}
                            {item.name_select}
                        </div>
                }
            </React.Fragment>

        )
    })
    return (
        <>
            {returnListControlAccount}
        </>
    )
}

export default ControlBoxAccount