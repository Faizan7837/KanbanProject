import React from "react";
import "./App.css";
function KanbanCard({ ticket }) {
  return (
    <div className="kanban-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>UserID: {ticket.userId}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
}

export default KanbanCard;
