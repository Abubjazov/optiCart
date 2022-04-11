import { NavLink } from 'react-router-dom'

import './Header.scss'

export const Header = (): JSX.Element => (
	<header className='header'>
		<h1>
			sneakers. <span>[ </span>
			<a
				tabIndex={-1}
				href='https://optimax.dev'
				target='_blank'
				rel='noreferrer'
			>
				https://optimax.dev
			</a>
			<span className='last-span'>]</span>
		</h1>

		<nav className='header-menu'>
			<ul>
				<li>
					<NavLink
						aria-label='Go to main page'
						end
						to='/optiCart/'
						style={({ isActive }) => ({ color: isActive ? '#3b8079' : '' })}
					>
						Main
					</NavLink>
				</li>

				<li>
					<NavLink
						aria-label='Go to cart page'
						to='/optiCart/cart'
						style={({ isActive }) => ({ color: isActive ? '#3b8079' : '' })}
					>
						Cart
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
)
