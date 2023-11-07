import React from 'react'

const Header = () => {
  return (
    <div id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
                <a href="/">&nbsp;portfolio &nbsp;<em>react</em></a>
            </div>
            <nav className="header__nav show" role="navigation" aria-label="메인 메뉴">
                <ul>
                    <li>
                        <a href="/intro">intro&nbsp;</a>
                    </li>
                    <li>
                        <a href="/skill">skill&nbsp;</a>
                    </li>
                    <li>
                        <a href="/site">site&nbsp;</a>
                    </li>
                    <li>
                        <a href="/port">portfolio&nbsp;</a>
                    </li>
                    <li>
                        <a href="/contact">contact&nbsp;</a>
                    </li>
                </ul>
            </nav>
            <div className="header__nav__mobile"
            id="headerToggle"
            aria-controls="primary-menu" 
            aria-expanded="false"
            role="button">
            <span>

            </span>

            </div>
        </div>
    </div>
  )
}

export default Header