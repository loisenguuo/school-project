// Sample data for upcoming maintenance
const upcomingMaintenance = [
    { date: "2024-10-16", asset: "Air Conditioner", type: "Routine Check", assignedTo: "John" },
    { date: "2024-10-20", asset: "Elevator", type: "Inspection", assignedTo: "Anna" },
];

// Populate the table with data
const maintenanceTable = document.getElementById('upcoming-maintenance');
upcomingMaintenance.forEach(maintenance => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${maintenance.date}</td><td>${maintenance.asset}</td><td>${maintenance.type}</td><td>${maintenance.assignedTo}</td>`;
    maintenanceTable.appendChild(row);
});
