import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project';

class Projects extends Component {
    render() {
        

        
        return(
            <div>
                {projects.allProjects.map((item) => {
                return <Project key={item.title} title={item.title} imgName={item.imgName} description={item.description} />
                } )}
            </div>
        )
    }
}

export default Projects;