import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


//GET THE DATA FROM THE STORE
// export default function App() {
//     let data = useSelector(state => state.data);
//     let dispatch = useDispatch();
//     return (
//         <>
//             <button onClick={() => { dispatch({ type: 'GET_DATA' }) }}>Click me to get the data</button>
//             <div> {data.map((element, index) => <h1 key={index}>{element.text}</h1>)}
//             </div>
//         </>
//     )
// }

export default function App() {
    let [value, setValue] = useState("");
    let [update, setUpdate] = useState(false);
    let [Index, setIndex] = useState(-1);

    let data = useSelector(state => state.data);
    let dispatch = useDispatch();
    let changeHandler = (e) => {
        setValue(e.target.value)
    }
    return <>
        <button className='btn btn-primary' onClick={() => { dispatch({ type: 'GET_DATA' }) }}>GET DATA</button>
        <input className='form-control' value={value} onChange={changeHandler} />
        <input type={"button"} value="ADD TEXT"
            onClick={() => { dispatch({ type: update ? 'UPDATE_TEXT' : 'ADD_TEXT', value, Index }); setValue(''); setUpdate(false); setIndex(-1) }}
        />
        <ul>
            {data.map((e, index) =>
                <li>{e.text}
                    <button
                        onClick={() => { dispatch({ type: 'DELETE', index }) }}>
                        Delete
                    </button>
                    <button onClick={() => { setValue(e.text); setUpdate(true); setIndex(index) }}>Edit</button>
                </li>)}
        </ul>
    </>
}
