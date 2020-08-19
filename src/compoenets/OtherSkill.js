import React from 'react';
import { Animated } from 'react-animated-css';

const styles = {
  icon: {
    zIndex: '-1',
    width: '30px',
  },
};

const OtherSkills = () => (
  <Animated
    animationIn="fadeInRightBig"
    animationOut="zoomOutDown"
    isVisible={true}
  >
    <article className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h2>
          Other
        </h2>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <div>
        <a className="f4 db black link hover-hot-pink pv1">GIT</a>
        <a className="f4 db black link hover-hot-pink pv1">RESTful APIs</a>
        <a className="f4 db black link hover-hot-pink pv1">Responsive Design</a>
        <a className="f4 db black link hover-hot-pink pv1">Microsoft Office</a>
        <a className="f4 db black link hover-hot-pink pv1">Adobe</a>
        <a className="f4 db black link hover-hot-pink pv1">Strategic Communications</a>
        <a className="f4 db black link hover-hot-pink pv1">Wireframing</a>
        <a className="f4 db black link hover-hot-pink pv1">Storyboarding</a>


      </div>
    </article>
  </Animated>
);

export default OtherSkills;