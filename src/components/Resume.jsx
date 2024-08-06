

export default function Resume(){
    return(
        <div id='resume-page'>
            <h1 id="res-title">RESUME</h1>
            <div id="resume">
                <h2>Check Out My Resume!</h2>
                <h3>View here or at the link:</h3>
                <a 
                rel="noreferrer"
                target="_blank"
                href="https://docs.google.com/document/d/1IINQIJPQu9_p8j2BcXIKaZU2iLfujOMRMspc39W9Hyw/edit?usp=sharing"
                >RESUME</a>
                <iframe title="resume" id="resume-link" src="https://docs.google.com/document/d/1IINQIJPQu9_p8j2BcXIKaZU2iLfujOMRMspc39W9Hyw/edit?usp=sharing"/>
            </div>
        </div>
    )
}