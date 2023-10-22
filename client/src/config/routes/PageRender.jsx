import { useParams, useLocation } from 'react-router-dom'
import NotFound from '../../pages/NotFound'
import { useEffect, useState } from 'react'

function PageRender() {
	const { page, id } = useParams()
	const location = useLocation()
	// const pathName = location.pathname;
	const [PageComponent, setPageComponent] = useState(null)
	const pageName = id
		? `${page?.replace(/\w/, page?.charAt(0).toUpperCase())}/[id]`
		: page?.replace(/\w/, page?.charAt(0).toUpperCase())

	useEffect(() => {
		import(/* @vite-ignore */ `../../pages/${pageName}`)
			.then((module) => {
				const PageComponent = module.default
				setPageComponent(PageComponent)
			})
			.catch((e) => {
				setPageComponent(NotFound)
			})
	}, [page])

	if (PageComponent) return PageComponent
}

export default PageRender
