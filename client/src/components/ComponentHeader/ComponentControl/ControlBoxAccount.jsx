import React from 'react'
import { BsSun } from 'react-icons/bs';
import { PiUserCircleGear } from "react-icons/pi"
import { IoMdLogOut } from 'react-icons/io'

const ControlBoxAccount = () => {
    const LIST_CONTROL_ACCOUNT = [
        {
            id: 0,
            name_select: "Cập nhật thông tin",
            icon_before: <PiUserCircleGear />,
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
        return (
            <div className='item_btn_control' key={item.id}>
                {item.icon_before}
                {item.name_select}
            </div>
        )
    })
    return (
        <>
            {returnListControlAccount}
        </>
    )
}

export default ControlBoxAccount