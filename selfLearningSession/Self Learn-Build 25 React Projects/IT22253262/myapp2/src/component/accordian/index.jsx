import { useState } from "react"
import data from './data'
export default function Accordian(){

    const [selected, setSelected] = useState(null);

    function HandleSingleSelection(currectID){
        //console.log(currectID);

        //// Samecode longway
        // currectID === selected ? 
        // setSelected(null)
        // :
        // setSelected(currectID);

        // Samecode short way
        setSelected(currectID === selected ? null : currectID);
    }

    return <div className="wrapper">
            <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem=> <div className="item">
                    <div onClick={()=>HandleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className="content">{dataItem.answer}</div>
                        : null
                    }
                </div>)
                : <div>No Data Available</div>
            }
        </div>
    </div>;
}