import ProjectItem from './ProjectItem';

export default function YearSection({ year, projects }) {
  return (
    <section>
      <h3>{year}</h3>

      <ul>
        {projects.map((project, index) => (
          <ProjectItem
            key={`${year}-${project.title}-${index}`}
            project={project}
          />
        ))}
      </ul>
    </section>
  );
}