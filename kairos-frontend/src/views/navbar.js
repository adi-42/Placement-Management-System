import React, { Component } from 'react';
import Logo from '../images/kairos.jpeg'
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="shortcut icon" href="logo.jpg" type="image/x-icon" />
        <title>Kairos Integrated Solution Pvt Ltd</title>
        <header className="text-gray-600 body-font ">
          <Link to="/login"><div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className="w-28 border-solid border-black border-2 rounded-full" src={Logo} alt="" />
              <span className="ml-3 text-2xl">Kairos Integrated Solution Pvt Ltd</span>
            </a>
          </div>
          </Link>
        </header>
            </div>
        );
    }
}

export default Navbar;