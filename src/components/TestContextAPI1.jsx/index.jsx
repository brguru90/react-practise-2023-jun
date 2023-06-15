import React, { useContext } from 'react'
import "./style.scss"
import MyContext from '../../modules/context_api/MyContext'

export default function TestContextAPI1() {
    const contextConsumer = useContext(MyContext)
    return (
        <div>
            Test1 <br />

            <input
                type='text'
                value={contextConsumer?.state?.value}
                onChange={e=>{
                    contextConsumer.setState(prevState=>({
                        ...prevState,
                        value:e?.target?.value,
                    }))
                }}

            />


        </div>
    )
}
