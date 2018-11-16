import React, { Component } from 'react';
import VideoProject from '../../components/Projects/VideoProject';
import ImageProject from '../../components/Projects/ImageProject';
import { Container } from '../../theme/grid';

class Projects extends Component {
    render() {
        return (
            <Container className="container">
                <h1>PROJECTS</h1>
                <VideoProject title="MOKI Demo" url="https://youtu.be/9z2whgoxHlM" num="01" />
                <hr />
                <ImageProject title="Student Management System" src={require('../../assets/Student_Management_System.png')} num="02" />
                <hr />
                <VideoProject title="Library Management System" url="https://youtu.be/vxIjI8wwVCQ" num="03" />
            </Container>
        );
    }
}

export default Projects;