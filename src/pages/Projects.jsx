import React from 'react'
import { Link } from 'react-router-dom';
import { projects } from '../utils';

const Projects = () => {
  return (
    <main className="h-max flex flex-col overflow-y-auto bg-[#171717]">
      <div className="mt-20 text-center">
        <h1 className="text-white text-3xl font-semibold">Projects</h1>
      </div>
      <section className="w-[80%]  mx-auto mt-10 h-max space-y-10 lg:space-y-20 lg:flex lg:flex-col lg:items-center">
        {projects.map((project) => {
          return (
            <div
              className="rounded-xl pb-10 flex flex-col lg:flex-row lg:space-x-10 lg:w-[80%]"
              key={project.id}
            >
              {/* IMG DIV */}
              <div className="lg:w-[90%] lg:flex lg:items-center">
                <Link to={project.liveDemo} target="_blank">
                  <img
                    src={project.img}
                    alt="app preview"
                    className="rounded-xl"
                  />
                </Link>
              </div>
              {/* TEXT DIV */}
              <div className=" lg:w-[90%] lg:flex lg:flex-col lg:justify-between">
                <h1 className="hidden lg:block text-white text-small text-center lg:text-lg">
                  {project.description}
                </h1>
                <h1 className="text-white text-xl text-center pt-5">
                  Done Using
                </h1>
                <p className="text-center text-white text-xl">
                  {project.doneUsing}
                </p>
                <p className="text-center text-white text-xl pt-2">
                  {project.version}
                </p>
                <div className="flex justify-evenly space-x-3 mt-10 mx-4">
                  <button className="p-2 bg-[#6495ED] rounded-full w-[80%] text-white">
                    <Link to={project.gitHub} target="_blank">
                      GitHub
                    </Link>
                  </button>
                  <button className="p-2 bg-[#6495ED] rounded-full w-[80%] text-white">
                    <Link to={project.liveDemo} target="_blank">
                      Live Demo
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Projects