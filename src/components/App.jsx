import React, { useState } from "react";
import Modal from "./Modal";

function App() {
	const [showModalPopup, setShowModalPopup] = useState(false);

	function handleModalPopup() {
		setShowModalPopup(!showModalPopup);
	}

	function handleClose() {
		setShowModalPopup(false);
	}

	// const data = [
	// 	{
	// 		id: 1,
	// 		head: "Lionel Messi",
	// 		body: "Lionel Messi is the greatest football player I have ever watched",
	// 	},
	// 	{
	// 		id: 2,
	// 		head: "Taylor Swift",
	// 		body: "Taylor Swift is the singer I always look forward to listen to",
	// 	},
	// 	{
	// 		id: 3,
	// 		head: "Eichiro Oda",
	// 		body: "Eichiro Oda Sensei is the mangaka of One Piece which absolutely love raving about. As Whitebeard once stated,'ONE PIECE IS REAL'",
	// 	},
	// ];

	return (
		<div className="app-container">
			<button
				style={{ visibility: showModalPopup ? "hidden" : "visible" }}
				className="popup-btn"
				onClick={handleModalPopup}>
				{showModalPopup ? "Hide Modal" : "Show Modal"}
			</button>
			{showModalPopup && (
				<Modal handleClose={handleClose} body={"World"} />
			)}
		</div>
	);
}

export default App;
