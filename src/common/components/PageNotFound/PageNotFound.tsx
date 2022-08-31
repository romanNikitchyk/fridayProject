import React, { CSSProperties } from 'react'

const headingNotFound: CSSProperties = {
  textAlign: 'center',
  fontSize: '6rem',
  lineHeight: '200%',
}

export function PageNotFound() {
  return (
    <div>
      <h2 style={headingNotFound}>
        <span style={{ fontSize: '8rem' }}>404</span>
        <br />
        PAGE NOT FOUND
      </h2>
    </div>
  )
}
