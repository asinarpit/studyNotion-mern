import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children, active, linkTo}) {
  return (
    <Link to={linkTo}>
        <div className={`text-center text-[13px] font-bold px-6 py-3 rounded-md hover:scale-95 transition-all duration-200 ${active ? "bg-yellow-50 text-black" : "bg-richblack-800 shadow-[inset_-2px_-2px_0_0_rgba(255,255,255,0.2)]"}`}>
            {children}
        </div>
    </Link>
  )
}
