import React,{useState} from 'react'

function Dropdown({title,item=[],multiselect = false}) {

    const [open ,setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggele =()=> setOpen(!open);

    function handleOnClick(item){}

    return (
        <div className="dd-wrapper">
            <div 
                tabIndex={0} 
                className="dd-header" 
                role="button" 
                onKeyPress={()=> toggele(!open)}
                onClick={()=> toggele(!open)}>
            
                <div className="dd-header_title">
                    <p className="dd-header_title--bold">{title}</p>

                </div>
                <div className='dd-header_action'>
                    <p>{open ? "Close" : "Open"}</p>
                </div>
            </div>
            <ul className = "dd-list">
                {item.map(item=>(
                    <li className="dd-list-item" key={item.id}>
                        <button type="button" onClick={()=>handleOnClick(item)}>
                            <span>{item.value}</span>
                            <span>Selected...</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown
