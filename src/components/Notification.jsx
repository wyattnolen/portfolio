// Notification.js
import React from "react";

const Notification = ({ message, messageType }) => {
	if (!message) return null;

	const notificationStyle = {
		color: messageType === "success" ? "green" : "red",
		background: "lightgrey",
		fontSize: 20,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	};

	return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
