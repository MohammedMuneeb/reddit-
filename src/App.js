import React ,{useState ,useEffect }from 'react'; 
function Linkify (props ){const {children } =props; 





//Extract URLs from text using regular expression 
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi ; 


const linkifiedContent =children.replace (urlRegex ,(url )=>(<a href={url} target ="_blank" rel ="noopener noreferrer">{url }</a >)); 





return <div >{linkifiedContent }</div >;} 
function Conterraproject (){ 
  const [articles ,setArticles ]=useState ([]); 


  const                      [subreddit ,setSubreddit ]=useState ('reactjs'); 



  useEffect (()=>{fetch (`https://www.reddit.com/r/${subreddit }.json`).then(res => res.json  ()) .then(data => {if  (data != null     ){setArticles (data.data.children );}}).catch (error  =>console.error (error ));},[subreddit ]); 
  
  
  
  
  
  return (<div > 




<ul  >{articles.map ((article ,indexes )=>(<li key ={article.data.id  }> 
<p >{indexes +1} Title  <a href ={article .data .permalink  }target ="_blank">{article .data .title } 
  
</a ></p ><br /><br /><Linkify >{article .data    .selftext }</Linkify > 
{/*{parse  (article .data    .selftext )}*/} 
<br />Read about this topic more here at : <a href ={article .data                      .url                          }>{article .data                      .title  }</a > 
 
<br />{article .data                      .source                          }</li >))} 
</ul ></div >);}export default Conterraproject ; 