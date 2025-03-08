'use client'

import PropTypes from 'prop-types'

const LayoutPublic = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>header</div>
      <main>{children}</main>
      <div>footer</div>
    </div>
  )
}

LayoutPublic.propTypes = {
  children: PropTypes.node,
}


export default LayoutPublic