import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '../../store'
import { CartPage } from './CartPage'

describe('Component: CartPage', () => {
	test('should render CartPage', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<CartPage />
				</BrowserRouter>
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})