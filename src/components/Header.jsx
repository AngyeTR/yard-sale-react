import React, {useState, useContext} from "react";
import "@styles/Header.scss";
import Menu from "./Menu";
import menu from  "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import cart from"@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "@containers/MyOrder";
import CategoryList from "../containers/CategoryList";

const Header =() => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [catToggle, setCatToggle] = useState(false);
    const {state} = useContext(AppContext);
    const handleToggle= () => {
        setToggle(!toggle);
    };

    const handleCatToggle = () => {
        setCatToggle(!catToggle);
    };
    return (
        <nav>
        <img src={menu} alt="menu" className="menu-icon" onClick={handleCatToggle}/>
        <div className="navbar-left">
            
            <img src={logo} alt="logo" className="nav-logo"/>
            <CategoryList/>
           
        </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handleToggle} >platzi@example.com</li>
        <li className="navbar-shopping-cart" 
        onClick={()=> {setToggleOrders(!toggleOrders)}}>
          <img src={cart} alt="shopping cart"/>
         {state.cart.length > 0 ?  <div>{state.cart.length}</div> : null}
        </li>
      </ul>
    </div>
    {toggle &&  <Menu/>}
    {toggleOrders && <MyOrder />}
    {catToggle && (
        <div className="side-categories">
        <h3> Categories</h3>
        <CategoryList/>
        <h3>My Menú</h3>
        <Menu/>
          
        </div>
    )}

   
  </nav>
    );
};


export default Header;