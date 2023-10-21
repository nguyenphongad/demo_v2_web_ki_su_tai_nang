import React from 'react'
import LayoutTable from '../components/ComponentTable/LayoutTable'

const Plan = () => {
	const DATA_TABLE = [
		{
			_id: 0,
			title: 'Chỉ tiêu 1',
			thead: [
				'STT',
				'Tên mục tiêu',
				'Loại',
				'Thời gian còn',
				'Ngày bắt đầu',
				'Ngày hoàn thành',
				'Trạng thái',
			],
			row: [
				{
					_id: 0,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-08-22T12:34:56Z',
					endDate: '2023-10-20T12:34:56Z',
					complete: true,
				},
				{
					_id: 1,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-07-12T12:34:56Z',
					endDate: '2024-09-22T12:34:56Z',
					complete: true,
				},
				{
					_id: 2,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-04-20T12:34:56Z',
					endDate: '2024-01-22T12:34:56Z',
					complete: true,
				},
				{
					_id: 3,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-04-20T12:34:56Z',
					endDate: '2024-01-22T12:34:56Z',
					complete: true,
				},
				{
					_id: 4,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-04-20T12:34:56Z',
					endDate: '2024-01-22T12:34:56Z',
					complete: true,
				},
				{
					_id: 5,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-04-20T12:34:56Z',
					endDate: '2024-01-22T12:34:56Z',
					complete: true,
				},
				{
					_id: 6,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-04-20T12:34:56Z',
					endDate: '2024-01-22T12:34:56Z',
					complete: true,
				},
				{
					_id: 7,
					name: 'Tên mục tiêu',
					type: 'Loại',
					startDate: '2023-04-20T12:34:56Z',
					endDate: '2024-01-22T12:34:56Z',
					complete: true,
				},
			],
		},
	]
	return (
		<div className="container__plan">
			{DATA_TABLE.map((item, index) => {
				const tableRows = item.row.map((item) => {
					const startDate = new Date(item.startDate)
					const endDate = new Date(item.endDate)
					const strStartDate = startDate.toLocaleDateString()
					const strEndDate = endDate.toLocaleDateString()
					const timeDifference = endDate.getTime() - new Date().getTime()
					const timeRemain = Math.ceil(timeDifference / (24 * 60 * 60 * 1000))
					const strTimeRemain = item.complete ? '0' : timeRemain >= 0 ? timeRemain : 'Hết thời gian'

					const strComplete = item.complete ? 'Hoàn thành' : 'Chưa hoàn thành'
					return {
						stt: item._id + 1,
						name: item.name,
						type: item.type,
						timeRemain: strTimeRemain,
						startDate: strStartDate,
						endDate: strEndDate,
						complete: strComplete,
					}
				})
				return (
					<LayoutTable
						key={index}
						row={tableRows}
						title={item.title}
						thead={item.thead}
					></LayoutTable>
				)
			})}
		</div>
	)
}

export default Plan
