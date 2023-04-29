import React from 'react'
import "./style/Carousel.scss"

const ElementCarousel = () => {
  return (
    <div>
    <div>
      <p className="title">BEST COURSES</p>
    </div>
    <hr size="1px" width="80%" color="black"/>  
    <main>
      <figure className="icon-cards mt-3">
        <div className="icon-cards__content">
          <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={require("./style/1.png")} className="img-int-slider" alt="default.jpg"></img></div>
          <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={require("./style/2.jpg")} className="img-int-slider" alt="default.jpg"></img></div>
          <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={require("./style/3.jpg")} className="img-int-slider" alt="default.jpg"></img></div>
        </div>
      </figure>
    </main>
    <hr size="1px" width="80%" color="black"/> 
    </div>
  )
}

export default ElementCarousel