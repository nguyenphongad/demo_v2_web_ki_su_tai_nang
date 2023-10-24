import React, { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import ComponentInput from '../ComponentForm/ComponentInput'
import { useDispatch, useSelector } from 'react-redux'
import { addRow } from '../../redux/actions/pageAction'
import { authSelector } from '../../redux/selector'

const ComponentModal = ({ stateModal, setStateModal, tableId, title, thead, page }) => {
    let refBoxModal = useRef();
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);
    const [row, setRow] = useState(null);

	useEffect(() => {
		let hanlder = (e) => {
			if (!refBoxModal.current.contains(e.target)) setStateModal(false)
		}
		document.addEventListener('mousedown', hanlder)
		return () => document.removeEventListener('mousedown', hanlder)
	})

    const handleChangeRow = (e) => {
        setRow({...row, [e.target.name]: e.target.value})
    }

    const handleAddRow = (e) => {
        e.preventDefault();
        const data = [];

        for(let key in row) {
            data.push(row[key]);
        }
        dispatch(addRow({
            user: auth?.user._id,
            page: page.pageId,
            table: tableId,
            content: data,
        }))
    }

	if (stateModal) {
		window.body.style.overflow = 'hidden'
	} else {
		window.body.style.overflow = 'auto'
	}

	return (
		<div className={`wrap__modal ${stateModal ? 'active__modal' : 'unactive__modal'}`}>
			<form className={`modal`} ref={refBoxModal} onSubmit={handleAddRow}>
				<div className="head__modal">
					<div className="head__modal__title ">{title}</div>
					<button type="button" className="btn__close" onClick={() => setStateModal(false)}>
						<IoCloseOutline />
					</button>
				</div>
				<div className="body__modal">       
                   {   
                        thead &&
                        thead.map((item, index) => (
                            item.isShow ? (
                                <ComponentInput
                                    key={index}
                                    label={item.textHeading}
                                    placeholder={item.textHeading}
                                    className="input__modal"
                                    type={item.typeInput}
                                    disabled={item.disabled}
                                    value={item.value}
                                    name={index}
                                    onChange={handleChangeRow}
                                />
                            ) : <></>
                        ))
                   }
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'end',
						gap: '10px',
						padding: '10px 20px',
					}}
				>
					<button type="submit" >Thêm</button>
					<button type="reset">Reset</button>
				</div>
			</form>
		</div>
	)
}

export default ComponentModal
