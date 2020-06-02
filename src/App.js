import React, {useState} from 'react';
import './App.css';
import backgroundImage from './assets/matrix.jpeg';
import Header from "./components/Header";


export default function App() {
    let [projects, setProjects] = useState(['NodeJS', 'Angular 8', 'React Native', 'ReactJS', 'Ionic 5', 'Docker', 'Go']);

    function handlerAddProject() {
        setProjects([... projects, `Novo Projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />
                <img src={backgroundImage} alt="" width={300}/>
                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>
            <button type="button" onClick={handlerAddProject}>Adicionar Projeto</button>
        </>
    );
}
