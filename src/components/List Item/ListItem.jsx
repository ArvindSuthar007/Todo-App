import { useState } from 'react';
import './ListItem.css';

export default function ListItem({ Inputobj, deleteItem, toggleMark}) {
    const [ isChecked, setIsChecked ] = useState(false);
    
    const handleCheckboxChange = () => {
        toggleMark(Inputobj.key);
    }

    const handleClick = () => {
        deleteItem(Inputobj);
    }

    return(
        <div className='listItem-container' key={Inputobj.key}>
            <span>{Inputobj.inputtext}</span>
            <div className='mark-button-container'>
                <input 
                    type='checkbox'
                    checked={Inputobj.mark}
                    onChange={handleCheckboxChange}
                />
                <button onClick={handleClick}>
                    delete
                </button>
            </div>
        </div>
    )
}