// import React from 'react'

import { Link } from "react-router-dom"

function Buttons({children, disabled, to, type}) {
  // const className = "bg-blue-400 uppercase font-semibold text-stone-800 py-3 px-4 mt-4 inline-block tracking-wide rounded-full hover:bg-blue-300 transition-colors duration-300 focus-outline-none focus:ring-blue-300 focus:ring focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 "

  const base =   "bg-blue-400 uppercase font-semibold text-stone-800 py-3 px-4 mt-4 inline-block tracking-wide rounded-full hover:bg-blue-300 transition-colors duration-300 focus-outline-none focus:ring-blue-300 focus:ring focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const style ={
    primary:base+ " px-4 py-3 sm:px-6 sm:py-4",
    small:base + " py-2 px-4 md:px-5 md:py-2.5 text-xs", 
    secondary:"border-2 border-stone-300 uppercase font-semibold text-stone-400 py-3 px-3 mt-3.5 inline-block tracking-wide rounded-full hover:bg-stone-500 transition-colors duration-300 focus-outline-none focus:ring-stone-300 focus:ring focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4    px-3.5 py-2.5 sm:px-5.5 sm:py-3   "
  }
  if(to)
  return<Link to={to} className={style[type]}>{children}</Link>
  return (
    <button disabled={disabled} className={style[type]}>{children}</button>
  )
}

export default Buttons
