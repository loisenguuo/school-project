// Sample data for assets
const assets = [
    { name: "Laptop", value: 1000, maintenanceDue: "2024-10-20", status: "active" },
    { name: "Projector", value: 500, maintenanceDue: "2024-10-15", status: "active" },
    { name: "Server", value: 3000, maintenanceDue: "2024-11-01", status: "under maintenance" },
    { name: "Old Computer", value: 200, maintenanceDue: "2024-10-10", status: "inactive" }
];

// Sample data for recent activities
const activities = [
    { action: "Added", assetName: "Laptop", date: "2024-10-01" },
    { action: "Updated", assetName: "Projector", date: "2024-10-10" },
    { action: "Deleted", assetName: "Old Laptop", date: "2024-09-30" }
];

// Function to render reports based on selected status
function renderReports(statusFilter = 'all') {
    const totalAssets = assets.length;
    const totalValue = assets.reduce((acc, asset) => acc + asset.value, 0);
    const maintenanceTableBody = document.getElementById('maintenanceTable').querySelector('tbody');
    const activityTableBody = document.getElementById('activityTable').querySelector('tbody');

    // Update total assets and value
    document.getElementById('totalAssets').innerText = totalAssets;
    document.getElementById('totalValue').innerText = totalValue.toFixed(2);

    // Clear existing table rows
    maintenanceTableBody.innerHTML = '';
    activityTableBody.innerHTML = '';

    // Render maintenance records based on selected status
    const filteredAssets = assets.filter(asset => statusFilter === 'all' || asset.status === statusFilter);

    filteredAssets.forEach(asset => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${asset.name}</td><td>${asset.maintenanceDue}</td><td>${asset.status}</td>`;
        maintenanceTableBody.appendChild(row);
    });

    // Render recent activity
    activities.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${activity.action}</td><td>${activity.assetName}</td><td>${activity.date}</td>`;
        activityTableBody.appendChild(row);
    });
}

// Event listener for filter button
document.getElementById('filterButton').addEventListener('click', () => {
    const statusFilter = document.getElementById('statusFilter').value;
    renderReports(statusFilter);
});

// Initial render
renderReports();

