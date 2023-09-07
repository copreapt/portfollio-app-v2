import React from 'react'
import me from '/assets/me.jpeg'
import { profileLinks, techStack } from '../utils';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <main className="bg-[#171717] h-screen">
      <section className="lg:w-[80%] lg:m-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="text-center items-center flex flex-col">
            <h1 className="font-bold text-3xl lg:text-6xl pt-5 lg:pt-0 text-white">
              Front-End React Developer
            </h1>
            {/* linked in, github */}
            <div className="lg:flex space-x-6 text-2xl mt-10 hidden text-white">
              {profileLinks.map((item) => {
                return (
                  <Link to={item.url} key={item.id}>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
            {/* paragraph for desktop version */}
            <div className="text-center mt-5 hidden lg:block">
              <p className="font-semibold text-white">
                Hi there! My name is Oprea Catalin,
                <br />
                I'm 26 years old and I'm based in Galati, Romania
              </p>
            </div>
          </div>
          <img
            src={me}
            alt="photo of myself"
            className="mt-5 lg:mt-10 lg:w-[50%] w-[90%] rounded-full lg:shadow-md lg:shadow-black lg:hover:shadow-lg lg:hover:shadow-black lg:ease-in-out lg:duration-500 lg:hover:scale-105 z-10"
          />
        </div>
        <div className="text-center mt-5 lg:hidden">
          <p className="font-semibold text-white">
            Hi there! My name is Oprea Catalin,
            <br />
            I'm 26 years old and I'm based in Galati, Romania
          </p>
        </div>
        {/* tech stack */}
        <div className="text-center mt-5 lg:flex lg:mt-10">
          <h1 className="text-xl font-bold  lg:m-2 p-2 text-white">Tech Stack</h1>
          <div className="flex justify-evenly mt-5 text-2xl lg:ml-5 lg:space-x-6">
            {techStack.map((item) => {
              return (
                <h1
                  key={item.id}
                  className="lg:hover:scale-150 lg:ease-in-out lg:duration-300 text-white"
                >
                  {item.icon}
                </h1>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage