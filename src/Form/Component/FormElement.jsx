import React from "react";
import * as Validator from 'validatorjs';
import Input from "./ComponentForm/Input";
import ShowErrors from "./ShowError";
import Gender from "./ComponentForm/Gender";
import Jurusan from "./ComponentForm/Jurusan";
import Alamat from "./ComponentForm/Alamat";
import Agreement from "./ComponentForm/agreement";



export default class FormElement extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        gender: '',
        jurusan: '',
        alamat: '',
        member: false,
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username, email, password, gender, jurusan, alamat, member } = this.state;
        let data = {
            username, email, password, gender, jurusan, alamat, member
        };

        let rules = {
            username: 'required',
            email: 'required|email',
            password: 'min:8|required',
            gender: 'required',
            jurusan: 'required',
            alamat: 'required',
            member: 'accepted'
        };
        let validation = new Validator(data, rules);
        validation.passes();
        console.log(validation.passes());
        this.setState({
            errors: [
                ...validation.errors.get('username'),
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
                ...validation.errors.get('gender'),
                ...validation.errors.get('jurusan'),
                ...validation.errors.get('alamat'),
                ...validation.errors.get('member'),
            ]
        });

        if (validation.passes() === true) {
            alert(`
            username: ${this.state.username},
            email: ${this.state.email},
            password: ${this.state.password},
            gender: ${this.state.gender},
            jurusan: ${this.state.jurusan},
            alamat: ${this.state.alamat},
            member: ${this.state.member ? 'YES' : 'NO'}
            `);

            this.setState({
                username: '',
                email: '',
                password: '',
                gender: '',
                jurusan: '',
                alamat: '',
                member: false,
                errors: []
            })
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Buat Akun Baru</h2>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }

                <Input id="username" type="text" label="Username" value={this.state.username} onChange={value => this.setState({ username: value })} />
                <Input id="email" type="email" label="Email" value={this.state.email} onChange={value => this.setState({ email: value })} />
                <Input id="password" type="password" label="Password" value={this.state.password} onChange={value => this.setState({ password: value })} />
                <Gender id="gender" type="radio" label="Jenis Kelamin" checked={this.state.value} onChange={value => this.setState({ gender: value })} />
                <Jurusan id="jurusan" label="Jurusan" checked={this.state.jurusan} onChange={value => this.setState({ jurusan: value })} />
                <Alamat id="alamat" type="textarea" label="Alamat" value={this.state.alamat} onChange={value => this.setState({ alamat: value })} />
                <Agreement id="member" type="checkbox" statement="Saya Setuju dengan Syarat dan Ketentuan" checked={this.state.member} onChange={value => this.setState({ member: value })} />

                <div className="form">
                    <button type="submit" >Buat Akun</button>
                </div>
            </form>
        )
    }
}