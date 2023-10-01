import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url} = this.props;
    return (
        <div className= "container my-2">
                    <div className="card md" style={{width: "18rem"}}>
                <img src={imageUrl?imageUrl:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={url} className="btn btn-sm btn-dark" target='_blank'>Read More</a>
                </div>
                </div>
        </div>
    )
  }
}

export default NewsItem