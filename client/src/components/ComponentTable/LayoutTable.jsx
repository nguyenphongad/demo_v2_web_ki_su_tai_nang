import React from 'react'
import ComponentModal from '../ComponentModal/ComponentModal'

const MainItem = ({ data }) => {
	const dataArray = Object.values(data)
	return (
		<tr className="table__line__item">
			{dataArray.map((item, index) => (
				<td className="line__item" key={index}>
					{item}
				</td>
			))}
		</tr>
	)
}

const LayoutTable = ({ row, title, thead }) => {
	return (
		<div className="container__table">
			<header>
				<div className="heading-4">{title}</div>
				<div className="modal">
					<ComponentModal />
				</div>
			</header>

			<table className="table">
				<thead>
					<tr className="table__line__header">
						{thead.map((item, index) => (
							<th className="header__item" key={index}>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="table__items">
					{row.map((item) => (
						<MainItem data={item} key={item.stt} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default LayoutTable
