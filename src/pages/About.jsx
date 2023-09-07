import React, { useState } from 'react'
import about from '/assets/about-me.jpg'

const About = () => {

  const [active, setActive] = useState("Professional");



  return (
    <main className="bg-[#171717] h-screen overflow-y-auto">
      <section className='lg:flex lg:w-fit lg:mx-10 lg:pt-10'>
        {/* visible only in desktop */}
        <div className="hidden lg:block pt-10 w-[80%]">
          <img src={about} alt="about me" className='w-full' />
        </div>
        <div className="mx-8 pt-10 flex flex-col text-white text-center lg:w-[60%] lg:justify-center">
          <h1 className="font-semibold text-2xl">About Me</h1>
          <h1 className="mt-10 text-xl">
            I'm a passionate Junior Web Developer, based in Romania.
          </h1>

          <div className="w-[80%] flex justify-evenly mx-auto mt-10 space-x-4">
            <button
              className={`bg-[#6495ED] rounded-md p-2 w-full ease-in-out duration-300 ${
                active === "Professional" && "bg-blue-700"
              }`}
              onClick={() => setActive("Professional")}
            >
              Professional
            </button>
            <button
              className={`bg-[#6495ED] rounded-md p-2 w-full ease-in-out duration-300 ${
                active === "Personal" && "bg-blue-700"
              }`}
              onClick={() => setActive("Personal")}
            >
              Personal
            </button>
          </div>
          {active === "Professional" ? (
            <p className="mt-10 leading-7 lg:text-xl lg:p-2 lg:text-left lg:pl-10 lg:leading-8">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and Firebase.
              I excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              I am also a team player who thrives in collaborating with
              cross-functional teams to produce outstanding web applications.
            </p>
          ) : (
            <p className="mt-10 leading-7 lg:text-xl lg:text-left lg:p-2 lg:pl-10 lg:leading-9">
              <span className="font-bold pr-1 text-[#6495ED]">
                Some of my Hobbies are:
              </span>
              Reading, playing football and playing video games. <br />
              <span className="font-bold pr-1 text-[#6495ED]">
                Something weird about me:
              </span>
              I have 14 cats, which make my days brighter. <br />
              <span className="font-bold pr-1 text-[#6495ED]">
                Some other things about me:
              </span>
              I have a twin brother, I lived 8 years in Spain and 2 years in
              Ireland. <br />
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default About