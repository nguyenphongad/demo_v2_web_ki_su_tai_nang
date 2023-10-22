import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAction";
import ComponentInput from "../ComponentForm/ComponentInput";
import ComponentButton from "../ComponentButton/ComponentButton";
import ComponentSelectOption from "../ComponentSelectOption/ComponentSelectOption";

export const createNumberOption = (startNumber, endNumber) => {
    const options = [];
    for (let number = startNumber; number <= endNumber; number++){
        const fomattedNumber = number.toString().padStart(2,'0');
        options.push({ labelOption: fomattedNumber, value: fomattedNumber })
    }
    return options;
}

function FirstLogin() {

    const dispatch = useDispatch();

    const [data, setData] = useState({});

    console.log(data);
    const handleChangeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSumbitForm = (e) => {
        e.preventDefault();
        dispatch(register(data));
    }

    return (
        <div className="container__fisrt--login">
            <div className="form__update--info">
                <form className="">
                    <h1 className="heading__text">Cập Nhật Thông Tin </h1>

                    <ComponentInput
                        id="name_sv"
                        label="Tên Sinh Viên"
                        type="text"
                        name="fullName"
                        placeholder="Nhập tên sinh viên"
                        onChange={handleChangeData}
                    />
                    <ComponentInput
                        i="password_new"
                        label="Mật khẩu mới"
                        type="password"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        onChange={handleChangeData}
                    />
                    <ComponentInput
                        id="msv"
                        label="Mã Sinh Viên"
                        name="studentId"
                        placeholder="Nhập mã sinh viên"
                        onChange={handleChangeData}
                    />
                    {/* <ComponentInput
                        label="Ngày Sinh"
                        type="date"
                        name="birthday"
                        onChange={handleChangeData}
                        className="tr_set__row-birth"
                    /> */}
                    <div className="tr__line__row--birth">
                        <ComponentSelectOption
                            id="ngaySinh"
                            name="ngaySinh"
                            label="Ngày sinh"
                            labelOptionNull="Chọn ngày sinh"
                            options={createNumberOption(1,31)}
                            onChange={handleChangeData}
                        />
                        <ComponentSelectOption
                            id="thangSinh"
                            name="thangSinh"
                            label="Tháng Sinh"
                            labelOptionNull="Chọn tháng sinh"
                            options={createNumberOption(1,12)}
                            onChange={handleChangeData}
                        />
                        <ComponentSelectOption
                            id="namSinh"
                            name="namSinh"
                            label="Năm Sinh"
                            labelOptionNull="Chọn năm sinh"
                            options={createNumberOption(1950,new Date().getFullYear())}
                            onChange={handleChangeData}
                        />
                    </div>

                    <ComponentSelectOption
                        id="major"
                        name="major"
                        label="Ngành học"
                        labelOptionNull="Chọn nghành học"
                        options={[
                            { labelOption: "Công nghệ thông tin", value: "cntt" },
                            { labelOption: "Kế Toán", value: "kt" },
                        ]}
                        onChange={handleChangeData}
                    />
                    <ComponentInput
                        label="Email"
                        name="email"
                        placeholder="Nhập email"
                        onChange={handleChangeData}
                    />
                    <ComponentInput
                        label="Số điện thoại liên hệ"
                        name="phone"
                        placeholder="Nhập số điện thoại liên hệ"
                        onChange={handleChangeData}
                    />



                    <ComponentButton
                        textButton="Lưu thông tin"
                        type="submit"
                        onClick={handleSumbitForm}
                    />
                </form>
            </div>
        </div>
    );
}

export default FirstLogin;