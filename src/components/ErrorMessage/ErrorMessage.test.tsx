import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { ErrorMessage } from './ErrorMessage'

describe('Component: ErrorMessage', () => {
	test('should render ErrorMessage', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<ErrorMessage error={'Test Error String'} />
			</BrowserRouter>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
