import React from 'react'
import "./style/LecturersPictures.scss"

const ElementLecturersPictures = () => {
  return (
    <>
    <div>
      <p className="title">BEST LECTURERS</p>
    </div>

    <div className="image-row">
      <div className="image-col">
        <div className="image-col photo">
          <img src={require("./style/Ema.jpg")} alt="profile"/>
        </div>
        <p>Emily Brown</p>
      </div>
      <div className="image-col">
        <div className="image-col photo">
          <img src={require("./style/Joseph.jpg")} alt="profile"/>
        </div>
        <p>Joseph Smith</p>
      </div>
      <div className="image-col">
        <div className="image-col photo">
          <img src={require("./style/Anna.jpg")} alt="profile"/>
        </div>
        <p>Anna Wiliams</p>
      </div>
    </div>
    <hr size="1px" width="80%" color="black"/> 
    </>
  )
}

export default ElementLecturersPictures