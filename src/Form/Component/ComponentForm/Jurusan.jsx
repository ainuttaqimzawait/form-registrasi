import React from "react";

const Jurusan = ({ id, onChange, checked, label }) => {
    return (
        <div className="form">
            <label htmlFor={id}> {label} </label>
            <br />
            <select id={id} name={id} checked={checked} onChange={e => onChange(e.target.value)}>
                <option>-- Pilih Jurusan --</option>
                <option>Aqidah Filsafat Islam</option>
                <option>Ilmu Alquran dan Tafsir</option>
                <option>Tasawuf dan Psikoterapi</option>
                <option>Ilmu Hadis</option>
                <option>Pendidikan Agama Islam</option>
                <option>Manajemen Bisnis Syariah</option>
            </select>
            <br />
        </div >
    )
}
export default Jurusan;