import React from "react";
import "./css/projectList.css";


export const ProjectList = (props) => {
    console.log('ProjectList')

    const { projects } = props;

    return (
        <div className="projectList">
            {projects.map((projects, i) => (
                <div className="projectListItem" key={i}>
                    <img className="projectListItemImg" src={projects.img}></img>
                </div>
             ))}
        </div>
    )

}