/**
 * @copyright 2024 Parth Patel
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Parth2861866'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/parth-patel-bbab90297/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/ParthPatel7506'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/parth.patel.207/'
  },
  
  
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:ppatel2861866@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-center pt-10 mb-8">
          

         <p className="text-gray-300 hover:text-white cursor-default transition-all duration-300
          hover:drop-shadow-[0_0_2px_#fff] 
          hover:drop-shadow-[0_0_5px_#ff69b4]
          hover:drop-shadow-[0_0_10px_#ff69b4] 
          hover:drop-shadow-[0_0_20px_#ff69b4]"> ** Thank you for visiting my web page, I heartly appriciate ❤️❤️ **   </p>

         
        </div>

      </div>
    </footer>
  )
}

export default Footer