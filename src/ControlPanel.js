import React from "react";

function ControlPanel({ viewState, setViewState }) {
  const handleGroupingChange = (e) => {
    const grouping = e.target.value;
    setViewState({ ...viewState, grouping });
  };

  const handleSortingChange = (e) => {
    const sorting = e.target.value;
    setViewState({ ...viewState, sorting });
  };

  return (
    <div className="control-panel">
      <div>
        <label>Group by:</label>
        <select value={viewState.grouping} onChange={handleGroupingChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort by:</label>
        <select value={viewState.sorting} onChange={handleSortingChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default ControlPanel;
