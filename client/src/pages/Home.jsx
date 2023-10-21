import React from 'react'
import LayoutInfo from '../components/ComponentHome/LayoutInfo'
import LayoutChart from '../components/ComponentHome/LayoutChart'
import avatar from '../assets/avatar.png'
import LayoutTable from '../components/ComponentTable/LayoutTable'

const Home = () => {
	const DATA_INFO = {
		image: avatar,
		mssv: 21000991,
		name: 'Nguyễn Văn A',
		gender: 'Nam',
		dept: 'Công nghệ thông tin',
		joinDate: '2023-09-22T12:34:56Z',
		address: '123 Nguyễn Văn A, Q.1, TP.HCM',
	}
	const DATA_CHART = [
		{ caterogy: 'Hoạt động', value: 80 },
		{ caterogy: 'Chứng chỉ', value: 60 },
		{ caterogy: 'Nghiên cứu', value: 40 },
		{ caterogy: 'Thể thao', value: 50 },
	]

	const DATA_TABLE = [
		{
			_id: 0,
			title: 'Lịch trình',
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
			],
		},
	]
	return (
		<div className="pageHome">
			<div className="container__top">
				<LayoutInfo>{DATA_INFO}</LayoutInfo>
				<LayoutChart>{DATA_CHART}</LayoutChart>
			</div>
			<div className="container__center">
				{DATA_TABLE.map((item, index) => {
					const tableRows = item.row.map((item) => {
						const startDate = new Date(item.startDate)
						const endDate = new Date(item.endDate)
						const strStartDate = startDate.toLocaleDateString()
						const strEndDate = endDate.toLocaleDateString()
						const timeDifference = endDate.getTime() - new Date().getTime()
						const timeRemain = Math.ceil(timeDifference / (24 * 60 * 60 * 1000))
						const strTimeRemain = item.complete
							? '0'
							: timeRemain >= 0
							? timeRemain
							: 'Hết thời gian'

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
		</div>
	)
}

export default Home
