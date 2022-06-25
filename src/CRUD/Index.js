import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabel from './Table';
import Formulir from './Formulir';
import Footer from './Footer';

export default class CRUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === '') {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananYangSelainPilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filtermakanan) => {
          return filtermakanan;
        });
      this.setState({
        makanans: [
          ...makananYangSelainPilih,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }
    this.setState({
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    });
  };

  editData = (id) => {
    const makananYangPilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filtermakanan) => {
        return filtermakanan;
      });

    this.setState({
      nama: makananYangPilih[0].nama,
      deskripsi: makananYangPilih[0].deskripsi,
      harga: makananYangPilih[0].harga,
      id: makananYangPilih[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filtermakanan) => {
        return filtermakanan;
      });

    this.setState({
      makanans: makananBaru,
    });
  };

  render() {
    return (
      <div className="Row">
        <NavbarComponent />

        <div class="row p-4">
          <div class="col-md-3 mt-3  p-4 border-rounded border bg-body ">
            <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
          <div class="col-md-9 mt-3 p-5 border bg-light">
            <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
