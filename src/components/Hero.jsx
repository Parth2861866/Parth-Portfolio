/**
 * @copyright 2024 parthpatel
 * @license Apache-2.0
 */


/**
 * Components
 */
import {  ButtonOutline } from "./Button";
export const ButtonPrimary = ({ label, icon }) => {
  const handleDownload = () => {
    // Replace this URL with your actual CV file URL from Google Drive
    const fileUrl = "https://drive.google.com/file/d/1r8rrfbJohxCtvdusZrJudtUYxvCxUJ7h/view?usp=sharing";
    window.open(fileUrl, '_blank');
  };

  return (
   <button
      onClick={handleDownload}
      className="flex items-center bg-blue-400 text-gray-800 gap-2 bg-primary/90 hover:bg-blue-600 hover:text-slate-200 px-6 py-3 rounded-lg transition-colors duration-300"
    >
    
      
      {icon === "download" && (
        <span className="material-symbols-outlined text-xl"></span>
     )} 
      <span className="font-medium">{label}</span>
    </button>
  );
};


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Henry clark portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download Resume"
              icon="download"
              //fileId="https://drive.google.com/file/d/1r8rrfbJohxCtvdusZrJudtUYxvCxUJ7h/view?usp=sharing"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[300px] ml-auto bg-gradient-to-br from-zinc-700 via-25% via-zinc-300/40 to-5 rounded-[67px] overflow-hidden">
            <img
              src="/images/profilenew.png"
              width={50}
              height={90}
              alt="Parth Patel"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero