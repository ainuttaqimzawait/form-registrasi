import React from "react";

const Input = ({ id, label, type, value, onChange }) => {
    return (
        <div className="form">
            <label htmlFor={id}> {label} </label>
            <br />
            <input id={id} type={type} name={id} placeholder={id} value={value} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}
export default Input;