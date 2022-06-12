import React, { Component } from 'react';
import imag from "../assets/zhheadshot.jpg";
import "./About.css";
export default class About extends Component {
  render() {
    return (

      <div>
        <div class="split left">
          <div className="centered">
            <img
              class="profile_image"

              alt="Profile Pic"
              src={imag}

            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ziyad Hassan</div>
            <div className="brief_description">
              <text>
                Hello! My name is Ziyad Hassan and I am incoming sophmore studying computer science @ MIT. I run cross country and track for my school,but I also do it for fun
                Asides from that I love taking walks along scenic places and taking pictures. I love getting to know people and making genuine connections, so feel free to hit me up!
              </text>
            </div>
          </div>
        </div>

      </div>
    )
  }
}