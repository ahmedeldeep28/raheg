import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/cartContext'


function NavBar() {
    const { cart } = useContext(cartContext);
    const { pathname } = useRouter();
    const [showCollapse, setShowCollapse] = useState(false);
    const toggleCollapse = () => {
        setShowCollapse(!showCollapse)
    }
    const closeCollapse = () => {
        setShowCollapse(false)
    }
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light  py-3">
            <div className="container">
                <Link className="navbar-brand" href="/">raheg</Link>

                <div className="d-flex align-items-center">
                    <Link href="/cart" className="position-relative text-dark ms-2 d-block d-md-none">
                        <div className="position-absolute top-0 start-100 translate-middle p-2  text-white lh-1 bg-danger rounded-circle">
                            {cart.length}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </Link>
                    <button className="navbar-toggler shadow-none p-2" onClick={toggleCollapse}>
                        {showCollapse
                            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '28px', height: '28px' }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '28px', height: '28px' }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                            </svg>
                        }





                    </button>
                </div>
                <div className={`collapse navbar-collapse ${showCollapse ? "show" : ''}`} onClick={closeCollapse} id="navBar" dir="rtl">
                    <ul className="navbar-nav m-auto">
                        <li className="navbar-item">
                            <Link href="/" className={`nav-link  ${pathname == "/" ? 'active' : ''}`} onClick={closeCollapse}  >الرئيسية</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/shop" className={`nav-link  ${pathname == "/shop" ? 'active' : ''}`} onClick={closeCollapse}>المتجر</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/offer" className={`nav-link  ${pathname == "/offer" ? 'active' : ''}`} onClick={closeCollapse}>العروض</Link>
                        </li>

                        <li className="navbar-item">
                            <Link href="/blog" className={`nav-link  ${pathname == "/blog" ? 'active' : ''}`} onClick={closeCollapse}>المقالات</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/contact" className={`nav-link  ${pathname == "/contact" ? 'active' : ''}`} onClick={closeCollapse}>تواصل معنا</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/cart" className="position-relative text-dark d-none d-md-block">
                    <div className="position-absolute top-0 start-100 translate-middle p-2  text-white lh-1 bg-danger rounded-circle">
                        {cart.length}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </Link>

            </div>
        </nav>
    )
}

export default NavBar