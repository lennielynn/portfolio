 import { CiLinkedin } from "react-icons/ci";
 import { FaGithub } from "react-icons/fa";
import { useHref, Link } from "react-router-dom";

const Home = () => {
     return(
      <div id="about-me-pg">
            <div id="hero-img">
                <h1 id="hero-txt">Lyla Guthrie</h1>
                <h3 id="hero-txt2">Software Developer</h3>
            </div>
            
            <main>
                <h2>About Me</h2>
                <div id="info">
                <p id="abt-me-paragraph">
                   Hello all! My name is Lyla Guthrie, I am an 19 year old with a passion for computer science and software development, and a zeal for problem solving. From the time I was young I've taken interest in specific detail and have a love for problem solving. The reason I've chosen Software Development as my field of work is because of my love of continual learning and my unique sense of interest when in the area of tech. I am a hard worker, and continual learner with a nessecity to create. Thank you for visiting my Portfolio, feel free to contact me! 
                </p>
                </div>
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