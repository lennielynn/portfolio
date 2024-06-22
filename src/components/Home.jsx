 import { CiLinkedin } from "react-icons/ci";
 import { FaGithub } from "react-icons/fa";
import { useHref, Link } from "react-router-dom";

const Home = () => {
     return(
      <div id="about-me-pg">
            <div id="hero-img">
                <h1 id="hero-txt">Lyla Guhtrie</h1>
                <h3 id="hero-txt2">Software Developer</h3>
            </div>
            
            <main id="info">
                <h2>About Me</h2>
                <p>
                   Hello all. My name is Lyla Guthrie, I am an 18 year old with a passion for computer science and software development, and a zeal for problem solving. From the time I was young I've taken interest in specific detail and have a love of learning. <br/> The reason I've chosen Software Development as my field of work is because of my love of continual learning and my unique sense of interest when in the area of tech, aswell as my love for the flexability in schedule the job makes avalbillity for. I am a hard worker, avid learner, and personable. My backrground as an Martial artist/instructor has taught me the people skills, discipline, and team work skills necesary to complete the tasks I am given well and in a timely manor.  
                </p>
            </main>
            <div id="contact-card">
                <img id="me-img" src="./images/me.jpg" alt="me" />
                <div id="contact-info">
                    <h3 >Contact Me</h3>
                    <h4 >
                        Phone: +1(843)685-1641<br/><br/>
                        Email: lylaguthrie23@gmail.com<br/>
                    </h4>
                    <div id="social-bar">
                        <Link to="https://github.com/lennielynn">
                        <button class="button">
                        <FaGithub id="github" />
                        </button>
                        </Link>
                        <Link to="https://www.linkedin.com/in/lylaguthrie/">
                        <button class="button">
                        <CiLinkedin id="linkedin"/>
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
     </div>
     )
}

export default Home