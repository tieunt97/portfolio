import React, { Component } from 'react';
import { Container } from './Project.style';

class ImageProject extends Component {
    render() {
        const { num, title, src } = this.props;
        return (
            <Container>
                <h1><span>{num}</span> {title}</h1>
                <img src={src} className="img-responsive" alt="Image" style={{ margin: "auto" }} />
            </Container>
        );
    }
}

export default ImageProject;