import React, { useEffect, useRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import ComponentInput from '../ComponentForm/ComponentInput'

const ComponentModal = ({ stateModal, setStateModal, title, thead }) => {
	let refBoxModal = useRef()
	useEffect(() => {
		let hanlder = (e) => {
			if (!refBoxModal.current.contains(e.target)) setStateModal(false)
		}
		document.addEventListener('mousedown', hanlder)
		return () => document.removeEventListener('mousedown', hanlder)
	})
	if (stateModal) {
		window.body.style.overflow = 'hidden'
	} else {
		window.body.style.overflow = 'auto'
	}
	return (
		<div className={`wrap__modal ${stateModal ? 'active__modal' : 'unactive__modal'}`}>
			<form className={`modal`} ref={refBoxModal} action="">
				<div className="head__modal">
					<div className="head__modal__title ">{title}</div>
					<button type="button" className="btn__close" onClick={() => setStateModal(false)}>
						<IoCloseOutline />
					</button>
				</div>
				<div className="body__modal">
					{thead.map((item, index) =>
						item.isShow ? (
							<ComponentInput
								label={item.textHeading}
								placeholder={item.textHeading}
								className="input__modal"
								type={item.typeInput}
								disabled={item.disabled}
								value={item.value}
							/>
						) : (
							''
						)
					)}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'end',
						gap: '10px',
						padding: '10px 20px',
					}}
				>
					<button type="submit">Thêm</button>
					<button type="reset">Reset</button>
				</div>
			</form>
		</div>
	)
}

export default ComponentModal
