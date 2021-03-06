import React, { Component } from 'react';
import Footer from './Footer';
import Me from './image/hi.jpg';

class ChrisProfile extends Component {
  render() {
    return (
      <section className="tc pa3 pa5-ns">
        <article className="hide-child relative b--black-20 mw5 center mySoc">
        <img src={Me} className="db br4 dib myPic" alt="my logo" ></img>

          <div className="pa2 bt b--black-20">
            <h1 className="f4 animated pulse infinite">Jonathan Schack</h1>
            <hr className="mw3 bb bw1 b--black-10"></hr>
          </div>
          <Footer />
        </article>
      </section>
    );
  }
}

export default ChrisProfile;