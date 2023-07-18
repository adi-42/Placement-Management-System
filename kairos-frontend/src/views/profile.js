import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Profile = () => {
  const [flag,setflag]=useState(false);
  const [name,setname]=useState("");
  const [address,setaddress]=useState("");
  const [id,setid]=useState("");
  const [centre,setcentre]=useState("");
  const [dob,setdob]=useState("");
  const [education,seteducation]=useState("");
  const [client,setclient]=useState("");
  const [joining,setjoining]=useState("");
  const [number,setnumber]=useState("");
  const [mail,setmail]=useState("");
  const [placement,setplacement]=useState("");
  const [placed,setplaced]=useState(false);
  const idno =localStorage.getItem("Trainee");
  const level=localStorage.getItem("level");
  const submithandle=(e)=>{  
    if(level===0 || level ===-1)
    setflag(true);
    axios.post(`http://localhost:8000/profile/edit`,
    JSON.stringify({
      "Unique ID Number":`${id}`,
      "Name":`${name}`,
      "Training Centre":`${centre}`,
      "DOB":`${dob}`,
      "Education":`${education}`,
      "Client Order":`${client}`,
      "Joining Date":`${joining}`,
      "Phone Number":`${number}`,
      "Email Address":`${mail}`,
      "Placed":`${placed}`,
      "Placement Centre":`${placement}`
       }),{headers: {
        "Content-Type": "application/json"}
    }).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)});
}
  const exe=async ()=>{
    const res=await axios.get(`http://localhost:8000/profile?uuid=${idno}&level=${level}`);
    console.log(res);
    setname(res.data.Name);
    setid(res.data["Unique ID Number"]);
    setcentre(res.data["Training Centre"]);
    setdob(res.data.DOB);
    seteducation(res.data.Education);
    setclient(res.data["Client Order"]);
    setjoining(res.data["Joining Date"]);
    setnumber(res.data["Phone Number"]);
    setmail(res.data["Email Address"]);
    setplacement(res.data["Placement Centre"]);
    setplaced(res.data.Placed);
    setaddress(res.data.Address);
  }
  useEffect(()=>{
    exe();
  },[]);
  return (
    <>
    {flag?<>
  <button
    data-modal-target="popup-modal"
    data-modal-toggle="popup-modal"
    className=" hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Toggle modal
  </button>
  <div
    id="popup-modal"
    tabIndex={-1}
    className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div className="relative w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-6 text-center">
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
           You Cant Edit
          </h3>
          <button
            onClick={()=>{setflag(false);}}
            data-modal-hide="popup-modal"
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            OK
          </button>
          
        </div>
      </div>
    </div>
  </div>
</>:<div></div>
}
    <div className='m-auto w-2/3'>
        <h1 className='text-center font-bold text-4xl p-14'>Trainee Details</h1><form>
        <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Unique ID Number
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={id}
        onInput={(e)=>{setid(e.target.value)}}
        required=""
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Trainee's Name 
      </label>
      <input
        type="Name"
        id="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={name}
        onInput={(e)=>{setname(e.target.value)}}
        required=""
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Training Centre 
      </label>
      <input
        type=""
        id=""
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={centre}
        onInput={(e)=>{setcentre(e.target.value)}}
        required=""
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor=""
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Date of Birth 
      </label>
      <input
        type="date"
        id=""
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={dob}
        onInput={(e)=>{setdob(e.target.value)}}
        required=""
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Education 
      </label>
      <input
        type=""
        id=""
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={education}
        onInput={(e)=>{seteducation(e.target.value)}}
        required=""
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Client Order 
      </label>
      <input
        type=""
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={client}
        onInput={(e)=>{setclient(e.target.value)}}
        required=""
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor=""
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Joining Date 
      </label>
      <input
        type="date"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={joining}
        required=""
        onInput={(e)=>{setjoining(e.target.value)}}
      />
    </div>
    {(level>0)?<><div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Trainee's Number 
      </label>
      <input
        type="number"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={number}
        required=""
        onInput={(e)=>{setnumber(e.target.value)}}
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Trainee's email 
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={mail}
        required=""
        onInput={(e)=>{setmail(e.target.value)}}
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Placement Centre 
      </label>
      <input
        type=""
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={placement}
        required=""
        onInput={(e)=>{setplacement(e.target.value)}}
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Placed 
      </label>
      <input
        type=""
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={placed}
        required=""
        onInput={(e)=>{setplaced(e.target.value)}}
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Address 
      </label>
      <input
        type=""
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={address}
        required=""
        onInput={(e)=>{setaddress(e.target.value)}}
      />
    </div>
    <div className='flex justify-center'>
    <Link to="/main">
    <button
      type="submit"
      onClick={submithandle}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
    </Link>
    </div></>:<div></div>}
  </form>
  </div></>
  )
}

export default Profile