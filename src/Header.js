import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider";
function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
        <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
        </Link>
        <div className="header__search">
        <input type="text" className="header__input"></input>
        <SearchIcon className="header__searchicon"/>
        </div>
        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                <span className="header__optionLineone">Hello smit</span>
                <span className="header__optionLinetwo">Sign In</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineone">Return</span>
                <span className="header__optionLinetwo">& order</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineone">Your</span>
                <span className="header__optionLinetwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
    <span className="header__optionLinetwo header__basketcount">{basket?.length}</span>
                </div>
            </Link>
        </div>
        </nav>
    )
}

export default Header
