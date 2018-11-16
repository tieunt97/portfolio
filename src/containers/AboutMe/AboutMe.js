import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { H1, H2, P } from './AboutMe.style';

class AboutMe extends Component {
    render() {
        return (
            <div style={{ background: "#FFEB3B", minHeight: "100vh" }}>
                <Container>
                    <H1 textAlign="center" fontSize="3em">ABOUT ME</H1>
                    <P textAlign="left" fontSize="2em">My name is Nguyen Tai Tieu, you may call me Tieu. I am a student at Ha Noi University of Science and Technology and I improving my skills to
                                become a full-stack developer. Now, I working as Web Developer in Ha Noi, Viet Nam. I like to share and be shared
                            knowledge and experiences with other people, because it is the way quickly to improve myself.</P>
                    <img src={require('../../assets/Quote_8_Eleanor_Roosevelt.jpg')} className="img-responsive" alt="Quote" style={{margin: "auto"}}/>
                    <H1 textAlign="left" fontSize="2.7em" style={{ paddingTop: "15px" }}>Technologies I have worked with:</H1>
                    <P fontSize="4em" className="technology" >
                        <i className="devicon-css3-plain-wordmark colored"></i>
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <i className="devicon-react-original-wordmark colored"></i>
                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                        <i className="devicon-mysql-plain-wordmark colored"></i>
                        <i className="devicon-bootstrap-plain-wordmark colored"></i>
                        <i className="devicon-git-plain-wordmark colored"></i>
                        <i className="devicon-github-plain-wordmark colored"></i>
                        <i className="devicon-javascript-plain colored" style={{color: "grey"}}></i>
                        <i className="devicon-jquery-plain-wordmark colored"></i>
                    </P>

                    <H1 fontSize="2.7em" style={{ paddingTop: "15px" }}>Contact me</H1>
                    <H2 fontSize="2em" style={{ color: "#ffffff" }}><i class="fa fa-paper-plane" aria-hidden="true"></i>
                        <a href="mailto:tieunt.bk97@gmail.com"> tieunt.bk97@gmail.com</a></H2>
                </Container>
            </div>
        );
    }
}

export default AboutMe;