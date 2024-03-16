import React, { Component} from "react";
import projectsData from "../components/projects-data.jsx"
import { Toolbar } from "./Toolbar.jsx";
import { ProjectList } from "./ProjectList.jsx";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

export default class Portfolio extends Component {

    state = {
        selected: "All", projects: projectsData
    };

    onSelectFilter = (filter) => {
        console.log('--filter selected--')
        // смотрим по какому элементу был клик и достаем текстовое значение кнопки
        const selectedFilter = filter.target.textContent;
        console.log(selectedFilter)

        // изменить состояние поменять на активный фильтр и изменить выдачу в projectsData
        if (selectedFilter === "All") {
            this.setState({selected: selectedFilter, projects: projectsData})
        }
        else {
            this.setState({selected: selectedFilter, projects: projectsData.filter(project => project.category === selectedFilter)})
        }
        
    }

    render() {
        return (
            <>
                <Toolbar
                filters={filters}
                selected={this.state.selected}
                onSelectFilter={this.onSelectFilter}
                />
                <ProjectList projects={this.state.projects} />
            </>
        );
    }
}


