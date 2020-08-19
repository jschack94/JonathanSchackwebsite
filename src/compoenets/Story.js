import React from 'react';
// import {Animated} from "react-animated-css";
import eduList from './List/eduList';
import MyEdu from './myEdu';
import resume from './image/me.jpg';


const styles = {
  textStyle: {
    textAlign: 'left',
  },
  eduStyle: {
    width: '100%',
    height: '200px',
  },
};

const Story = () => (
  <div style={styles.textStyle}>
  <h1>About me</h1>
  <h2>Hello!</h2>
									<p>I am a full stack web developer with several years of experience as a consultant in the digital media and technology software industries. After completing my bachelor's degree at the University of Missouri School of Journalism and stops at Cars.com and Cision, I realized that I wanted more out of my career. After a bit of introspection, I came to the conclusion that I had a desire to build, and I made the decision to transition into the technology space after completing Flatiron School’s immersive software engineering bootcamp. Because of Flatiron, I have been propelled into a fresh career path that I am extremely excited to learn and grow in.

										I am eager to apply my deep knowledge in marketing and communication, combined with my background in technology and coding to help facilitate connections between organizations and consumers. The intersection of these two areas is what I know best, and I am eager to start contributing to a team with likeminded goals and values. </p>
    <hr />
    <h1>Education </h1>
    <div className='eduBlip' style={styles.eduStyle}>
      {eduList.map(item => (
          <MyEdu schoolName={item.schoolName} program={item.program} date={item.date} logo={item.logo} />
      ))
      }
      
    </div>
    <h1>My<br />
			Resume</h1>
      <img id="loadImg" src={resume} alt="" />

    
    
   </div>



   
   
);

export default Story;