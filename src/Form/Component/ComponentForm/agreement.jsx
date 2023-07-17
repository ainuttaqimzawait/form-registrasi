import React from "react";

const Agreement = ({ id, statement, type, checked, onChange }) => {
    return (
        <div className="form" >
            <input id={id} type={type} name={id} checked={checked} onChange={e => onChange(e.target.value)} />{statement}
            < br />
        </div>
    )
}
export default Agreement;