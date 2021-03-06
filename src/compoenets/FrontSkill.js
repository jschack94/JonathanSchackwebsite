import React from 'react';
import { Animated } from 'react-animated-css';

const styles = {
  icon: {
    zIndex: '-1',
    width: '30px',
  },
};

const FrontSkills = () => (
  <Animated
    animationIn="fadeInLeftBig"
    animationOut="zoomOutDown"
    isVisible={true}
  >
    <article className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h2>
          Front-end
        </h2>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <div>
        <a className="f4 db black link hover-green pv1">HTML</a>
        <a className="f4 db black link hover-green pv1">CSS</a>
        <a className="f4 db black link hover-green pv1">JavaScript (ES6)</a>
        <a className="f4 db black link hover-green pv1">Material UI</a>
        <a className="f4 db black link hover-green pv1">Boostrap UI</a>
      <a className="f4 db black link hover-green pv1">React.js</a>
        <a className="f4 db black link hover-green pv1">Redux</a>
        <a className="f4 db black link hover-green pv1">React Router</a>
      </div>
    </article>
  </Animated>
);

export default FrontSkills;