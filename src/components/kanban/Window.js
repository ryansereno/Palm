import React from "react";
import Modal from "react-modal";
import classes from "./ModalWindow.module.css"

Modal.setAppElement("#root");

const ModalWindow = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={classes.modal}
            overlayClassName={classes.overlay}
        >
            <div className={classes["close-btn-ctn"]}>
                <button className={classes["close-btn"]} onClick={onClose}>X</button>
            </div>
            <div>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <h2>Description</h2>
                <h2>Status</h2>
            </div>
        </Modal>
    );
};

export default ModalWindow;
