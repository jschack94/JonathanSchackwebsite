import React from 'react';
import { Animated } from 'react-animated-css';

const styles = {
  icon: {
    zIndex: '-1',
    width: '30px',
  },
};

const BackSkills = () => (
  <Animated
    animationIn="fadeInUpBig"
    animationOut="zoomOutDown"
    isVisible={true}
  >
    <article className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h2>
          Back-end
        </h2>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <div>
        <a className="f4 db black link hover-red pv1">Node.js</a>
        <a className="f4 db black link hover-red pv1">MySQL</a>
        <a className="f4 db black link hover-red pv1">Postgresql</a>
        <a className="f4 db black link hover-red pv1">MongoDB</a>
        <a className="f4 db black link hover-red pv1">Express</a>
        <a className="f4 db black link hover-red pv1">Ruby on Rails</a>
        <a className="f4 db black link hover-red pv1">Sinatra</a>
        <a className="f4 db black link hover-red pv1">OAuth and JWT</a>

        
      </div>
    </article>
  </Animated>
);

export default BackSkills;