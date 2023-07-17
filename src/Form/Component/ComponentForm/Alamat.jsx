import React from "react";

const Alamat = ({ id, label, type, value, onChange }) => {
    return (
        <div className="form">
            <label htmlFor={id}> {label} </label>
            <br />
            <textarea id={id} type={type} name={id} value={value} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}
export default Alamat;