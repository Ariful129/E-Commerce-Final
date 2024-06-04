import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className=' bg-black  '>
     <footer class="flex flex-col space-y-10  p-10 justify-center mt-8 mb-1">

<nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
<Link to={"/"}><a class="hover:text-gray-900" href="#">Home</a></Link>
<Link to={"/"}><a class="hover:text-gray-900" href="#">About</a></Link>
<Link to={"/"}><a class="hover:text-gray-900" href="#">Services</a></Link>
<Link to={"/"}><a class="hover:text-gray-900" href="#">Media</a></Link>
<Link to={"/"}><a class="hover:text-gray-900" href="#">Gallery </a></Link>
    <Link to={"/contact"}><a class="hover:text-gray-900" href="#">Contact</a></Link>
</nav>

<div class="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p class="text-center  text-white font-medium">&copy; Copyright 2024 - All right reserved by Ariful Islam</p>
      </footer>
    </footer>
  )
}

export default Footer