import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className={`menu-menu ${props.rootClassName} `}>
      <div id="mobile-menu" className="menu-mobile-navigation">
        <img alt={props.logoAlt} src={props.logoSrc} className="menu-logo" />
        <div className="menu-links">
          <span className="Link">{props.text}</span>
          <span className="Link">{props.text1}</span>
          <span className="Link">{props.text2}</span>
        </div>
        <div id="close-mobile-menu" className="menu-close-mobile-menu">
          <svg viewBox="0 0 804.5714285714286 1024" className="menu-icon">
            <path
              d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="menu-desktop-navigation">
        <nav className="menu-centered">
          <div className="menu-left">
            <Link to="/" className="menu-navlink">
              <img
                alt={props.logoAlt1}
                src={props.logoSrc1}
                className="menu-logo1"
              />
            </Link>
          </div>
          <div className="menu-right">
            <span className="menu-sign-in Link">{props.signIn}</span>
            <div className="menu-get-started">
              <span className="menu-text3">{props.text3}</span>
            </div>
            <div id="open-mobile-menu" className="menu-burger-menu">
              <img
                alt={props.mobileMenuButtonAlt}
                src={props.mobileMenuButtonSrc}
                className="menu-mobile-menu-button"
              />
            </div>
          </div>
        </nav>
      </div>
      <div className="">
        <div className="menu-container1">
          <Script
            html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  logoAlt: 'pastedImage',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/39622a11-b838-43d2-9bdc-3ba79420cf0d/32470f5a-d16d-4ab2-9060-d70351665580?org_if_sml=12078',
  signIn: 'Sign In',
  text1: 'How it works',
  logoAlt1: 'pastedImage',
  rootClassName: '',
  mobileMenuButtonSrc: '/pastedimage-yxbd.svg',
  text: 'Solutions',
  mobileMenuButtonAlt: 'pastedImage',
  text3: 'Get started\n',
  logoSrc1: '/logo%20test%201-1500w.png',
  text2: 'Prices',
}

Menu.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  signIn: PropTypes.string,
  text1: PropTypes.string,
  logoAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  mobileMenuButtonSrc: PropTypes.string,
  text: PropTypes.string,
  mobileMenuButtonAlt: PropTypes.string,
  text3: PropTypes.string,
  logoSrc1: PropTypes.string,
  text2: PropTypes.string,
}

export default Menu
