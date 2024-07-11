import { useState } from "react";
import data from './data';
import './styles.css';


export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setenableMultiSelection] = useState(false);
    const [multiple, setmultiple] = useState([]);
    
    function HandleSingleSelection(currectID){
        //console.log(currectID);
        setSelected(currectID === selected ? null : currectID);
    }

    function HandleMultiSelection(currectID){
        
    }

    return <div className="wrapper">
            <button onClick={() => setenableMultiSelection(!enableMultiSelection)} className="mutiselectbtn">Enable Multi Selection</button>
            <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem=> <div className="item">
                    <div onClick={enableMultiSelection ? ()=>HandleMultiSelection(dataItem.id) : ()=>HandleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className="content">{dataItem.answer}</div>
                        : null
                    }
                </div>)
                : <div>No Data Available!</div>
            }
        </div>
    </div>;
}