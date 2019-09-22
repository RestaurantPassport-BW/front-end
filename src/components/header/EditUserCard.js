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
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="link" onClick={handleClose}>
                Close
                </Button>
                <Button variant="link" onClick={handleClose}>
                Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditUserCard
