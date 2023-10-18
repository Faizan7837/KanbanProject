import React, { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel";
import KanbanCard from "./KanbanCard";

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [viewState, setViewState] = useState({
    grouping: "status", // Default grouping by status
    sorting: "priority" // Default sorting by priority
  });

  useEffect(() => {
    // Fetch data from the API and update the 'tickets' state
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        if (response.ok) {
          const data = await response.json();
          setTickets(data.tickets);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to group and sort tickets based on viewState

  return (
    <div className="kanban-board">
      <h1>Kanban Board</h1>
      <ControlPanel viewState={viewState} setViewState={setViewState} />
      <div className="kanban-cards">
        {tickets && tickets.length > 0
          ? tickets.map((ticket) => (
              <KanbanCard key={ticket.id} ticket={ticket} />
            ))
          : null}
      </div>
    </div>
  );
}

export default KanbanBoard;
