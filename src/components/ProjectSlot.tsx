import './ProjectSlot.css'


export type ProjectProps = {
    name: string;
    description: string;
    technologies: string;
    github: string;
}


export const ProjectSlot = (props: ProjectProps) => {
    const project = props
    return (
        <div className="project-slot">
            <h3>{project.name}</h3>
            <p className='description'>{project.description}</p>
            <p className='technologies'>{project.technologies}</p>
            <a className='github' href={project.github}>GitHub Link</a>
        </div>
    )
}