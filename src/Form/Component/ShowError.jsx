import React from "react";

const ShowErrors = ({ errors }) => {
    const abc = () => console.log("halo");
    abc();
    return (
        <ul style={{ color: 'red' }}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
export default ShowErrors;