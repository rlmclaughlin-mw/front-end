import React from 'react'
import '../news/newsCard.css'

let altImage = require('./marianna.jpg')

export default class ScienceFeedCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            viewTeaser: false
        }
  }


    checkContent = (item) => {
        let splitItem = item.split(' ')
        for(let i = 0; i < splitItem.length; i++){
            if(splitItem[i] == 'document.getElementById("linkPremium").innerHTML'){
                item = 'Click on article for additional information'
            }
        } 
        return item
    }

    teaserHandler = () => {
        if(this.state.viewTeaser === false){
            this.setState({
                viewTeaser: true
            })
        } else {
            this.setState({
                viewTeaser: false
            })
        }
     }



    render(){
        return(
            <div className='card-container'>
                <div className="mobile-container"> 
                    <div className='author-timestamp-container'> 
                        <p className='author'>@{this.props.card.author}</p> 
                        <p className='timestamp'>{this.props.card.published.slice(0, -14)}</p> 
                    </div>                    
                    <div className='image-content-container'>
                        <div className='article-image'> 
                            {this.props.card.image === "None" || this.props.card.image === "null" ? 
                                <img alt='newscard thumbnail' className='newsCard-image' src={altImage} /> :
                                <img alt='newscard thumbnail' className='newsCard-image' src={this.props.card.image} />
                            }
                        </div> 
                        <div className='title-links-container'>
                            <div className="title">
                                <a href={this.props.card.url} style={{textDecoration: 'none'}}>
                                    <p>{this.props.card.title}</p>
                                </a>
                            </div> 
                            {this.state.viewTeaser === false ? <div onClick={this.teaserHandler} className='links'>Open Teaser</div> : <div onClick={this.teaserHandler} className='links'>Close Teaser</div>  }
                            
                        </div> 
                    </div> 
                    <div className={this.state.viewTeaser === true ? 'article-content' : 'article-content-teaser'}>
                        <p>{this.checkContent(this.props.card.description)}</p> 
                    </div> 
                </div> 
            </div> 
        )
    }
}