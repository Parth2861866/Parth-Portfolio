/**
 * @copyright 2024 parthpatel
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  
  {
    imgSrc: '/images/nothing.png',
    title: 'My Personal Portfolio Website',
    tags: ['HTML','React', 'Tailwind CSS','GSAP'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/project1.png',
    title: 'College Project - A Full Stack Health Care App',
    tags: ['React','TypeScript','tailwind css','Appwrite-backend', 'ShadCn UI'],
    projectLink: 'https://github.com/Parth2861866/CIS434'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: ''
  },
 

];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work