import React from 'react'

const Welcome = ({ greeting }) => {
  return (
    <>
      <div>
        <div className="bienvenidos">
          <p className='animate__animated animate__zoomIn'>{greeting}</p>
        </div>
      </div>
    </>
  )
}

export default Welcome