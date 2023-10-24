import React, { useState } from 'react'
import ComponentModal from '../ComponentModal/ComponentModal'

const MainItem = ({ row }) => {
	return (
		<tr className="table__line__item">
			{row.map((item, index) => (
				<td className="line__item" key={index}>
					{item}
				</td>
			))}
		</tr>
	)
}

const LayoutTable = ({ table, page }) => {
	const [useStateModal, setUseStateModal] = useState(false);
	return (
		<div className="container__table">
			<header>
				<div className="heading-4">{table?.title}</div>
				<div className="modal">
					<button onClick={() => setUseStateModal(true)}>open</button>
					<ComponentModal
						stateModal={useStateModal}
						setStateModal={setUseStateModal}
						title={table?.title}
						thead={table?.thead}
                        tableId={table?.tableId}
                        page={page}
					/>
				</div>
			</header>

			<table className="table">
                {
                  table?.thead &&
                    <thead>
                        <tr className="table__line__header">
                            {table.thead.map((item, index) => (
                                <th className="header__item" key={index}>
                                    {item?.textHeading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                }
				
                {
                    table?.tbody && 
                    <tbody className="table__items">
                        {table.tbody.map((row, index) => (
                            <MainItem row={row} key={index} />
                        ))}
				    </tbody>
                }
				
			</table>
		</div>
	)
}

export default LayoutTable
