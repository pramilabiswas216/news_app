import React from 'react'
import "./NewsArticle.css";

function NewsArticle({author, title, urlToImage, description, url, publishedAt}) {
  return (
    <div>
      <div className='news-article-card'>
                <img src={urlToImage} alt='' className='news-article-img'/>
                <h1 className='article-title'>{title}</h1>

                <div className='article-info'>
                    <p className='article-author-name'>{author}</p>
                    <p className='article-publish-date'>{publishedAt}</p>
                </div>

                <p className='article-description'>{description}</p>

                <a href={url} target='blank' className='read-more-btn'>Read More</a>
                
              </div>
    </div>
  )
}

export default NewsArticle
