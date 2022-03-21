import { render, screen } from '@testing-library/react'

import { CartPage } from './CartPage'

test('renders learn react link', () => {
	render(<CartPage />)
	const linkElement = screen.getByText(/cartlist/i)
	expect(linkElement).toBeInTheDocument()

	const linkElement2 = screen.getByText(/checkout/i)
	expect(linkElement2).toBeInTheDocument()
})

// const products: cartListItem[] = [
// 	{
// 		id: 2,
// 		product_id: 15,
// 		name: 'Rangoto Vi',
// 		picture: 'https://i.ibb.co/T2XSnw0/z9.webp',
// 		description: 'Nemo dolore officia est natus.',
// 		price: 11.04,
// 		quantity: 3,
// 	},
// 	{
// 		id: 3,
// 		product_id: 16,
// 		name: 'Armo Sento 2',
// 		picture: 'https://i.ibb.co/TPT93hh/z10.jpg',
// 		description: 'Nobis in voluptatum qui voluptate.',
// 		price: 17.22,
// 		quantity: 1,
// 	},
// 	{
// 		id: 4,
// 		product_id: 9,
// 		name: 'Vertigo 2',
// 		picture: 'https://i.ibb.co/vvCZ6gp/nike.webp',
// 		description: 'Architecto omnis sed nostrum aliquid.',
// 		price: 26.11,
// 		quantity: 2,
// 	},
// ]
