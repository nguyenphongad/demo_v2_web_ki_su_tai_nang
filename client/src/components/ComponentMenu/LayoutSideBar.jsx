import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BiBookBookmark, BiHomeSmile, BiMessageSquareDetail, BiSolidHome } from 'react-icons/bi';
import { HiNewspaper, HiOutlineNewspaper } from 'react-icons/hi'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { LiaFacebookMessenger } from 'react-icons/lia'
import { BsFillBookmarkCheckFill, BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs'
import { MdLightbulbOutline } from 'react-icons/md';
import Logo_IUH from '../../assets/logo_iuh.png'

const LayoutSideBar = () => {

    const ARRAY_LIST_MENU = [
        {
            id: 0,
            name_menu: "Tổng Quan",
            icon_before: <BiHomeSmile />,
            to_link: "/",
            submenu: false,
        },
        {
            id: 1,
            name_menu: "Tin Tức",
            icon_before: <HiOutlineNewspaper />,
            to_link: "/news",
            submenu: false,
        },
        {
            id: 2,
            name_menu: "Tin nhắn",
            icon_before: <BiMessageSquareDetail />,
            to_link: "/messenger",
        },
        {
            id: 3,
            name_menu: "Chỉ Tiêu",
            icon_before: <BiBookBookmark />,
            submenu: true,
            // to_link:"/plan-progress",
            sub_menu_item: [
                {
                    id: 0,
                    sub_name_menu: "Tiến độ kế hoạch",
                    sub_icon_before: "?",
                    sub_to_link: "/plan"
                },
                {
                    id: 1,
                    sub_name_menu: "Bằng cấp và chứng chỉ",
                    sub_icon_before: "?",
                    sub_to_link: "/degress",
                },
                {
                    id: 2,
                    sub_name_menu: "Quá trình đào tạo",
                    sub_icon_before: "?",
                    sub_to_link: "/traning",
                },
                {
                    id: 3,
                    sub_name_menu: "Thành tích",
                    sub_icon_before: "?",
                    sub_to_link: "/achievements",
                },
            ]
        },
        {
            id: 4,
            name_menu: "Đối nội",
            icon_before: <MdLightbulbOutline />,
            submenu: true,
            // to_link:"/plan-progress",
            sub_menu_item: [
                {
                    id: 0,
                    sub_name_menu: "Tiến độ kế hoạch",
                    sub_icon_before: "?",
                    sub_to_link: "/plan"
                },
                {
                    id: 1,
                    sub_name_menu: "Bằng cấp và chứng chỉ",
                    sub_icon_before: "?",
                    sub_to_link: "/degress",
                },
                {
                    id: 2,
                    sub_name_menu: "Quá trình đào tạo",
                    sub_icon_before: "?",
                    sub_to_link: "/traning",
                },
                {
                    id: 3,
                    sub_name_menu: "Thành tích",
                    sub_icon_before: "?",
                    sub_to_link: "/achievements",
                },
                {
                    id: 4,
                    sub_name_menu: "Lập kế hoạch học tập",
                    sub_icon_before: "?",
                    sub_to_link: "/study",
                },
            ]
        },
    ];


    const refBoxSubs = ARRAY_LIST_MENU.map(() => useRef(null));
    const [heightBoxSub, setHeightBoxSub] = useState(ARRAY_LIST_MENU.map(() => "0px"));
    const [subMenu, setSubMenu] = useState(ARRAY_LIST_MENU.map(() => false));

    const handleSubMenu = (index) => {
        const newSubMenuState = [...subMenu];
        newSubMenuState[index] = !newSubMenuState[index];

        const newHeightBoxSub = [...heightBoxSub];

        setSubMenu(newSubMenuState);
        setHeightBoxSub(newHeightBoxSub);
    }

    useEffect(() => {
        refBoxSubs.forEach((ref, index) => {
            if (ref.current && subMenu[index]) {
                const newHeightBoxSub = `${ref.current.scrollHeight}px`;

                if (heightBoxSub[index] !== newHeightBoxSub) {
                    const newHeightBoxSubArray = [...heightBoxSub];
                    newHeightBoxSubArray[index] = newHeightBoxSub;
                    setHeightBoxSub(newHeightBoxSubArray);
                }
            }
        });
    }, [refBoxSubs, subMenu]);

    const renderArrMenu = ARRAY_LIST_MENU.map((item) => {
        return (
            <React.Fragment key={item.id}>
                {
                    item.submenu ?
                        <div
                            key={item.id}
                            className="item_menu_a"
                            onClick={() => handleSubMenu(item.id)}
                        >
                            <span>
                                {item.icon_before}
                                {item.name_menu}
                            </span>
                            <div className={`icon_active_sub ${subMenu[item.id] ? "active_icon" : "unactive_icon"}`}>
                                <BsFillCaretRightFill />

                            </div>

                        </div>
                        :
                        <NavLink
                            key={item.id}
                            className="item_menu_a"
                            to={item.to_link}
                        >
                            <span>
                                {item.icon_before}
                                {item.name_menu}
                            </span>

                        </NavLink>
                }

                {
                    item.submenu ?
                        <div
                            className='box_sub_menu_item'
                            ref={refBoxSubs[item.id]}
                            style={{ height: `${subMenu[item.id] ? heightBoxSub[item.id] : "0px"}` }}>
                            {
                                item.sub_menu_item.map((item_sub) => {
                                    return (
                                        <NavLink
                                            key={item_sub.id}
                                            className="sub_menu_item"
                                            to={item_sub.sub_to_link}
                                            title={item_sub.sub_name_menu}>

                                            {item_sub.sub_name_menu}

                                        </NavLink>
                                    )
                                })
                            }
                        </div>

                        : undefined
                }
            </React.Fragment>
        )
    })


    return (
        <div className='container__menu'>
            <div className='img__logo'>
                <a href="/">
                    <img src={Logo_IUH} alt="logo_iuh" />
                </a>
            </div>
            <div className="wrap__menu">
                <div className="flex__box">
                    {renderArrMenu}
                </div>
            </div>
        </div>
    )
}

export default LayoutSideBar