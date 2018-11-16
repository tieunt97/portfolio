import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { HeroImage, Image, RevealP } from '../Home/Home.style'
import WhenInView from '../../components/WhenInView';

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>HOME PAGE</h1>
                <HeroImage>
                    <img src={require('../../assets/tieunt.jpg')} className="img-responsive" alt="my-Image" />
                    <div>
                        <h1>Nguyen Tai Tieu</h1>
                        <p>Front-end Developer</p>
                    </div>
                </HeroImage>
                <WhenInView>
                    {
                        ({ isInView }) =>
                            <RevealP hide={!isInView}>My name is Nguyen Tai Tieu, you may call me Tieu. I am a student at Ha Noi University of Science and Technology and I improving my skills to
                            become a full-stack developer. Now, I working as Web Developer in Ha Noi, Viet Nam. I like to share and be shared
                            knowledge and experiences with other people, because it is the way quickly to improve myself.</RevealP>
                    }
                </WhenInView>
            </Container>
        );
    }
}

export default Home;