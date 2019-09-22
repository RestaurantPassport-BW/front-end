import React, { useState } from 'react';
import {Button, Modal } from "react-bootstrap"

function EditUserCard() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="link" onClick={handleShow}>
            Edit Photo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose A New File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="file"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="link" onClick={handleClose}>Close</Button>
                    <Button variant="link" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditUserCard
