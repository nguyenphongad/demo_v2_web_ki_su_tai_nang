import React from 'react'
import ComponentInput from '../ComponentForm/ComponentInput';
import { RiAccountCircleFill } from 'react-icons/ri'
import { BiSolidLock } from 'react-icons/bi'
import { MdOutlineSettingsBackupRestore } from 'react-icons/md'
import { Link } from 'react-router-dom'

const FormLogin = () => {
    const handleRefeshCapcha = () => {
        alert("refresh capcha")
    }

    return (
        <div className='form_group'>
            <div>

                <div className='heading_text--login'>ĐĂNG NHẬP HỆ THỐNG</div>
                <form method='' action=''>
                    <ComponentInput
                        label="Tên đăng nhập"
                        type="text"
                        id="user"
                        iconBefore={<RiAccountCircleFill />}
                    />
                    <ComponentInput
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        iconBefore={<BiSolidLock />}
                    />
                    <ComponentInput
                        label="Mã bảo mật"
                        type="text"
                        id="capcha"
                        classNameWrap="tr__line--capcha"
                    >
                        <ComponentInput
                            type="text"
                            id="btn_rf_capcha"
                            iconBefore={<MdOutlineSettingsBackupRestore onClick={handleRefeshCapcha} />}
                            className="set_width"
                            disabled={true}
                        >
                        </ComponentInput>
                    </ComponentInput>
                    <div className="tr__flex">
                        <div className="check__box--remb">
                            <input type="checkbox" id="remember_account" checked />
                            <label htmlFor="remember_account">Lưu thông tin đăng nhập</label>
                        </div>
                        <Link to="#" className="btn_prm_password">Quên mật khẩu</Link>
                    </div>
                    <button type="submit" className="btn__submit--login">
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormLogin