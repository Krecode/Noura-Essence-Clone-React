import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import './product-page.css'

const ProductPage = (props) => {
  return (
    <div className="product-page-container">
      <Helmet>
        <title>ProductPage - Noura Essence Clone</title>
        <meta property="og:title" content="ProductPage - Noura Essence Clone" />
      </Helmet>
      <Menu rootClassName="menu-root-class-name"></Menu>
      <div className="product-page-category-selector">
        <div className="product-page-category-buttons">
          <a
            href="#blendfusion"
            className="product-page-link productCategoryButton button"
          >
            BLEND-FUSIONS
          </a>
          <a
            href="#infusions"
            className="product-page-link1 productCategoryButton button"
          >
            INFUSIONS
          </a>
          <a
            href="#powercube"
            className="product-page-link2 productCategoryButton button"
          >
            NOURA CUBES
          </a>
        </div>
      </div>
      <div className="product-page-hero">
        <img
          alt="image"
          src="/oats3-1500w.jpg"
          className="product-page-image"
        />
      </div>
      <div className="product-page-container01">
        <div className="product-page-container02">
          <div id="blendfusion" className="product-page-blend-fusion">
            <div className="product-page-container03">
              <div className="product-page-container04"></div>
              <div className="product-page-price-container">
                <span className="product-page-text">INR 29.99/-</span>
                <span className="product-page-text001">20g</span>
              </div>
            </div>
            <div className="product-page-container05">
              <span className="product-page-text002">
                <span>BLEND-FUSIONS</span>
                <br></br>
              </span>
              <span className="product-page-text005">Insights</span>
              <div className="product-page-container06">
                <button type="button" className="product-page-button button">
                  <p className="product-page-text006">Honey Glaze</p>
                </button>
                <button type="button" className="product-page-button01 button">
                  <p className="product-page-text007">Dark Hazel</p>
                </button>
                <button type="button" className="product-page-button02 button">
                  <p className="product-page-text008">Sugar Free</p>
                </button>
              </div>
              <div className="product-page-container07">
                <div className="product-page-container08">
                  <div className="product-page-container09">
                    <svg viewBox="0 0 1024 1024" className="product-page-icon">
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text009">High Fibre</span>
                  </div>
                  <div className="product-page-container10">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon02"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text010">High Fibre</span>
                  </div>
                  <div className="product-page-container11">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon04"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text011">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container12">
                  <div className="product-page-container13">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon06"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text012">High Fibre</span>
                  </div>
                  <div className="product-page-container14">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon08"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text013">High Fibre</span>
                  </div>
                  <div className="product-page-container15">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon10"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text014">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container16">
                  <div className="product-page-container17">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon12"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text015">High Fibre</span>
                  </div>
                  <div className="product-page-container18">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon14"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text016">High Fibre</span>
                  </div>
                  <div className="product-page-container19">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon16"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text017">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container20">
                  <div className="product-page-container21">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon18"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text018">High Fibre</span>
                  </div>
                  <div className="product-page-container22">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon20"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text019">High Fibre</span>
                  </div>
                  <div className="product-page-container23">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon22"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text020">High Fibre</span>
                  </div>
                </div>
              </div>
              <div className="product-page-container24">
                <p className="product-page-text021">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </span>
                  <span>
                    {' '}
                    do eiusmod tempor incididunt ut labore et Eu ultrices Eu
                    ultricesEu 
                  </span>
                  <br></br>
                  <span>
                    aliqua. Sit amet nisl suscipit adipiscing bibendum est.
                  </span>
                  <span>
                    Quis ipsum suspendisse ultrices gravida dictum. Eu
                    ultrices Eu ultricesEu ul
                  </span>
                  <br></br>
                  <span>
                    vitae auctor eu augue ut. Nisi vitae suscipit tellus mauris
                    a diam
                  </span>
                  <span>
                    . Scelerisque in dictum non consectetur a erathpp  paee ki 
                    p;afd
                  </span>
                  <br></br>
                  <span> nam. Sed tempus urna et pharetra pharet </span>
                  <span>
                    ra massa massa ultricies. Facilisis gravida neque convallis
                    a cras semper. Congueasda
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div id="infusions" className="product-page-infusions">
            <div className="product-page-container25">
              <span className="product-page-text034">
                <span>INFUSIONS</span>
                <br></br>
              </span>
              <div className="product-page-container26">
                <button type="button" className="product-page-button03 button">
                  <p className="product-page-text037">Milky Day</p>
                </button>
                <button type="button" className="product-page-button04 button">
                  <p className="product-page-text038">Dark Day</p>
                </button>
                <button type="button" className="product-page-button05 button">
                  <p className="product-page-text039">
                    <span>Milky Night</span>
                    <br></br>
                  </p>
                </button>
                <button type="button" className="product-page-button06 button">
                  <p className="product-page-text042">Dark Night</p>
                </button>
              </div>
              <div className="product-page-container27">
                <div className="product-page-container28">
                  <div className="product-page-container29">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon24"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text043">High Fibre</span>
                  </div>
                  <div className="product-page-container30">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon26"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text044">High Fibre</span>
                  </div>
                  <div className="product-page-container31">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon28"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text045">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container32">
                  <div className="product-page-container33">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon30"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text046">High Fibre</span>
                  </div>
                  <div className="product-page-container34">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon32"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text047">High Fibre</span>
                  </div>
                  <div className="product-page-container35">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon34"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text048">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container36">
                  <div className="product-page-container37">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon36"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text049">High Fibre</span>
                  </div>
                  <div className="product-page-container38">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon38"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text050">High Fibre</span>
                  </div>
                  <div className="product-page-container39">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon40"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text051">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container40">
                  <div className="product-page-container41">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon42"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text052">High Fibre</span>
                  </div>
                  <div className="product-page-container42">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon44"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text053">High Fibre</span>
                  </div>
                  <div className="product-page-container43">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon46"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text054">High Fibre</span>
                  </div>
                </div>
              </div>
              <div className="product-page-container44">
                <p className="product-page-text055">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </span>
                  <span>
                    {' '}
                    do eiusmod tempor incididunt ut labore et Eu ultrices Eu
                    ultricesEu 
                  </span>
                  <br></br>
                  <span>
                    aliqua. Sit amet nisl suscipit adipiscing bibendum est.
                  </span>
                  <span>
                    Quis ipsum suspendisse ultrices gravida dictum. Eu
                    ultrices Eu ultricesEu ul
                  </span>
                  <br></br>
                  <span>
                    vitae auctor eu augue ut. Nisi vitae suscipit tellus mauris
                    a diam
                  </span>
                  <span>
                    . Scelerisque in dictum non consectetur a erathpp  paee ki 
                    p;afd
                  </span>
                  <br></br>
                  <span> nam. Sed tempus urna et pharetra pharet </span>
                  <span>
                    ra massa massa ultricies. Facilisis gravida neque convallis
                    a cras semper. Congueasda
                  </span>
                  <br></br>
                  <span>
                    eu consequat ac felis donec et. In vitae turpis massa sed
                    elementum tempus. Ut aliquam purus sit amet luctus
                    venenatis.
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    Euismod lacinia at quis risus sed vulputate odio ut enim.
                    Erat nam at lectus urna duis convallis convallis.asda asd
                    adakn pmkpl k;
                  </span>
                </p>
              </div>
            </div>
            <div className="product-page-container45">
              <div className="product-page-container46"></div>
              <div className="product-page-price-container1">
                <span className="product-page-text071">INR 34.99/-</span>
                <span className="product-page-text072">20g</span>
              </div>
            </div>
          </div>
          <div id="powercube" className="product-page-power-cube">
            <div className="product-page-container47">
              <div className="product-page-container48"></div>
              <div className="product-page-price-container2">
                <span className="product-page-text073">INR 39.99/-</span>
                <span className="product-page-text074">20g</span>
              </div>
            </div>
            <div className="product-page-container49">
              <span className="product-page-text075">
                <span>POWER CUBE</span>
                <br></br>
              </span>
              <div className="product-page-container50">
                <button type="button" className="product-page-button07 button">
                  <p className="product-page-text078">Honey Glaze</p>
                </button>
                <button type="button" className="product-page-button08 button">
                  <p className="product-page-text079">Dark Hazel</p>
                </button>
                <button type="button" className="product-page-button09 button">
                  <p className="product-page-text080">Vanilla White</p>
                </button>
              </div>
              <span className="product-page-text081">Insights</span>
              <div className="product-page-container51">
                <div className="product-page-container52">
                  <div className="product-page-container53">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon48"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text082">High Fibre</span>
                  </div>
                  <div className="product-page-container54">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon50"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text083">High Fibre</span>
                  </div>
                  <div className="product-page-container55">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon52"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text084">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container56">
                  <div className="product-page-container57">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon54"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text085">High Fibre</span>
                  </div>
                  <div className="product-page-container58">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon56"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text086">High Fibre</span>
                  </div>
                  <div className="product-page-container59">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon58"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text087">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container60">
                  <div className="product-page-container61">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon60"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text088">High Fibre</span>
                  </div>
                  <div className="product-page-container62">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon62"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text089">High Fibre</span>
                  </div>
                  <div className="product-page-container63">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon64"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text090">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container64">
                  <div className="product-page-container65">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon66"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text091">High Fibre</span>
                  </div>
                  <div className="product-page-container66">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon68"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text092">High Fibre</span>
                  </div>
                  <div className="product-page-container67">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon70"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text093">High Fibre</span>
                  </div>
                </div>
              </div>
              <div className="product-page-container68">
                <p className="product-page-text094">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </span>
                  <span>
                    {' '}
                    do eiusmod tempor incididunt ut labore et Eu ultrices Eu
                    ultricesEu 
                  </span>
                  <br></br>
                  <span>
                    aliqua. Sit amet nisl suscipit adipiscing bibendum est.
                  </span>
                  <span>
                    Quis ipsum suspendisse ultrices gravida dictum. Eu
                    ultrices Eu ultricesEu ul
                  </span>
                  <br></br>
                  <span>
                    vitae auctor eu augue ut. Nisi vitae suscipit tellus mauris
                    a diam
                  </span>
                  <span>
                    . Scelerisque in dictum non consectetur a erathpp  paee ki 
                    p;afd
                  </span>
                  <br></br>
                  <span> nam. Sed tempus urna et pharetra pharet </span>
                  <span>
                    ra massa massa ultricies. Facilisis gravida neque convallis
                    a cras semper. Congueasda
                  </span>
                  <br></br>
                  <span>
                    eu consequat ac felis donec et. In vitae turpis massa sed
                    elementum tempus. Ut aliquam purus sit amet luctus
                    venenatis.
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    Euismod lacinia at quis risus sed vulputate odio ut enim.
                    Erat nam at lectus urna duis convallis convallis.asda asd
                    adakn pmkpl k;
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="product-page-super-cube">
            <div className="product-page-container69">
              <span className="product-page-text110">
                <span>SUPER CUBE</span>
                <br></br>
              </span>
              <div className="product-page-container70">
                <button type="button" className="product-page-button10 button">
                  <p className="product-page-text113">Honey Glaze</p>
                </button>
                <button type="button" className="product-page-button11 button">
                  <p className="product-page-text114">Dark Hazel</p>
                </button>
                <button type="button" className="product-page-button12 button">
                  <p className="product-page-text115">Vanilla White</p>
                </button>
              </div>
              <span className="product-page-text116">Insights</span>
              <div className="product-page-container71">
                <div className="product-page-container72">
                  <div className="product-page-container73">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon72"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text117">High Fibre</span>
                  </div>
                  <div className="product-page-container74">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon74"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text118">High Fibre</span>
                  </div>
                  <div className="product-page-container75">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon76"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text119">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container76">
                  <div className="product-page-container77">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon78"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text120">High Fibre</span>
                  </div>
                  <div className="product-page-container78">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon80"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text121">High Fibre</span>
                  </div>
                  <div className="product-page-container79">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon82"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text122">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container80">
                  <div className="product-page-container81">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon84"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text123">High Fibre</span>
                  </div>
                  <div className="product-page-container82">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon86"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text124">High Fibre</span>
                  </div>
                  <div className="product-page-container83">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon88"
                    >
                      <path d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"></path>
                    </svg>
                    <span className="product-page-text125">High Fibre</span>
                  </div>
                </div>
                <div className="product-page-container84">
                  <div className="product-page-container85">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon90"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text126">High Fibre</span>
                  </div>
                  <div className="product-page-container86">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon92"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text127">High Fibre</span>
                  </div>
                  <div className="product-page-container87">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="product-page-icon94"
                    >
                      <path d="M170 810h684v86h-684v-86zM854 342v-128h-86v128h86zM854 128q36 0 60 25t24 61v128q0 36-24 60t-60 24h-86v128q0 70-50 121t-120 51h-256q-70 0-121-51t-51-121v-426h172v102l-78 62q-8 6-8 16v182q0 22 22 22h170q22 0 22-22v-182q0-10-8-16l-78-62v-102h470z"></path>
                    </svg>
                    <span className="product-page-text128">High Fibre</span>
                  </div>
                </div>
              </div>
              <div className="product-page-container88">
                <p className="product-page-text129">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </span>
                  <span>
                    {' '}
                    do eiusmod tempor incididunt ut labore et Eu ultrices Eu
                    ultricesEu 
                  </span>
                  <br></br>
                  <span>
                    aliqua. Sit amet nisl suscipit adipiscing bibendum est.
                  </span>
                  <span>
                    Quis ipsum suspendisse ultrices gravida dictum. Eu
                    ultrices Eu ultricesEu ul
                  </span>
                  <br></br>
                  <span>
                    vitae auctor eu augue ut. Nisi vitae suscipit tellus mauris
                    a diam
                  </span>
                  <span>
                    . Scelerisque in dictum non consectetur a erathpp  paee ki 
                    p;afd
                  </span>
                  <br></br>
                  <span> nam. Sed tempus urna et pharetra pharet </span>
                  <span>
                    ra massa massa ultricies. Facilisis gravida neque convallis
                    a cras semper. Congueasda
                  </span>
                  <br></br>
                  <span>
                    eu consequat ac felis donec et. In vitae turpis massa sed
                    elementum tempus. Ut aliquam purus sit amet luctus
                    venenatis.
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    Euismod lacinia at quis risus sed vulputate odio ut enim.
                    Erat nam at lectus urna duis convallis convallis.asda asd
                    adakn pmkpl k;
                  </span>
                </p>
              </div>
            </div>
            <div className="product-page-container89">
              <div className="product-page-container90"></div>
              <div className="product-page-price-container3">
                <span className="product-page-text145">INR 49.99/-</span>
                <span className="product-page-text146">20g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="product-page-footer">
        <div className="product-page-top">
          <div className="product-page-right">
            <div className="product-page-category">
              <span className="product-page-text147">Solutions</span>
              <div className="product-page-links">
                <span className="product-page-text148">
                  Responsive Web Design
                </span>
                <span className="product-page-text149">
                  Responsive Prototypesv
                </span>
                <span className="product-page-text150">Design to Code</span>
                <span className="product-page-text151">
                  Static Website Builder
                </span>
                <span className="product-page-text152">
                  Static Website Generator
                </span>
              </div>
            </div>
            <div className="product-page-category1">
              <span className="product-page-text153">Company</span>
              <div className="product-page-links1">
                <span className="product-page-text154">About</span>
                <span className="product-page-text155">Team</span>
                <span className="product-page-text156">News</span>
                <span className="product-page-text157">Partners</span>
                <span className="product-page-text158">Careers</span>
                <span className="product-page-text159">Press &amp; Media</span>
              </div>
            </div>
            <div className="product-page-category2">
              <span className="product-page-text160">Solutions</span>
              <div className="product-page-links2">
                <span className="product-page-text161">Twitter</span>
                <span className="product-page-text162">Linkedin</span>
                <span className="product-page-text163">Crunchbase</span>
                <span className="product-page-text164">Instagram</span>
                <span className="product-page-text165">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-page-bottom">
          <div className="product-page-branding">
            <img
              alt="image"
              src="/laxharlogo-200h.png"
              className="product-page-image1"
            />
          </div>
          <span className="product-page-text166">
            © Copyright LaxharTech 2022
          </span>
        </div>
      </footer>
    </div>
  )
}

export default ProductPage
