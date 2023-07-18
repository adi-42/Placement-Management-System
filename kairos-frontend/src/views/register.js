import React from 'react';
import Logo from '../images/kairos.jpeg'
import Navbar from './navbar'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const baseURL="http://localhost:8000"
  const Register = () => {
    const [name, setname] = useState('');
    const [number, setnumber] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [flag, setflag] = useState(false);
    const [flag1, setflag1] = useState(false);
    const [des, setdes] = useState('Designation');
    const [des1, setdes1] = useState('Branch');
    const [level, setlevel] = useState(-1);
    const handleChange = event => {
      setemail(event.target.value);
    };

    const handleChange2 = event => {
      setname(event.target.value);
    };
    const handleChange3 = event => {
      setnumber(event.target.value);
    };
    const handleChange4 = event => {
      setaddress(event.target.value);
    };
    const eventhandle=event=>{
      axios.post(`${baseURL}/emp/new`,
      JSON.stringify({
        "Email ID":`${email}`,
        "Access Level":`${level}`
         }),{headers: {
          "Content-Type": "application/json"}
      }).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)});
    }
    return (
      <div>
        <div>
          {/* //<Navbar /> */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <img className="mx-auto w-36 border-solid border-black border-2 rounded-full" src={Logo} alt="" />
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">skilling young who are unemployed n guiding youths to take up their career.
placing in best suitable areas of their choice. motivate them to be either entrepreneur or engage everyone to work..</p>
              </div>
              <div className="flex flex-row lg:w-2/3 w-full sm:flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
                <div className="relative flex-grow w-1/2 left-2">
                  <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="full-name" name="full-name" value={name} onInput={handleChange2} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" value={email} onInput={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="number" className="leading-7 text-sm text-gray-600">Phone Number</label>
                  <input type="number" id="number" name="number" value={number} onInput={handleChange3} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <input type="address" id="address" value={address} onInput={handleChange4} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className="text-white relative top-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    onClick={()=>{setflag(!flag)}}
  >
    {des} {" "}
    <svg
      className="w-2.5 h-2.5 ml-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  {/* Dropdown menu */}
  {flag?<div
    id="dropdown"
    className=" z-10 relative top-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li onClick={()=>{setdes("Supervisor") ;setflag(false); setlevel(1);}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          SuperVisor
        </a>
      </li>
      <li onClick={()=>{setdes("Senior Manager");setflag(false); setlevel(1);}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Senior Manager
        </a>
      </li>
      <li onClick={()=>{setdes("HR");setflag(false); setlevel(1);}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          HR
        </a>
      </li>
      <li onClick={()=>{setdes("Placement Cordinator");setflag(false); setlevel(0);}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
         Placement Coordinator
        </a>
      </li>
      <li onClick={()=>{setdes("Trainer");setflag(false); setlevel(0);}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
         Trainer
        </a>
      </li>
    </ul>
  </div>:<></>}
</>
<>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className="text-white relative top-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    onClick={()=>{setflag1(!flag1)}}
  >
    {des1} {" "}
    <svg
      className="w-2.5 h-2.5 ml-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  {/* Dropdown menu */}
 {flag1? <div
    id="dropdown"
    className="z-10 relative top-9 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li onClick={()=>{setdes1("Bangalore");setflag1(!flag1)}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Bangalore
        </a>
      </li>
      <li onClick={()=>{setdes1("Pune");setflag1(!flag1)}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Pune
        </a>
      </li>
      <li onClick={()=>{setdes1("Vijaypur");setflag1(!flag1)}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Vijaypur
        </a>
      </li>
      <li onClick={()=>{setdes1("Mysore");setflag1(!flag1)}}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Mysore
        </a>
      </li>
    </ul>
  </div>:<></>}
</>

                  <Link to="/login">
                <button onClick={eventhandle} className="relative top-14  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a > Register</a></button>
                </Link></div>
              
            </div>
            
          </section>
        </div>
      </div>
    );
  }
  
  export default Register;