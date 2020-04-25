import React, { Component } from "react";
import{
   
  Link
}from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className="MainBody-style">
          <div className="split left-mainpage">
              <ul>
                <li>
              <h2><p><b>Wildlife Photography </b></p></h2>
                <p><b>13 March 2020 </b></p>
                <img src="https://www.treadright.org/wp-content/uploads/2019/02/AdobeStock_33313240-2.jpg" Class="image"/>
                <h6>As well as requiring photography skills, wildlife photographers may need field craft skills. For example, some animals are difficult to approach and thus a knowledge of the animal's behavior is needed in order to be able to predict its actions. Photographing some species may require stalking skills or the use of a hide/blind for concealment.!</h6>
                
                
              </li>
              <li>
                <h2>
                 <p><b> Astrophotography </b></p>
                </h2>
                <p><b>15 January 2018 </b></p>
                <img src="https://www.adorama.com/alc/wp-content/uploads/2017/12/shutterstock_384983128-2-1024x558.jpg" Class="image"></img>
                <h6>Astrophotography is simply taking a photograph of an object in space, whether it's with a point-and-shoot camera, the Hubble Space Telescope or any other type of camera. ... Early forays into photography, like the daguerreotype, and today's modern cameras involve capturing the light reflected off of various objects..</h6>
                </li>
              <li>
                <h2>
                <p><b>Landscape Photography </b></p>
                <p><b>4th April 2019 </b></p>
                <img src="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg" Class="image"></img>
                <h6>Landscape photography is the art of capturing pictures of nature and the outdoors in a way that brings your viewer into the scene. From grand landscapes to intimate details, the best photos demonstrate the photographer's own connection to nature and capture the essence of the world around them. </h6>
                <hr/>
                </h2>
                

           </li>
                </ul>
              </div>
          

          <div className="vertical"></div>

          <div className="split right-mainpage">
            <div className="middle">
              <h3>Photography Blogs</h3>
              <br/>
              <nav>
                <ul>
                  <li Classname="first">
                  <h3> <Link to="/Blog1">Burrard-Lucas Wildlife Photography</Link></h3> 
                  </li>
                  <li Classname="second">
                    <h3><Link to="/Blog2">Astrography by Jerry Lodgriguss</Link></h3>
                  </li>
                  <li Classname="third">
                   <h3><Link to="/Blog3">Mark Denney Landscape Photography</Link></h3>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
    );
	}
}
export default Homepage;