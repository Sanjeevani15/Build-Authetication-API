import React from 'react';

const dashboard = () => {
  return (
      <>
    {/* //   navbar starting */}
     <div>
    <nav class="navbar navbar-expand-md shadow-lg w-full fixed top-0 right-0 left-0 flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Student Dashboard</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Courses
        </a>
        <a href="#responsive-header" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Schdeule
        </a>
        <a href="#responsive-header" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Attendance
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">LIVE Class</a>
      </div>
    </div>
  </nav>
  </div>
    {/* //   navbar ending */}

 

   <div
    class="position:absolute text-center bg-white bg-no-repeat bg-cover h-[400px]">
    <div
      class="w-full h-full  bg-emerald-200 bg-opacity-20"
    >
      <div class="flex justify-center items-center w-full h-full">
        <div class="text-white">
          <h2 class="font-semibold text-4xl text-cyan-600 mb-2">HEY, Welcome to Reactify</h2>
          <h4 class="font-normal text-lg text-teal-600 mb-8">Learn , Experiment , Invent</h4>
          <a
            class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-900 font-medium text-sm leading-snug uppercase rounded hover:bg-sky-300 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >TIME for action</a
          >
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default dashboard;
