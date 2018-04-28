import React from 'react';
import { Table } from 'antd';
import axios from 'axios';
import './home.less';
import { Link } from 'react-router';

const span_logo = require('../../asset/images/span.png');
const themetitle = require('../../asset/images/themetitle.png');
const desktop = require('../../asset/images/desktop.png');
const Solution = require('../../asset/images/Solution.png');
const Books = require('../../asset/images/Books.png');
const slogan = require('../../asset/images/slogan.png');
const GetInvolved = require('../../asset/images/GetInvolved.png');
const SPAN = require('../../asset/images/logo.png');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  componentWillUnmount(){
    console.log("home unmouted")
}


  render() {
    return (

      <div className="home-main-body">
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
                <div className="learn-join-button">
                   <button className="learn-button" type="button">Learn More</button>
                   <button className="join-button" type="button">Join Now</button>
                </div>
            </div>
         </div>

         <div className="PCG">
             <div className="provider-platform">
                 <img  className="desktop" src={desktop}  alt="" /> 
                  <div className="details"> 
                     <div className="title">Providing a Platform </div>
                     <div className="content">SPAN builds a strong and diverse network of scrientif researches with myriad expertise and origanizations experiencing wide-ranging phenomena onto a single platform. World class scholars and business leaders are connected to collectively improve management effectiveness and create scientific knowedge </div> 
                  </div> 
             </div>

              <div className="provider-platform">
                 <img  className="desktop" src={Solution}  alt="" /> 
                  <div className="details"> 
                     <div className="title">Creating Solution </div>
                     <div className="content">SPAN helps origanizations work with world class scholars to solve critical business problems based on solid scientific methods and relevant data.</div>
                  </div> 
             </div>

              <div className="provider-platform">
                 <img  className="desktop" src={Books}  alt="" /> 
                  <div className="details"> 
                     <div className="title">Generating Knowledge</div>
                     <div className="content">By providing scholars with opportunities to match their expertise and focal interests with origanizations that share their enthusiasm over the phenomena of intersest, SPAN works with scholars and origanizations to creat new scientific knowedge</div>
                  </div> 
             </div>
         
         
         </div>

         <div className="how-we-do-it">
            <img  className="slogan" src={slogan}  alt="" /> 
            <div className="details">
                <div className="step">
                    <div className="title">Collecting and analyzing data to identify key factors increasing employee engagement and productivity</div>
                    <div className="content">Employees matter. We use the most advanced methods to comprehensively capture all information relating to your workforce to find key factors hindering or promoting outcomes that matter, such as employee engagement, productivity, innovation, and teamwork. Learn more.</div>
                </div>

                 <div className="step">
                    <div className="title">Analyzing the data organizations already have to discover hidden insights</div>
                    <div className="content">Data driven decisions are important. But, many organizations do not have the capabilities necessary to analyze and understand the data they already have. We can help. Our world class scholars can transform your data into management insights to unveal the hidden secrets to success. Learn more.</div>
                </div>

                 <div className="step">
                    <div className="title">Testing if a decision really works</div>
                    <div className="content">Before you implement a big decision in your organization, how do you know it will work? We can help you test to see if a decision will result in the outcomes you want based on rigorous scientific methods. Don’t waste resources on the decisions that are doomed to fail. Learn more.</div>
                </div>

            </div>
         </div>


         <div className="myinvoled" >
             <img  className="GetInvolved" src={GetInvolved}  alt="" />
             <div className="mylist">
               <div className="item">

                   <div className="num">
                      1
                   </div>

                   <div className="content">
                        Register in our system, set up your organization strucutre, and invite employees to join. You can easily upload employee and organization structure information in an excel file and our system will do the rest.
                   </div>

               </div>

                <div className="item">
                    <div className="num">
                     2
                    </div>

                    <div className="content">
                         Complete scientifically validated surveys and assessment that match your organizational needs and/or provide us relevant data that our data scientists and management experts can uncover the insights from the data.
                    </div>
                </div>

                <div className="item">
                    <div className="num">
                     3
                    </div>
                    <div className="content">
                        Our feedback system delivers customized management insights and action plans to improve employee productivity and organizational effectiveness.
                    </div>
                </div>

             </div>
             <div className="Join-in">
                <button  type="button">Join Now</button>  
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

export default Home;
