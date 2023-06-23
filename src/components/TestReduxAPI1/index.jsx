import React from "react";
import "./style.scss"
import { set_data, reset_state, update_state } from "../../modules/redux_features/reducer_1"
import { useDispatch, useSelector, useStore } from "react-redux";


export default function TestReduxAPI1() {

    const store=useStore()
    const dispatch = useDispatch()
    const allState = useSelector(state => state)
    const name = useSelector(state => state?.state_1?.name)
    const occupation = useSelector(state => state?.state_1?.occupation)


    return (
        <div>
            <h1>
                Test Redux 1
            </h1>

            <div>
                <div>
                    <label for="name"> name: </label>
                    <input type="text" value={name} id="name"
                        onChange={(e) => {
                            dispatch(set_data({
                                name: e.target.value,
                                occupation:store.getState()?.state_1?.occupation
                            }))
                        }}
                    />
                </div>
                <div>
                    <label for="occupation"> occupation: </label>
                    <input type="text" value={occupation} id="occupation"
                        onChange={(e) => {
                            dispatch(set_data({
                                name: store.getState()?.state_1?.name,
                                occupation: e.target.value,
                            }))
                        }}
                    />
                </div>
            </div>

            {JSON.stringify(allState)}

        </div>
    )
}
