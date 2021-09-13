import * as React from 'react'
import st from '../Assets/styles/header.module.css'
import {Link} from 'react-router-dom'
import {LOGIN_ROUTE, SHOP_ROUTE} from "../Utils/consts";

function Header() {
    return(
        <div className={st.wrapper}>
            <Link to={SHOP_ROUTE}>
                SHOP
            </Link>
            <Link to={LOGIN_ROUTE}>
                LOGIN
            </Link>
        </div>
    )
}

export default Header;