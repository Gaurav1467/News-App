import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor(){
        super();

        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResult : 0
        }
    
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3f949cae9a004b48adf9525a8decfb41&page=1&pageSize=${this.props.pageSize}`;

        this.setState({loading:true})
        let data = await fetch(url);
        let paresdData = await data.json();
        console.log(paresdData);

        this.setState({
            articles : paresdData.articles,
            totalResult : paresdData.totalResults,
            loading:false
        })

    }

    handleNextClick = async()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3f949cae9a004b48adf9525a8decfb41&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

        this.setState({loading:true})
        let data = await fetch(url);
        let paresdData = await data.json();
        console.log(paresdData);

        this.setState({
            page : this.state.page + 1,
            articles : paresdData.articles,
            loading:false
        })
    }

    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3f949cae9a004b48adf9525a8decfb41&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

        this.setState({loading:true})
        let data = await fetch(url);
        let paresdData = await data.json();
        console.log(paresdData);

        this.setState({
            articles : paresdData.articles,
            page : this.state.page-1,
            loading:false
        })
    }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>GNC Headlines</h1>
        {this.state.loading&&<Spinner/>}
            <div className="row">
                { !this.state.loading&&this.state.articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url}>
                    <NewsItem title = {element.title?element.title.slice(0,44):""} description = {element.description?element.description.slice(0,85):""} imageUrl = {element.urlToImage} url = {element.url}/>
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&larr;Previous</button>
            <button disabled={Math.ceil(this.state.totalResult/this.props.pageSize)<=this.state.page} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next&rarr;</button>
            </div>
      </div>
    )
  }
}

export default News