import React from 'react'

const Welcome = ({ greeting }) => {
  return (
    <>
      <div>
        <div className="bienvenidos">
          <p>{greeting}</p>
        </div>
      </div>
    </>
  )
}

export default Welcome