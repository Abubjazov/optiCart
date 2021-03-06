import { nanoid } from 'nanoid'
import { useEffect } from 'react'

import {
	ErrorMessage,
	PageMarker,
	ProductCard,
	Spinner,
} from '../../components'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Product } from '../../interfaces/product.interface'

import './MainPage.scss'

export const MainPage = (): JSX.Element => {
	const { status, currentProductId, error, products } = useTypedSelector(
		state => state.product
	)
	const { fetchProducts } = useActions()

	useEffect(() => {
		fetchProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (status === 'loading' && currentProductId === null) {
		return (
			<main className='main-page'>
				<div className='container'>
					<Spinner />
				</div>
			</main>
		)
	}

	if (status === 'error') {
		return (
			<main>
				<ErrorMessage error={error} />
			</main>
		)
	}

	return (
		<main className='main-page'>
			<PageMarker pageName='main' />

			<div className='container'>
				{products.map((item: Product) => (
					<ProductCard key={nanoid()} {...item} />
				))}
			</div>
		</main>
	)
}
