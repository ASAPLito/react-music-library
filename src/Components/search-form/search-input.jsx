import { useState } from 'react';

const SearchInput = (props) => {
    

    const handleChange = (e) => {
        const { value } = e.target; //e.target is input element
        props.setInput(value);
    }

    return (
        <label>
            You Wrote {props.input}
            <input type="search" placeholder="Search" value={props.input} onChange={handleChange}/>
        </label>
    )
}

export default SearchInput;