import React from "react";
import useGetProducts from '../hooks/useGetProducts';
import "../styles/CategoryLIst.scss";
 
 const API="https://api.escuelajs.co/api/v1/products";

 const CategoryList = () => {
	const products = useGetProducts(API);
    let categories = ["All",];
    products.map(
        product => {
            if (!categories.includes(product.category.name))
            {
                categories.push(product.category.name);
            } 
        } );
	 return (

        <div className="CategoryList">
            <ul>
            {categories.map(category =>(
        <li> <a category={category}  href="/"  key={category} id={category}>{category} </a></li>
        ))}
            </ul>
        
    </div>
	 );
 }


export default CategoryList;