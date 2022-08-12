import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import boton from "@icons/bt_add_to_cart.svg";
import ProductList from '../containers/ProductList';
import AppContext from '../context/AppContext';


const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const handleAdd = (item) => {
		addToCart(item);
		console.log(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={ProductList.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleAdd(product)}>
					<img src={boton} alt="" />
				</figure> 
			</div>
		</div>
	);
}

export default ProductItem;