import { ProjectSlot } from './ProjectSlot'

import './Projects.css'

export const Projects = () => {


    return (
        <div>
            <h1>Projects</h1>
            <div className='projectsContainer'>
                <ul className='projectSlot'>
                    <li><ProjectSlot name='Maze Solver' description='Draw out your own maze and watch the real-time solving process using BFS, DFS, or Dijkstra’s algorithms. Additionally, watch the walls of your maze sort themselves in real-time using various sorting algorithms. Utilizes a handwritten graphical interface in python using the pygame library.' technologies='python, pygame' github='https://github.com/Miko3o/maze_solver' /></li>
                    <li><ProjectSlot name='Movie Collector' description='Full-stack application to keep track and share your opinion about your favorite movies in a personal watching library. Utilizes movie data from the IMDb API and allows for user login to store data of user input.' technologies='react, typescript, python' github='https://github.com/Miko3o/movie-collector' /></li>
                    <li><ProjectSlot name='Friend Card' description='Connect with friends by sharing an information card to display likes and interests with the ability to create a custom profile avatar. Uses Google’s OAuth 2.0 API for user login and Spotify Web API to display music interests.' technologies='react, typescript, python' github='https://github.com/Miko3o/friend-card' /></li>
                    <li><ProjectSlot name='Inomono' description='Chat and respond to your inner thoughts in real time in the format of a texting UI' technologies='react, typescript' github='https://github.com/Miko3o/ino-mono' /></li>
                </ul>
            </div>
        </div>
    )
}