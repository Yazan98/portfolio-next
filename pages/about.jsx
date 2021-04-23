import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PersonalPagesComponent from '../components/layouts/PersonalPagesComponent';

export default function About() {
  return (
    <PersonalPagesComponent>
      <div className="AboutContentContainer">
        <p className="Hint">Software Engineer</p>
        <h2>Yazan Tarifi</h2>
        <p>
          A code-minded front-end software engineer focused on Design Full Applications
          From Backend to Frontend Via Some Platforms, Frameworks, Languages
        </p>

        <div className="AboutContent">
          <h2>About Me</h2>
          <p>
            I&apos;m always want to Create a Creative Tools To Make My work Better,
            Create Opensource Projects, Based In Jordan, Create A backend for Project by design,
            Build a Restful Api Based on (SpringBoot, Nest.js, Ktor) and Create
            A Mobile Application Using Latest Technologies in Android Development
            also there is a good knowledge in Web Development With React.js,
            Over 3+ years of experience in Software Development
          </p>
        </div>

        <div className="Links">
          <a href="/resume" className="Button">Resume</a>
          <a href="https://www.github.com/Yazan98" className="Button">Github Account</a>
          <a href="/languages" className="Button">Languages & Frameworks</a>
        </div>

        <section className="ContactContainer">
          <div className="Title">
            <div className="Content">
              <h2>Contact</h2>
              <p className="Des">If You Would To Contact Me Fell Free To Send Email And Write Your Message :D</p>
            </div>
          </div>
          <form className="ContactForm">
            <TextField id="email" type="email" variant="outlined" placeholder="Enter Your Email ..." autoComplete={false} required />
            <TextField id="subject" type="text" variant="outlined" placeholder="Enter The Subject ..." autoComplete={false} required />
            <TextareaAutosize id="message" type="time" variant="outlined" placeholder="Please Enter Your Message Here" rowsMax={10} required />
          </form>
        </section>
      </div>
    </PersonalPagesComponent>
  );
}
