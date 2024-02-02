import React from 'react'

import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className={`product-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.productImage}
        className="product-card-image"
      />
      <h2 className="product-card-text">{props.productName}</h2>
      <span className="product-card-text1">{props.price}</span>
      <span className="product-card-text2">{props.shortDescription}</span>
    </div>
  )
}

ProductCard.defaultProps = {
  rootClassName: '',
  shortDescription: 'Lorem ipsum dolor sit amet',
  productName: 'Product Name',
  price: 'Rs. 100',
  imageAlt: 'image',
  productImage:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1500',
}

ProductCard.propTypes = {
  rootClassName: PropTypes.string,
  shortDescription: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.string,
  imageAlt: PropTypes.string,
  productImage: PropTypes.string,
}

export default ProductCard
