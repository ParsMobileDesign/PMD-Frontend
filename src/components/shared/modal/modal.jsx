import React from "react";
import ReactDOM from "react-dom";

import BackDrop from "./back-drop";
import "./modal.scss";

const Modal = (props) => {
  const modal = (
    <React.Fragment>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-header">Header</div>
            <div className="modal-body">Body</div>
            <div className="modal-footer">Footer</div>
          </div>
        </div>
      <BackDrop clickHandler={props.closeHandler} />
    </React.Fragment>
  );
  if (props.show)
    return ReactDOM.createPortal(modal, document.getElementById("modal-hook"));
  else return null;
};
export default Modal;
