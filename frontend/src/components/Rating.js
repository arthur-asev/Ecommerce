import React from 'react'

export default function Rating(props) {
    const {rating,numReviews}=  props
    return (
        <div>
        <div className="rating">
        <span>
          <i className="fa fa-star"></i>
        </span>
        <span>
          <i className="fa fa-star"></i>
        </span>
        <span>
          <i className="fa fa-star"></i>
        </span>
        <span>
          <i className="fa fa-star"></i>
        </span>
        <span>
          <i className="fa fa-star"></i>
        </span>
      </div>
        </div>
    )
}
