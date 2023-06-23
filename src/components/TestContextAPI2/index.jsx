import React, { useContext } from 'react'
import "./style.scss"
import MyContext from '../../modules/context_api/MyContext'

export default function TestContextAPI2() {
  const contextConsumer = useContext(MyContext)
  return (
      <div>
          Test2 <br />

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
