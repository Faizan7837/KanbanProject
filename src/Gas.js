function groupAndSortTickets(tickets, viewState) {
  const { grouping, sorting } = viewState;

  // Create a copy of the original tickets array to avoid mutating it
  const groupedAndSortedTickets = [...tickets];

  // Grouping
  switch (grouping) {
    case "status":
      // Group by status
      groupedAndSortedTickets.sort((a, b) => a.status.localeCompare(b.status));
      break;
    case "user":
      // Group by user
      groupedAndSortedTickets.sort((a, b) => a.user.localeCompare(b.user));
      break;
    case "priority":
      // Group by priority (convert priority to a numerical value)
      groupedAndSortedTickets.sort((a, b) => a.priority - b.priority);
      break;
    default:
      break;
  }

  // Sorting
  switch (sorting) {
    case "priority":
      // Sort by priority in descending order
      groupedAndSortedTickets.sort((a, b) => b.priority - a.priority);
      break;
    case "title":
      // Sort by title in ascending order
      groupedAndSortedTickets.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  return groupedAndSortedTickets;
}
