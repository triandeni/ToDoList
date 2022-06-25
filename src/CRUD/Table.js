import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>No</th>
          <th>Makanan/Minuman</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makan, index) => {
          return (
            <tr key={index} className="text-center">
              <td>{index + 1}</td>
              <td>{makan.nama}</td>
              <td>{makan.deskripsi}</td>
              <td>{makan.harga}</td>
              <td>
                <button className="btn btn-warning" onClick={() => editData(makan.id)}>
                  Edit
                </button>
                <button className="btn btn-danger ms-2" onClick={() => hapusData(makan.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
