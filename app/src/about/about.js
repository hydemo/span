import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import './about.less';
import { baseURL } from '../../config'

const span_logo = require('../../asset/images/span.png');
const themetitle = require('../../asset/images/WeareSPAN.png');
const desktop = require('../../asset/images/desktop.png');
const Solution = require('../../asset/images/Solution.png');
const Books = require('../../asset/images/Books.png');
const TheOrganization = require('../../asset/images/TheOrganization.png');
const GetInvolved = require('../../asset/images/GetInvolved.png');
const SPAN = require('../../asset/images/logo.png');

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            founders:[],
            advisors:[],
        };
    }
  
    componentDidMount() {
        this.getAboutinfo();
    }
      
    getAboutinfo = async () => {
        const url=`${baseURL}/about/info`
        const res=await axios.get(url).then(r => r);
        const info=res.data;
        let advisors=info.advisors;
        let founders=info.founders;
        this.setState({advisors,founders});
        console.log("about")
      };

      componentWillUnmount(){
        console.log("about unmouted")
    }
  
  render() {

    const {advisors,founders}=this.state;

    let founder=founders.map((item,i)=>(
        <div className="list" key={i}>
            <div className="pic_box">
            <img className="pic" src={item.avatarUrl}  alt="" /> 
            </div>
            
            <div className="details"> 
            <div className="name">{item.name}</div>
                <div className="content">{item.brief}</div>
            </div> 
        </div>));


    let advisor=advisors.map((item,i)=>(
        <div className="list" key={i}>     
                    <div className="details"> 
                        <div className="name">{item.name}</div>
                        <div className="content">{item.brief}</div>
                    </div> 
        </div>));


    return (

      <div className="about-main-body">
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
         <div className="aboutSpan"> <p>SPAN is founded by leading scientists and enterprenur,<br/>
                            amiding to promote evidence-based management and<br/> 
                            data-driven business decision</p>
         </div>

         <div className="founder">
             <div className="title">Founders</div>

             <div className="founders">
               {founder}
             </div>

         </div>

        <div className="researcadvisor">
             <div className="title">Research & Advisor</div>
             <div className="advisor">
                 {advisor}
             </div>
         </div>

         <div className="Theoriganization">
            <img  className="title" src={TheOrganization}  alt="" /> 
            <div className="details">
                    <div className="statement">statement goes here</div>
                    <div className="content">Looking for quality, look no further, your search stops here. We have the best quality commercial umbrellas available in the world. On our website, we feature a complete line of Skyspan shade solutions. Innovative styles and distinct configurations. Skyspan can help you create a sophisticated and functional environment in any setting. Our line of umbrellas do not start and end with Skyspan. Our resort umbrellas are our most exciting products. We feature the best, made in the China, custom order umbrellas, pavilions, lounges, parasols, and anchors, by TUUCI and Terra Furniture. We have been working directly with the hospitality industry, resorts, hotels, retail markets, HOA’s, clubs, architects and designers, restaurants, and individual consumers for more than 20 years customizing umbrellas with special fabrics and logos. Whether you have just one umbrella or 100 umbrellas, Skyspan has a product for you. We offer volume discounts. For special orders, please call us directly at 400 777 5913.</div> 
            </div>

             <div className="work-with-us">
                <button  type="button">Work with us</button>  
             </div>

         </div>

     
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

export default About;
