import React, { useEffect, useRef } from 'react'

const ComponentModal = ({ stateModal, setStateModal }) => {
	let refBoxModal = useRef();
	useEffect(() => {
		let hanlder = (e) => {
			if (!refBoxModal.current.contains(e.target))
			setStateModal(false);
		}
		document.addEventListener("mousedown", hanlder);
		return () => document.removeEventListener("mousedown", hanlder);

	});
	return (
		<div className={`wrap__modal ${stateModal ? "active__modal" : "unactive__modal"}`}>
			<div 
			className={`body__modal`}
			ref={refBoxModal}
			>
				<p>Modal Content</p>
				<button onClick={() => setStateModal(false)}>Đóng Modal</button>
			</div>
		</div>
	)
}

export default ComponentModal
