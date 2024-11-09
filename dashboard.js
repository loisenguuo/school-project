let assets = []; // Array to hold products
let categories = []; // Array to hold categories

// Function to record a new item (product)
function recordItem() {
    const name = document.getElementById('item-name').value;
    const category = document.getElementById('item-category').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const value = parseFloat(document.getElementById('item-value').value);

    if (name && category && quantity && value) {
        createProduct(name, category, quantity, value);
        updateDashboard();
        clearFields();
    } else {
        alert('Please fill all fields');
    }
}

// Function to record a new category
function recordCategory() {
    const category = document.getElementById('new-category').value;

    if (category) {
        createCategory(category);
        updateDashboard();
        clearFields();
    } else {
        alert("Please fill the category");
    }
}

// Function to create a new category
function createCategory(category) {
    categories.push(category);
    console.log('Category added:', category);
}

// Function to create a new product
function createProduct(name, category, quantity, value) {
    const product = { name, category, quantity, value };
    assets.push(product);
    console.log('Product added:', product);
}

// Function to update the entire dashboard
function updateDashboard() {
    updateItemTable();
    updateCategoryList();
    updateTotalAssetValue();
}

// Function to update the displayed item table
function updateItemTable() {
    const assetsTable = document.getElementById('assets-table-body');
    assetsTable.innerHTML = ''; // Clear current table rows

    assets.forEach((asset) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${asset.name}</td>
            <td>${asset.category}</td>
            <td>${asset.quantity}</td>
            <td>$${asset.value.toFixed(2)}</td>
            <td>$${(asset.value * asset.quantity).toFixed(2)}</td>
        `;
        assetsTable.appendChild(row);
    });
}

// Function to update the displayed category list
function updateCategoryList() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = ''; // Clear current list

    categories.forEach((category) => {
        const li = document.createElement('li');
        li.textContent = `${category}`;
        categoryList.appendChild(li);
    });
}

// Function to calculate and display the total asset value
function updateTotalAssetValue() {
    const totalValue = assets.reduce((sum, asset) => sum + (asset.value * asset.quantity), 0);
    document.getElementById('total-asset-value').textContent = `Total Asset Value: $${totalValue.toFixed(2)}`;
}

// Function to clear input fields
function clearFields() {
    document.getElementById('item-form').reset();
    document.getElementById('category-form').reset();
}

// Event listeners for the buttons
document.getElementById('add-item-button').addEventListener('click', recordItem);
document.getElementById('add-category-button').addEventListener('click', recordCategory);
