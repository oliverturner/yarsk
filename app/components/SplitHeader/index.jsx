import React, {PropTypes} from 'react'

const SplitHeader = ({children}) => (
  <h2 className="splitheader">
    {children.split(' ').map((word, key) => {
        const arr = word.split('')
        return (
          <span key={key}>
            <strong>{arr.shift().toUpperCase()}</strong>{arr.join('')}
          </span>
        )
      }
    )}
  </h2>
)

SplitHeader.propTypes = {
  children: PropTypes.string.isRequired
}

export default SplitHeader
