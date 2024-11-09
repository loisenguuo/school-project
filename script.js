let assets = [];
console.log(assets);

// Function to record a new item
function recordItem() {
    const name = document.getElementById('item-name').value;
    const category = document.getElementById('item-category').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const value = parseFloat(document.getElementById('item-value').value);
    console.log(category, "food")

    if (name && category && quantity && value) {
        createProduct(name, category, quantity, value);
        updateItemList();
        clearFields();
    } else {
        alert('Please fill all fields');
    }
}
function recordCategory() {
    const category = document.getElementById('item-category').value;
    console.log(category,"size")

    if(category){
        createCategro(category);
        updateCategoryList()
        clearFields()
    }else{
        alert("Please fill the category")
    }

}

// Fuctio to create a ew category

function createCategro(category) {
    const product = {category};
    assets.push(product);
    console.log('Category added:', product);
}

// Function to create a new product and push it to the assets array
function createProduct(name, category, quantity, value) {
    const product = { name, category, quantity, value };
    assets.push(product);
    console.log('Product added:', product);
}

// Function to update the displayed item list
function updateItemList() {
    const assetsList = document.getElementById('assets-list');
    assetsList.innerHTML = ''; // Clear current list
    assets.forEach((asset, index) => {
        const li = document.createElement('li');
        li.textContent = `${asset.name} (${asset.category}) - Quantity: ${asset.quantity}, Value: $${asset.value.toFixed(2)}`;
        assetsList.appendChild(li);
    });
}
function updateCategoryList() {
    const assetsList = document.getElementById('category-list');
    assetsList.innerHTML = ''; // Clear current list
    assets.forEach((asset, index) => {
        const li = document.createElement('li');
        li.textContent = `(${asset.category})}`;
        assetsList.appendChild(li);
    });
}

// Function to clear input fields
function clearFields() {
    // document.getElementById('asset-form').reset();
    document.getElementById('category-form').reset();

}

// Event listener for the button

    // document.getElementById('add-item-button').addEventListener('click', recordItem);
    document.getElementById('add-category-button').addEventListener('click', recordCategory);
  