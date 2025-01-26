/**
 * @copyright 2024 parthpatel
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },

  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'OOP language'
  },
  {
    imgSrc: '/images/Csharp.svg',
    label: 'C#',
    desc: 'OOP language'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nextjs.svg',
    label: 'NextJs',
    desc: 'React framework'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Tools and technology 
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[500ch] reveal-up">
          Here are some list of major tools and technology that I&apos;ve used in my projects and I am experienced with but not limited to this only.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill