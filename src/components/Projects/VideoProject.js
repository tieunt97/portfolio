import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Container } from './Project.style';

class VideoProject extends Component {
    render() {
        const { num, title, url } = this.props;
        return (
            <Container>
                <h1><span>{num}</span> {title}</h1>
                <ReactPlayer url={url} controls style={{ margin: "auto", maxWidth: "100%" }} />
            </Container>
        );
    }
}

export default VideoProject;