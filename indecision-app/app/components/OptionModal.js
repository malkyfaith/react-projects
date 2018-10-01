
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <div>
            <Modal
                isOpen={!!props.selectedOption}
                contentLabel="Selected Option">
                <p>Selected Option</p>
                <h3>Selected Option</h3>
                {
                    props.selectedOption &&
                    <div>{props.selectedOption}</div>
                }
                <button onClick={props.closeModal}>Okay</button>
            </Modal>

        </div>
    )
};

export default OptionModal;