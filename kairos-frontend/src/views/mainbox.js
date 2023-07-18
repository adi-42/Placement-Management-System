import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Mainbox = () => {
    const [flag,setflag]=useState(false);
    const [flag1,setflag1]=useState(false);
    const [flag2,setflag2]=useState(false);
    const [search,setsearch]=useState("");
    const [cat1,setcat1]=useState("Training Center");
    const [cat2,setcat2]=useState("Client Order");
    const [cat3,setcat3]=useState("Placed/Unplaced");
    const submithandle=(e)=>{
       let traineeid=e.target.value;
       if(traineeid)
       localStorage.setItem("Trainee",traineeid);
    }
    const [elements,setelement]=useState([]);
    const [email,setemail]=useState('');
    const [level,setlevel]=useState(0);
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:8000/auth/login/success", { withCredentials: true });
        const email1 = response.data.user.email;
        const level1 = response.data.user.level;
        localStorage.setItem("email",email1);
        localStorage.setItem("level",level1);
        if(email1!="")
        setemail(email1);
        if(level!=-1) 
        setlevel(level1);
        const displayResponse = await axios.get(`http://localhost:8000/display?level=${level1}`);
        const arr = displayResponse.data;
        setelement(arr);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };
    // for(let i=0; i<10; i++)
    // elements.push(<Userpanel data={data}/>);
    const arr=[];
    useEffect(()=>{
      data();
      // if(email)
      
      // if(level)
      // localStorage.setItem("level",level);
      //console.log(email);
      // console.log(level);
      
    
    // console.log("H");
    // console.log(elements);
  },[]);
  return (
    <div>
        <div className='flex justify-around'>
        <Navbar/><div className="p-10">
  <div className=" inline-block relative p-6">
    <button onClick={()=>{setflag(!flag)}} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span className="mr-1">{cat1}</span>
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
      </svg>
    </button>
    {flag?<ul className="dropdown-menu absolute  text-gray-700 pt-1">
      <li className="" onClick={()=>{setcat1("Pune"); setflag(false);}}>
       Pune
      </li>
      <li className="" onClick={()=>{setcat1("Bangalore"); setflag(false);}}>
       Bangalore
      </li>
      <li className="" onClick={()=>{setcat1("Vijaypur"); setflag(false);}}>
       Vijaypur
      </li>
      <li className="" onClick={()=>{setcat1("Mysore"); setflag(false);}}>
       Mysore
      </li>
      <li className="" onClick={()=>{setcat1("Training Center"); setflag(false);}}>
       All
      </li>
    </ul>:<></>}
  </div>
  <div className=" inline-block relative p-6">
    <button onClick={()=>{setflag2(!flag2)}} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span className="mr-1">{cat2}</span>
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
      </svg>
    </button>
    {flag2?<ul className="dropdown-menu absolute  text-gray-700 pt-1">
      <li className="" onClick={()=>{setcat2("Wipro"); setflag2(false);}}>
       Wipro
      </li>
      <li className="" onClick={()=>{setcat2("GE Healthcare");setflag2(false);}}>
       GE Healthcare
      </li>
      <li className="" onClick={()=>{setcat2("Samarth");setflag2(false);}}>
       Samarth
      </li>
      <li className="" onClick={()=>{setcat2("ITC");setflag2(false);}}>
       ITC
      </li>
      <li className="" onClick={()=>{setcat2("HDFC");setflag2(false);}}>
       HDFC
      </li>
      <li className="" onClick={()=>{setcat2("Client Order");setflag2(false);}}>
       All
      </li>
    </ul>:<></>}
  </div>
  {level>0?<div className=" inline-block relative p-6">
    <button onClick={()=>{setflag1(!flag1)}} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span className="mr-1">{cat3}</span>
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
      </svg>
    </button>
    {flag1?<ul className="dropdown-menu absolute  text-gray-700 pt-1">
      <li className="" onClick={()=>{setcat3("Placed"); setflag1(false)}}>
       Placed
      </li>
      <li className="" onClick={()=>{setcat3("Unplaced"); setflag1(false)}}>
       Unplaced
      </li>
      <li className="" onClick={()=>{setcat3("Placed/Unplaced"); setflag1(false)}}>
       All
      </li>
    </ul>:<></>}
  </div>:<p></p>}
</div>
</div>
        
<>
  {/* component */}
  <div className="text-gray-900 bg-gray-200">
    <div className="p-4 flex justify-around">

      
      <form>
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Trainees"
      required=""
      onChange={(e)=>{setsearch(e.target.value)}}
    />
  </div>
</form>

      {(level>0)?<Link to="/profile">
      <button
      value="-1"
  type="button" onClick={submithandle}
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
Add
</button></Link>:<p></p>}
    </div>
    
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Name</th>
            <th className="text-left p-3 px-5">Training Center</th>
            <th className="text-left p-3 px-5">Client Order</th>
            <th className="text-left p-3 px-5">Placed</th>
            <th />
          </tr>
          
          {
          elements.length>0&&
          elements.filter((el)=>{
            return cat2==="Client Order"?el:el["Client Order"].toLowerCase().match(cat2.toLowerCase());
          })
          .filter((el)=>{
            return cat3==="Placed/Unplaced"?el:(cat3==="Placed"?el.Placed.toLowerCase().match("yes"):el.Placed.toLowerCase().match("no"));
          })
          .filter((el)=>{
            return cat1==="Training Center"?el:el["Training Centre"].toLowerCase().match(cat1.toLowerCase());
          }).filter((el)=>{
            return search.toLowerCase()===''?el:el.Name.toLowerCase().includes(search);
          }).map((el)=>{
            return  <tr onChange={()=>{}} className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              {el.Name}
      
            </td>
            <td className="p-3 px-5">
              {el["Training Centre"]}
            </td>
            <td className="p-3 px-5">
              {el["Client Order"]}
            </td>
            <td className="p-3 px-5">
              {el.Placed}
            </td>
            <td className="p-3 px-5 flex justify-end">
            <Link to="/profile">
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={submithandle}
                value={el["Unique ID Number"]}
              >
               Edit
              </button>
              </Link> 
            </td>
          </tr>
          })}
         
          
        </tbody>
      </table>
    </div>
  </div>
</>
         {level==-1?<p className='text-center font-extrabold text-5xl w-auto'>No access</p>:<p></p>}
  </div>
  )
}

export default Mainbox