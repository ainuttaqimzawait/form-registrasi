import React from "react";

const Gender = ({ id, label, type, checked, onChange }) => {
    return (
        <div className="form">
            <label htmlFor={id}> {label} </label>
            <br />
            <input id={id} type={type} name={id} checked={checked} value={"Laki-Laki"} onChange={e => onChange(e.target.value)} /> Laki-Laki
            <input id={id} type={type} name={id} checked={checked} value={"Perempuan"} onChange={e => onChange(e.target.value)} /> Perempuan
            <input id={id} type={type} name={id} checked={checked} value={"Lainnya"} onChange={e => onChange(e.target.value)} /> Lainnya
            <br />
        </div>
    )
}
export default Gender;