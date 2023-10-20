import React from 'react'

const MainItem = ({ data }) => {
	const startDate = new Date(data.startDate)
	const endDate = new Date(data.endDate)
	const strStartDate = startDate.toLocaleDateString()
	const strEndDate = endDate.toLocaleDateString()
	const timeDifference = endDate.getTime() - new Date().getTime()
	const timeRemain = Math.ceil(timeDifference / (24 * 60 * 60 * 1000))
	return (
		<tr className="table__line__item">
			<td className="line__item">{data._id + 1}</td>
			<td className="line__item">{data.name}</td>
			<td className="line__item">{data.type}</td>
			<td className={`line__item ${timeRemain <= 7 ? 'text-danger' : ''}`}>
				{data.complete ? '0' : timeRemain >= 0 ? timeRemain : 'Hết thời gian'}
			</td>
			<td className="line__item">{strStartDate}</td>
			<td className="line__item">{strEndDate}</td>
			<td className="line__item">{data.complete ? 'Hoàn thành' : 'Chưa hoành thành'}</td>
		</tr>
	)
}

const LayoutTable = ({ children }) => {
	return (
		<div className="container__table">
			<header className="heading-4">Lịch trình</header>
			<table className="table">
				<tr className="table__line__header">
					<th className="header__item">STT</th>
					<th className="header__item" >Tên mục tiêu</th>
					<th className="header__item">Loại</th>
					<th className="header__item">Thời gian còn</th>
					<th className="header__item">Ngày bắt đầu</th>
					<th className="header__item">Ngày hoàn thành</th>
					<th className="header__item">Trạng thái</th>
				</tr>
				<tbody className="table__items">
					{children.map((item) => (
						<MainItem key={item._id} data={item} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default LayoutTable
