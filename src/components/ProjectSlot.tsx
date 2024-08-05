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
            <p>{project.description}</p>
            <p>{project.technologies}</p>
            <p>{project.github}</p>
        </div>
    )
}