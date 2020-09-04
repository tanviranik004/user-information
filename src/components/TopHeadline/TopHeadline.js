import React, { useEffect } from 'react';
import  {useState} from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const[articles,setArticles] = useState([]);
    useEffect(()=>{
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=e6de9e1161fc44c19beaf63e34504468'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headline:{articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
            
        </div>
    );
};

export default TopHeadline;