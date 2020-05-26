import React from 'react';

const Form = (props) =>
{
    const {onInputChange , onSearchClick , search} = props;
    return(
        <div>
            <h1>Form</h1>
            <input type="text" name="weather" onChange={onInputChange} value={search } placeholder={search}/>
            <button onClick={onSearchClick}>Search</button> 
        </div>
    );
}

export default Form;