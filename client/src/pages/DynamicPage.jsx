import React, { useEffect, useState } from 'react'
import LayoutTable from '../components/ComponentTable/LayoutTable'
import { useSelector } from 'react-redux'
import { pageSelector } from '../redux/selector';

const DynamicPage = () => {
    const page = useSelector(pageSelector);
    const [tables, setTables] = useState([]);

    useEffect(() => {
        if(page.tables) {
            const arr = page.tables.map((table) => {
                const TABLE = {};
                TABLE.tableId = table._id;
                TABLE.title = table.tableName;
                TABLE.thead = table.rowTitleList.map((rowTitle) => {
                    return {
                        textHeading: rowTitle,
                        typeInput: 'text',
					    isShow: true,
                    }
                })

                if(table?.rowValueList) {
                    TABLE.tbody = table?.rowValueList.content.map((row) => {
                        return JSON.parse(row.replace(/'/g, '"'));
                     })
                } 
               
                return TABLE
            })
            setTables(arr);
        }
    }, [page?.pageName]);

	return (
		<div className="container__plan">
			{tables.map((table, index) => {
				return (
					<LayoutTable
						key={index}
						table={table}
                        page={page}
					></LayoutTable>
				)
			})}
		</div>
	)
}

export default DynamicPage