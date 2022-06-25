import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
const Formulir = ({ handleSubmit, nama, handleChange, deskripsi, harga, id }) => {
  return (
    <div>
      <hr />
      <Row>
        <Col>
          <h5 className="text-center">{id ? 'Edit Data' : 'Tambah Data'}</h5>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Makanan/Minuman</Form.Label>
              <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control type="text" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Button className="mb-2 " variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
