import React from "react";
import bkgd from "../images/home.gif";
import dcphoto from "../images/dcphoto.jpg";
import fourstor from "../images/fourstor-preview.gif"
import codequiz from "../images/code-quiz-preview.gif"
import dayplanr from "../images/day-planner-preview.gif"
import tpgen from "../images/team-profile-gen-preview.gif"

const iframe = '<iframe src="https://api.badgr.io/public/assertions/hdE4dj5XS_inrwLAQ-8F2Q?embedVersion=1&amp;embedWidth=330&amp;embedHeight=191&amp;identity__email=dcaro1996%40yahoo.com" title="Badge: UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time]" style="width: 330px; height: 191px; border: 0px;"></iframe>';

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

export default function Home () {
    return (
        <div>
            <img src={bkgd} alt="Orlando" className="custom-img absolute object-fill w-full h-full"></img>
            <main className="relative">
                <div className="p-10 lg:pt48 container mx-auto relative">
                    {/* Space for Nav */}
                    <br></br>
                    {/* My Picture */}
                    <section className="text-black justify-center rounded-lg lg:flex p-5">
                        <img src={dcphoto} alt="David Caro" className="custom-dcphoto rounded mr-8"></img>
                        <div className="text-lg flex flex-col font-black justify-center">
                            <h1 className="text-5xl mb-2" id="custom-header">&lt;Hello there, I'm David 👋&gt;</h1>
                            <h3 className="text-3xl mb-2">Your Friendly-Neighborhood Web Developer</h3>
                        </div>
                        {/* Cert Badge */}
                        <div className="px-5">
                            <Iframe iframe={iframe} />
                        </div>
                    </section>
                    <br></br>
                    {/* My Skillset */}
                    <section className="custom-section bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col">
                            <text className="text-5xl mb-2 text-center">&lt;My Skillset&gt;</text>
                            <p className="text-2xl text-center">Excellent proficiency in CSS, HTML, JavaScript, MERN stack (MongoDB, Express.js, React.js, and Node.js), and Web API’s.
                            I've also received training in MVC (Model-View-Controller), NoSQL/Non-SQL, OOP (Object-Oriented Programming), ORM (Object-Relational Mapping), PWA (Progressive Web App), and SQL (Structured Query Language).
                            I'm currently studying Amazon Web Services, C#, Java, and Python.
                            Typing speed of 65+ WPM at <a href="https://bit.ly/347gwJF" className="custom-link">expert level</a>.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* Why You Should Hire Me */}
                    <section className="custom-section bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col">
                            <text className="text-5xl mb-2 text-center">&lt;Why You Should Hire Me&gt;</text>
                            <p className="text-2xl text-center">I believe you should consider hiring me for
                            (1) my fresh perspective I'd bring to your team,
                            (2) my constant drive to improve the coding skills I've worked painstakingly hard on to obtain,
                            (3) my meticulous and organized approach to any problem, and 
                            (4) my ability to collaborate kindly, timely, and efficiently in a team.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* Projects */}
                    <section className="custom-section bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <text className="text-5xl mb-2 flex justify-center">&lt;Projects&gt;</text>
                            <div className="flex flex-row">
                                {/* Fourstor */}
                                <div className="custom-section px-3 flex flex-col justify-center">
                                    <a href="https://pr1me-e1gh7.github.io/fourstor/" target="_blank">
                                        <img src={fourstor} alt="FourStor" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                                        <text className="text-2xl mb-2 flex justify-center">FourStor</text>
                                    </a>
                                </div>
                                {/* Team Profile Generator */}
                                <div className="custom-section px-3">
                                    <a href="https://github.com/pr1me-e1gh7/team-profile-generator" target="_blank">
                                        <img src={tpgen} alt="Team Profile Generator" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                                        <text className="text-2xl mb-2 flex justify-center">Team Profile Generator</text>
                                    </a>
                                </div>
                                {/* Day Planner */}
                                <div className="custom-section px-3">
                                    <a href="https://pr1me-e1gh7.github.io/day-planner/" target="_blank">
                                        <img src={dayplanr} alt="Day Planner" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                                        <text className="text-2xl mb-2 flex justify-center">Day Planner</text>
                                    </a>
                                </div>
                                {/* Code Quiz */}
                                <div className="custom-section px-3">
                                    <a href="https://pr1me-e1gh7.github.io/code-quiz/" target="_blank">
                                        <img src={codequiz} alt="Code Quiz" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                                        <text className="text-2xl mb-2 flex justify-center">Code Quiz</text>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br></br>
                    {/* Space for footer */}
                    <br></br>
                    <br></br>
                </div>
            </main>
        </div>
    );
};