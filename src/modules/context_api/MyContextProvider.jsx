import React, { useState } from 'react'
import MyContext from './MyContext'

export default function MyContextProvider(props) {
    const [state, setState] = useState(props?.initialState || {})

    return (
        <MyContext.Provider
            value={{ state, setState }}
        >
            {props.children}

        </MyContext.Provider>
    )
}
