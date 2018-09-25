import React from 'react';
import {inject, observer} from 'mobx-react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

@inject('modal')
@observer class NewEntryModal extends React.Component {

  handleShow = () => {
    this.props.modal.show();
  };

  handleHide = () => {
    this.props.modal.hide();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>Trigger Modal</button>
        <Modal
          isOpen={this.props.modal.visible}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleHide}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default NewEntryModal;
