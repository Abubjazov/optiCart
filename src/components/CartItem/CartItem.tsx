import { CartListItem } from '../../interfaces'
import './CartItem.scss'

export const CartItem = ({
	id,
	product_id,
	name,
	picture,
	description,
	price,
	quantity,
}: CartListItem): JSX.Element => (
	<article className='cartitem'>
		<header>
			<img src={picture} alt={name} />
			<button>Remove product</button>
		</header>

		<div className='cartitem-descriptor'>
			<h2>{name}</h2>
			{description}
		</div>

		<footer>
			<div className='quantity'>
				<button className='quantity-minus'>
					<span>-</span>
				</button>
				<span className='quantity-value'>{quantity}</span>
				<button className='quantity-plus'>
					<span>+</span>
				</button>
			</div>

			<h3 className='price'>{price} $</h3>

			<h3 className='full-price'>{price} $</h3>
		</footer>
	</article>
)
