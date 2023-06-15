import React from 'react'
import "./style.scss"
import { Link, Outlet } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="side_bar_wrapper">

            <div className='side_bar'>
                <ul>
                    <li>
                        <Link to={"/"} >landing</Link>
                    </li>
                    <li>

                        <Link to={"/user"} >Text Context 1</Link>
                    </li>
                    <li>
                        <Link to={"/user/test_ctx2"} >Text Context 2</Link>
                    </li>
                </ul>
            </div>

            <div className="content_blk">
                <Outlet />
            </div>
        </div>
    )
}
