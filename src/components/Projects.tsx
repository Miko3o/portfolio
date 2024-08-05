import { ProjectSlot } from './ProjectSlot'

import './Projects.css'

export const Projects = () => {


    return (
        <div>
            <h1>Projects</h1>
            <div className='projectsContainer'>
                <ul className='projectSlot'>
                    <li><ProjectSlot name='Maze Solver' description='it solves a maze' technologies='python, pygame' github='https://github.com/Miko3o/maze_solver' /></li>
                    <li><ProjectSlot name='Movie Collector' description='search for movies' technologies='react, typescript, python' github='https://github.com/Miko3o/movie-collector' /></li>
                    <li><ProjectSlot name='Friend Card' description='create a profile card and share it with friends' technologies='react, typescript, python' github='https://github.com/Miko3o/friend-card' /></li>
                </ul>
            </div>
        </div>
    )
}