import { fullPrice, getTotal } from './utils'

import { mockCartItems } from '../mockData/mockData'

describe('utils/fullPrice()', () => {
	test('Positive: calculates the total price and returns a string of the format "dd,dd"', () => {
		expect(fullPrice(5, 10)).toBe('50.00')
	})

	test('Negative: the input recipient is not a number and returns "NaN"', () => {
		expect(fullPrice('b', 10)).toBe('NaN')
	})
})

describe('utils/getTotal()', () => {
	test('Positive: calculates the total price of all Cart and returns a string of the format "dd,dd"', () => {
		expect(getTotal(mockCartItems)).toBe('102.56')
	})
})