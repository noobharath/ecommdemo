import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = state.productsAPI.category

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link className="navLink" to="/create_product">Create Product</Link></li>
                <li><Link className="navLink" to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link className="navLink" to="/history">History</Link></li>
                <li><Link className="navLink" to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
    ];

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link className="navLink" to="/">{isAdmin ? 'Admin' : 'BatShop'}</Link>
                </h1>
            </div>
    
                <ul style={styleMenu}>
                <li><Link className="navLink" to="/">{isAdmin ? null : 'Home'}</Link></li>
                
                <li><Link className="navLink" to="/shop">{isAdmin ? null : 'Shop'}</Link></li>
                
                <li><Link className="navLink" to="/shoes">{isAdmin ? null : 'Shoes'}</Link></li>
                
                <li><Link className="navLink" to="/electronics">{isAdmin ? null : 'Electronics'}</Link></li>


                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link className="navLink" to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart" className="navLink">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }

        </header>
    )
}

export default Header
