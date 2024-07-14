import React, { useState } from "react";

function Modal({ id, head, body, handleClose }) {
	return (
		<div id={id || "modal"} className="popup-container">
			<div className="modal-content">
				<div className="header">
					<span onClick={handleClose} className="close-modal">
						&times;
					</span>
					<h2>{head ? head : "Header"}</h2>
				</div>
				<div className="body">{body ? body : "Body"}</div>
			</div>
		</div>
	);
}

export default Modal;
