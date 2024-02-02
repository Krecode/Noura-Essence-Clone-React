import React from 'react'

import PropTypes from 'prop-types'

import ProductCard from './product-card'
import './cubes.css'

const Cubes = (props) => {
  return (
    <div className={`cubes-cubes ${props.rootClassName} `}>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  )
}

Cubes.defaultProps = {
  rootClassName: '',
}

Cubes.propTypes = {
  rootClassName: PropTypes.string,
}

export default Cubes
