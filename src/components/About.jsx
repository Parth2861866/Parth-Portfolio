/**
 * @copyright 2024 parthpatel
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Parth, currently pursuing my bachelor&apos;s degree at Cleveland State University. I am currently in a junior year of my college and actively engaged in making project out of university&apos;s scope. I am currently looking for an Internship opportunity related computer science field.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/Logo3.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About