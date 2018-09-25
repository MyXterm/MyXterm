import {observable, action} from 'mobx';

class Modal {
  @observable visible = false;

  @action show() {
    this.visible = true;
  }

  @action hide() {
    this.visible = false;
  }
}

export default Modal;
