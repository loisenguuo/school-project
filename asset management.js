<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asset Management</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            width: 90%;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 20px;
            background-color: #4CAF50;
            color: white;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        input, select {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
        }

        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            margin-right: 10px;
        }

        button:hover {
            background-color: #45a049;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }

        th {
            background-color: #f4f4f4;
            text-align: left;
        }

        .admin-actions {
            display: inline-block;
            margin-top: 15px;
        }

        .admin-actions button {
            background-color: #f44336;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <h1>Asset Management</h1>
        </div>

        <h3>Record New Item</h3>
        <div class="form-group">
            <label for="item-name">Item Name:</label>
            <input type="text" id="item-name" placeholder="Enter item name">
        </div>
        <div class="form-group">
            <label for="item-category">Category:</label>
            <input type="text" id="item-category" placeholder="Enter item category">
        </div>
        <div class="form-group">
            <label for="item-quantity">Quantity:</label>
            <input type="number" id="item-quantity" placeholder="Enter quantity">
        </div>
        <div class="form-group">
            <label for="item-value">Value:</label>
            <input type="number" id="item-value" placeholder="Enter item value">
        </div>
        <button onclick="recordItem()">Record Item</button>

        <h3>Receive or Issue Item</h3>
        <div class="form-group">
            <label for="select-item">Select Item:</label>
            <select id="select-item">
                <option value="">--Select Item--</option>
            </select>
        </div>
        <div class="form-group">
            <label for="update-quantity">Quantity to Receive/Issue:</label>
            <input type="number" id="update-quantity" placeholder="Enter quantity">
        </div>
        <button onclick="receiveItem()">Receive Item</button>
        <button onclick="issueItem()">Issue Item</button>

        <h3>Update or Delete Item</h3>
        <div class="form-group">
            <label for="update-item-name">Update Item Name:</label>
            <input type="text" id="update-item-name" placeholder="Enter new item name">
        </div>
        <button onclick="updateItem()">Update Item</button>

        <div class="admin-actions">
            <button onclick="deleteItem()">Delete Item (Admin)</button>
        </div>

        <h3>Item List</h3>
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody id="item-list">
                <!-- Data will be populated dynamically -->
            </tbody>
        </table>
    </div>

    <script>
        // Array to store the assets
        let assets = [];
        console.log(assets)

        // Function to record a new item
        function recordItem() {
            const name = document.getElementById('item-name').value;
            const category = document.getElementById('item-category').value;
            const quantity = parseInt(document.getElementById('item-quantity').value);
            const value = parseFloat(document.getElementById('item-value').value);

            
            
                // updateItemList();
                // updateSelectOptions();
                // clearFields();
            } else {
                alert('Please fill all fields');
            }
        }
        function createProduct(){

        }
{/* 
        // Function to update item list display
        function updateItemList() {
            const itemList = document.getElementById('item-list');
            itemList.innerHTML = ''; // Clear existing rows

            assets.forEach(asset => {
                const row = document.createElement('tr');
                row.innerHTML = <td>${asset.name}</td><td>${asset.category}</td><td>${asset.quantity}</td><td>$${asset.value}</td>;
                itemList.appendChild(row);
            });
        }

        // Function to update the options in the select dropdown
        function updateSelectOptions() {
            const select = document.getElementById('select-item');
            select.innerHTML = '<option value="">--Select Item--</option>'; // Reset options

            assets.forEach((asset, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.text = asset.name;
                select.appendChild(option);
            });
        }

        // Function to receive an item (increase quantity)
        function receiveItem() {
            const selectedIndex = document.getElementById('select-item').value;
            const quantityToAdd = parseInt(document.getElementById('update-quantity').value);

            if (selectedIndex !== '' && quantityToAdd > 0) {
                assets[selectedIndex].quantity += quantityToAdd;
                updateItemList();
            } else {
                alert('Select an item and enter a valid quantity.');
            }
        }

        // Function to issue an item (decrease quantity)
        function issueItem() {
            const selectedIndex = document.getElementById('select-item').value;
            const quantityToIssue = parseInt(document.getElementById('update-quantity').value);

            if (selectedIndex !== '' && quantityToIssue > 0 && assets[selectedIndex].quantity >= quantityToIssue) {
                assets[selectedIndex].quantity -= quantityToIssue;
                updateItemList();
            } else {
                alert('Select an item and enter a valid quantity to issue.');
            }
        }

        // Function to update an item
        function updateItem() {
            const selectedIndex = document.getElementById('select-item').value;
            const newName = document.getElementById('update-item-name').value;

            if (selectedIndex !== '' && newName) {
                assets[selectedIndex].name = newName;
                updateItemList();
                updateSelectOptions();
            } else {
                alert('Select an item and enter a new name.');
            }
        }

        // Function to delete an item (Admin action)
        function deleteItem() {
            const selectedIndex = document.getElementById('select-item').value;

            if (selectedIndex !== '') {
                assets.splice(selectedIndex, 1); // Remove the selected item
                updateItemList();
                updateSelectOptions();
            } else {
                alert('Select an item to delete.');
            }
        }

        // Function to clear input fields after adding an item
        function clearFields() {
            document.getElementById('item-name').value = '';
            document.getElementById('item-category').value = '';
            document.getElementById('item-quantity').value = '';
            document.getElementById('item-value').value = '';
        } */}
    </script>

</body>
</html>

