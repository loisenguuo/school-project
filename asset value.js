let assets = []; // Array to hold products
let categories = []; // Array to hold categories
console.log(assets);

// Function to record a new item (product)
function recordItem() {
    const name = document.getElementById('item-name').value;
    const category = document.getElementById('item-category').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const value = parseFloat(document.getElementById('item-value').value);

    if (name && category && quantity && value) {
        createProduct(name, category, quantity, value);
        updateItemList();
        updateTotalAssetValue(); // Update total value whenever a new item is added
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
        updateCategoryList();
        clearFields();
    } else {
        alert("Please fill the category");
    }
}

// Function to create a new category and push it to the categories array
function createCategory(category) {
    categories.push(category);
    console.log('Category added:', category);
}

// Function to create a new product and push it to the assets array
function createProduct(name, category, quantity, value) {
    const product = { name, category, quantity, value };
    assets.push(product);
    console.log('Product added:', product);
}

// Function to update the displayed item list (overview of all products)
function updateItemList() {
    const assetsList = document.getElementById('assets-list');
    assetsList.innerHTML = ''; // Clear current list

    assets.forEach((asset) => {
        const li = document.createElement('li');
        li.textContent = `${asset.name} (${asset.category}) - Quantity: ${asset.quantity}, Value: $${asset.value.toFixed(2)}`;
        assetsList.appendChild(li);
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
