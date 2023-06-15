import React from 'react'
import styles from "./style.module.scss"
import { useNavigate,Link } from "react-router-dom";
export default function Landing() {

    const navigate=useNavigate()

  return (
    <div>
        <button onClick={()=>navigate("/user",{replace:true})}>
            Login
        </button>

        <Link to={"/user"} replace={true}>Login</Link>

    </div>
  )
}
