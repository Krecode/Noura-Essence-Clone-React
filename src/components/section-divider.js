import React from 'react'

import PropTypes from 'prop-types'

import './section-divider.css'

const SectionDivider = (props) => {
  return (
    <div className={`section-divider-container ${props.rootClassName} `}>
      <span className="section-divider-text">{props.sectionName}</span>
    </div>
  )
}

SectionDivider.defaultProps = {
  sectionName: 'Section Name',
  rootClassName: '',
}

SectionDivider.propTypes = {
  sectionName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionDivider
