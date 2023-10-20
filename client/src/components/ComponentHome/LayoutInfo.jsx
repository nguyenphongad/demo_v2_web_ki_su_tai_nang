import React, { useEffect, useState } from 'react'
import avatar from '../../assets/avatar.png'
import { BiImageAdd } from 'react-icons/bi'
import axios from 'axios'
const LineItem = ({ info, text }) => {
	return (
		<div className="line">
			{info}:<p>{text}</p>
		</div>
	)
}

const LayoutInfo = ({ children }) => {
	const [image, setImage] = useState(children.image)
	// const [url, setUrl] = useState('')

	// useEffect(() => {
	// 	uploadImage()
	// }, [image])

	// const uploadImage = () => {
	// 	const data = new FormData()
	// 	data.append('file', image)
	// 	data.append('upload_preset', 'tutorial')
	// 	data.append('cloud_name', 'breellz')

	// 	axios
	// 		.post('https://api.cloudinary.com/v1_1/breellz/image/upload', data)
	// 		.then((response) => {
	// 			setUrl(response.data.url)
	// 			console.log('Update image success')
	// 		})
	// 		.catch((error) => {
	// 			console.log('Update fail: ' + error)
	// 		})
	// }

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		if (file) {
			const imageURL = URL.createObjectURL(file)
			setImage(imageURL)
		}
	}
	const date = new Date(children.joinDate)
	const strJoinDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

	return (
		<div className="container__info">
			<header className="heading-4">Thông tin sinh viên</header>
			<div className="content">
				<div className="info__avatar">
					<div className="info__avatar-upload">
						<input
							type="file"
							id="input__file"
							onChange={handleFileChange}
							accept="image/jpeg, image/svg+xml, image/png"
						/>
						<label htmlFor="input__file" className="label__input">
							<BiImageAdd />
						</label>
					</div>
					<img className="info__avatar-image" src={image} />
				</div>
				<div className="info__text">
					<LineItem info="MSSV" text={children.mssv} />
					<LineItem info="Họ và tên" text={children.name} />
					<LineItem info="Giới tính" text={children.gender} />
					<LineItem info="Khoa" text={children.dept} />
					<LineItem info="Tham gia" text={strJoinDate} />
					<LineItem info="Địa chỉ" text={children.address} />
				</div>
			</div>
		</div>
	)
}

export default LayoutInfo
