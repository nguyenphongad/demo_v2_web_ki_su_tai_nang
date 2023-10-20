import React from 'react'
import LayoutInfo from '../components/ComponentHome/LayoutInfo'
import LayoutChart from '../components/ComponentHome/LayoutChart'
import avatar from '../assets/avatar.png'
import LayoutTable from '../components/ComponentHome/LayoutTable'

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
			name: 'Tên mục tiêu',
			type: 'Loại',
			// timeRemain: 'Thời gian còn',
			startDate: '2023-08-22T12:34:56Z',
			endDate: '2023-10-20T12:34:56Z',
			complete: true,
		},
		{
			_id: 1,
			name: 'Tên mục tiêu',
			type: 'Loại',
			// timeRemain: 'Thời gian còn',
			startDate: '2023-07-12T12:34:56Z',
			endDate: '2024-09-22T12:34:56Z',
			complete: true,
		},
		{
			_id: 2,
			name: 'Tên mục tiêu',
			type: 'Loại',
			// timeRemain: 'Thời gian còn',
			startDate: '2023-04-20T12:34:56Z',
			endDate: '2024-01-22T12:34:56Z',
			complete: true,
		},
		{
			_id: 3,
			name: 'Tên mục tiêu',
			type: 'Loại',
			// timeRemain: 'Thời gian còn',
			startDate: '2023-04-20T12:34:56Z',
			endDate: '2024-01-22T12:34:56Z',
			complete: true,
		},
	]
	return (
		<div className="pageHome">
			<div className="container__top">
				<LayoutInfo>{DATA_INFO}</LayoutInfo>
				<LayoutChart>{DATA_CHART}</LayoutChart>
			</div>
			<div className="container__center">
				<LayoutTable>{DATA_TABLE}</LayoutTable>
			</div>
		</div>
	)
}

export default Home
