export default function ProjectItem({ project }) {
  return (
    <li style={{ marginBottom: '1.5rem' }}>
      <strong>{project.title}</strong>

      <div style={{ marginTop: '0.00rem' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            code
          </a>
        )}
        {project.report && (
          <>
            {' · '}
            <a href={project.report} target="_blank" rel="noreferrer">
              report
            </a>
          </>
        )}
      </div>

      {project.tags && (
        <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>
          {project.tags.join(' · ')}
        </div>
      )}

      {project.description && (
        <p style={{ marginTop: '0.00rem' }}>
          {project.description}
        </p>
      )}
    </li>
  );
}

// export default function ProjectItem({ project }) {
//   const {
//     title,
//     description,
//     github,
//     report,
//     tags = [],
//     url
//   } = project;

//   return (
//     <li>
//       <div>
//         <strong>{title}</strong>
//       </div>

//       <div>
//         {github && (
//           <a href={github} target="_blank" rel="noopener noreferrer">
//             code
//           </a>
//         )}
//         {github && report && ' · '}
//         {report && (
//           <a href={report} target="_blank" rel="noopener noreferrer">
//             report
//           </a>
//         )}
//         {!github && !report && url && (
//           <a href={url} target="_blank" rel="noopener noreferrer">
//             link
//           </a>
//         )}
//       </div>

//       {tags.length > 0 && (
//         <div>
//           {tags.map((tag) => (
//             <span key={tag}>{tag}</span>
//           ))}
//         </div>
//       )}

//       {description && <p>{description}</p>}
//     </li>
//   );
// }