import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'

const ComponentModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(true)

	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	return (
		<div className="">
			<button onClick={openModal}>Mở Modal</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				style={{
					overlay: {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 1000,
						backgroundColor: 'rgba(255, 255, 255, 0.75)',
					},
					content: {
						position: 'relative',
						border: '1px solid #ccc',
						background: '#fff',
						overflow: 'none',
						WebkitOverflowScrolling: 'touch',
						borderRadius: '4px',
						outline: 'none',
						padding: '20px',
						width: '500px',
						height: '300px',
					},
				}}
			>
				<div className="modal__title">Modal Title</div>
				<p>Modal Content</p>
				<button onClick={closeModal}>Đóng Modal</button>
			</Modal>
		</div>
	)
}

export default ComponentModal
