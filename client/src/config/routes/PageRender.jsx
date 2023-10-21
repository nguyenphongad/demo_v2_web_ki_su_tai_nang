import { useParams, useLocation } from 'react-router-dom'
import NotFound from '../../pages/NotFound'
import React, { useState } from 'react'

function PageRender() {
	const { page, id } = useParams()
	const location = useLocation()
	const pathName = location.pathname
	const [PageComponent, setPageComponent] = useState(null)
	const pageName = id
		? `${page?.replace(/\w/, page?.charAt(0).toUpperCase())}/[id]`
		: page?.replace(/\w/, page?.charAt(0).toUpperCase()) // Convert the first letter lowercase to the first letter uppercase

	try {
		import(`../../pages/${pageName}.jsx`)
			.then((module) => {
				const PageComponent = module.default
				setPageComponent(PageComponent)
			})
			.catch((e) => {
				console.log(e)
				throw e
			})
	} catch (error) {
		return <NotFound />
	}

	if (PageComponent) return PageComponent
}

export default PageRender
