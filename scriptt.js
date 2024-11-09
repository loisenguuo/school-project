// script.js

let assets = [];
let categories = [];

// Main function to initialize page-specific functionality
function initializePage() {
    const pageTitle = document.title;  // Use each page's title to detect current page
    
    switch (pageTitle) {
        case "Dashboard":
            loadDashboard();
            break;
        case "Login":
            loadLogin();
            break;
        case "Record New Asset":
            loadRecordPage();
            break;
        case "Reports":
            loadReports();
            break;
        case "Delete Item":
            loadDeletePage();
            break;
        default:
            console.log("Page not recognized for specific functionality");
    }
}

// Dashboard Page Setup
function loadDashboard() {
    console.log("Dashboard loaded");
    // Dashboard-specific functionality here
}

// Login Page Setup
function loadLogin() {
    console.log("Login page loaded");
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Attempting login with", username, password);
    });
}

// Record New Asset Page Setup
function loadRecordPage() {
    console.log("Record page loaded");
    const recordForm = document.getElementById("record-form");
    recordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("item-name").value;
        const category = document.getElementById("item-category").value;
        const quantity = parseInt(document.getElementById("item-quantity").value);
        const value = parseFloat(document.getElementById("item-value").value);
        recordItem(name, category, quantity, value);
    });
}

// Reports Page Setup
function loadReports() {
    console.log("Reports page loaded");
    const viewTotalButton = document.getElementById("view-total-value");
    if (viewTotalButton) {
        viewTotalButton.addEventListener("click", updateTotalAssetValue);
    }
}

// Delete Item Page Setup
function loadDeletePage() {
    console.log("Delete page loaded");
    const deleteForm = document.getElementById("delete-form");
    deleteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("delete-item-name").value;
        deleteItem(name);
    });
}

// Core Functions
function recordItem(name, category, quantity, value) {
    if (name && category && quantity && value) {
        const product = { name, category, quantity, value };
        assets.push(product);
        console.log("Product added:", product);
        updateTotalAssetValue();
    } else {
        alert("Please fill all fields");
    }
}

function updateTotalAssetValue() {
    const totalValue = assets.reduce((sum, asset) => sum + (asset.value * asset.quantity), 0);
    console.log(`Total Asset Value: $${totalValue.toFixed(2)}`);
}

function deleteItem(name) {
    const index = assets.findIndex(asset => asset.name === name);
    if (index !== -1) {
        assets.splice(index, 1);
        console.log(`${name} deleted successfully`);
    } else {
        console.log("Item not found");
    }
}

// Initialize the appropriate page on load
document.addEventListener("DOMContentLoaded", initializePage);
