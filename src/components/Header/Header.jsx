import React, {useEffect, useRef} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './header.css'
import logo from '../../assets/images/eco-logo.png';
import user_icon from '../../assets/images/user-icon.png'
import {Container, Row} from "reactstrap";
import {motion} from 'framer-motion'
import {useSelector} from "react-redux";

const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

    const headerRef = useRef(null)

    const totalQuantity = useSelector(state => state.cart.totalQuantity)


    const menuRef = useRef(null)

    const navigate = useNavigate()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current?.classList.add('sticky__header')
            } else {
                headerRef.current?.classList.remove('sticky__header')
            }
        })
    }


    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    },[])

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    const navigateToCart = () => {
        navigate('/cart')
    }

    return <header className={'header'} ref={headerRef}>
        <Container>
            <Row>
                <div className={'nav__wrapper'}>
                    <div className={'logo'}>
                        <img src={logo} alt="logo"/>
                        <div>
                            <h1>Multimart</h1>
                        </div>
                    </div>
                    <div className={'navigation'} ref={menuRef} onClick={menuToggle}>
                        <ul className={'menu'}>
                            {
                                nav__links.map((item, idx) => (
                                   <li className="nav__item" key={idx}>
                                       <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                                   </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className={'fav__icon'}>
                            <i className="ri-heart-line"></i>
                            <span className={'badge'}>1</span>
                        </span>
                        <span className={'cart__icon'} onClick={navigateToCart}>
                            <i className={'ri-shopping-bag-line'}></i>
                            <span className={'badge'}>{totalQuantity}</span>
                        </span>
                        <span>
                            <motion.img whileTap={{scale: 1.2}} src={user_icon} alt=""/>
                        </span>
                        <div className="mobile__menu">
                            <span onClick={menuToggle}>
                                <i className={'ri-menu-line'}></i>
                            </span>
                        </div>
                    </div>

                </div>
            </Row>
        </Container>
    </header>
};

export default Header;