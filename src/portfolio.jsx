import projectsData from "./projects.js";

function Project(props) {
  const { url, image, name, responsive, mobile } = props;
  return (
    <div className="project-item">
      {/* <h4>{name}</h4> */}
      <img src={image} alt={name} />
      <a target="blank" href={url}>
        {name}
      </a>
      <p className="responsiveness">
        {responsive ? "Desktop/Mobile" : mobile ? " Mobile only":'desktop only'}
      </p>
      {/* <p className="responsiveness">{mobile && "Mobile Only"}</p> */}
    </div>
  );
}

function Projects() {
  return (
    <>
      <section className="about">
        <h3>About me</h3>
        <p>
          Hi, I am a self-taught frontend developer passionate about building
          clean, engaging web experiences. With a strong background in HTML,
          CSS, and JavaScript, and ongoing growth in React and responsive
          design, I am focused on writing better code and delivering real value.
          I am looking for roles where I can grow quickly, contribute to
          meaningful projects, and make a real impact.
        </p>
      </section>
      <section className="project-section">
        <h3>My Projects</h3>
        <div className="projects">
          {projectsData.map((project) => {
            return <Project {...project} key={project.id} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
