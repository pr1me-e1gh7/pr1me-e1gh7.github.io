import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer () {
    return (
        <section className="footer bg-black text-green-400" >
            <div class="mx-auto flex justify-center">
                <div className="inline-flex px-3 my-1">
                <SocialIcon url="https://github.com/pr1me-e1gh7" target="_blank" bgColor="#68d391" fgColor="#000000" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }} title="GitHub profile"></SocialIcon>
                <SocialIcon url="https://www.linkedin.com/in/davidanthonycaro/" bgColor="#68d391" fgColor="#000000" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }} title="LinkedIn profile"></SocialIcon>
                <SocialIcon url="https://discordapp.com/users/pr1me_e1gh7#1857/" bgColor="#68d391" fgColor="#000000" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }} title="Discord profile"></SocialIcon>
                <SocialIcon url="https://stackoverflow.com/users/17207475/pr1me-e1gh7" bgColor="#68d391" fgColor="#000000" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }} title="Stack Overflow profile"></SocialIcon>
                <SocialIcon url="https://open.spotify.com/user/mr.m0th?si=0c534c13c3f74ec3" bgColor="#68d391" fgColor="#000000" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }} title="Spotify profile"></SocialIcon>
                </div>
            </div>
        </section>
    )
};