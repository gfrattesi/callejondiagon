import React from 'react'

const Welcome = ({ greeting }) => {
  return (
    <>
      <div>
        <p className="bienvenidos">{greeting}</p>
      </div>
    </>
  )
}

export default Welcome