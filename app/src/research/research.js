import React from 'react';
import axios from 'axios';
import './research.less';
import { Link } from 'react-router';
import { Carousel } from 'antd';
import { baseURL } from '../../config'


const span_logo = require('../../asset/images/span.png');
const themetitle = require('../../asset/images/Research.png');
const desktop = require('../../asset/images/desktop.png');
const Solution = require('../../asset/images/Solution.png');
const Books = require('../../asset/images/Books.png');
const TheOrganization = require('../../asset/images/TheOrganization.png');
const GetInvolved = require('../../asset/images/GetInvolved.png');
const SPAN = require('../../asset/images/logo.png');
const articlePic=require('../../asset/images/pg.png')
const pw=require('../../asset/images/pw.png')


class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        topicTitle:[],
        topics:[],
        carouselPicture:[],
        isSeemore:{},
    
    };
  }

  componentDidMount() {
    this.getTopiclist();
    this.getTopic();
    this.getCarousel();
  }

componentWillUnmount(){
    console.log("reach unmouted")
}

  getTopiclist = async () => {
    const url=`${baseURL}/article/articleTypes`
    const res=await axios.get(url).then(r => r);
    const topic=res.data;
    let topicTitle=[];
    topic.map((item)=>{
                    topicTitle.push(item.type)
                });
    
    this.setState({topicTitle});
    console.log("reach3")
  };

  getTopic = async () => {
    const url=`${baseURL}/article/introduce`
    const res=await axios.get(url).then(r => r);
    const topic=res.data;
    let topics=[];
    for(let t in topic)
    {   
      topics.push({articles:topic[t].articles,title:t})
    }
   
    this.setState({topics});
    console.log("reach1")
  };

 

  getCarousel= async () => {
    const url=`${baseURL}/article/activities`
    const res=await axios.get(url).then(r => r);
    const topic=res.data;
    let carouselPicture=[];
    topic.map(item=>{carouselPicture.push(item.coverUrl)})
    this.setState({carouselPicture})
    console.log(topic)
  };

  seeMoreFunc= (i) => {
      const { isSeemore } = this.state;
      if(isSeemore[i]) {
        isSeemore[i] = false;
      } else {
        isSeemore[i] = true;
      }
      console.log(isSeemore);
     this.setState({ isSeemore });
  }


  render() {

    const {topicTitle,topics,carouselPicture,isSeemore}=this.state;
    const li= topicTitle.map((item,i)=>
     (<li key={i}><a href={`#${item}`} >{item}</a></li>));
   
    const topicx=topics.map((item,i)=>(

        <div className={`leadership ${i % 2 === 1 ? '' : 'leadership-o'}`} id={item.title} key={i}>
            <div className="title">{item.title}</div>
            <div className="list">
           { isSeemore[i]?
                (item.articles.map((a,j)=>( 
                        <div className="item" key={j}>
                            <div className="pic_box">
                                <img className="pic" src={a.coverUrl}  alt="" /> 
                            </div>
                            <div className="articleTitle">{a.title}</div>
                            <div className="content">{a.text}</div>
                            <div className="readArticle-button">
                                <button  type="button">Read Article</button> 
                            </div>
                        </div> 
                ))):(item.articles.slice(0,4).map((a,j)=>( 
                    <div className="item" key={j}>
                        <div className="pic_box">
                            <img className="pic" src={a.coverUrl}  alt="" /> 
                        </div>
                        <div className="articleTitle">{a.title}</div>
                        <div className="content">{a.text}</div>
                        <div className="readArticle-button">
                            <button  type="button">Read Article</button> 
                        </div>
                    </div> 
                 )))}
            </div>
            <div
                className="see-more"
                onClick={() =>this.seeMoreFunc(i)}
            >{!isSeemore[i]? 'See More...':'Back...'}</div>
        </div>
        
    ));

   
    const _carouselPicture=carouselPicture.map((item,i)=>(
            <div className="article" key={i}>
                <img  className="article-img" src={item}  alt="" />
            </div>
     ));

    return (

    <div className="research-main-body">
         <div className="header">
            <div className="navigate">
                <img  className="banner" src={span_logo}  alt="" />
                <ul className="list">
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/about'>About</Link></li>
                    <li><Link to ='/research'>Research</Link></li>
                    <li><Link to ='/'>Join | Sign In</Link></li>
                </ul>
            </div>
            <div className="theme">
                <img  className="title" src={themetitle}  alt="" />
            </div>
            
         </div>

         <div className="topic"> 
                <ul className="list">
                    {li}
                </ul>
         </div>
        
        <Carousel autoplay>
           {_carouselPicture}
        </Carousel>
        
          {topicx}
        
         <div className="footer">
            <img  className="SPAN" src={SPAN}  alt="" />
               <ul className="list">
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/about'>About</Link></li>
                    <li><Link to ='/research'>Research</Link></li>
                    <li><Link to ='/'>Join | Sign In</Link></li>
                </ul>
           <div className="copyright">(c)2017 SPAN Scrience Practice Analysis Network,All Right Reserved.</div>
         </div>
      </div>
    );
  }
}

export default Research;
