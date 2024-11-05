// 1a. create an empty gratitude list array
const gratitudeList = [];

// 3. Delete (remove) items in the gratitude list
const deleteGratitude = (event) => {
    // 3b. get the index of the gratitude to be deleted
    const index = Number(event.target.id);

    // 3c. remove just the deleted gratitude from the list
    gratitudeList.splice(index, 1);

    // 3d. redisplay the list of gratitudes
    showGratitudes();
}

const generateListItem = (gratitudeText) => {
    // 2e. create li html element
    const listItem = document.createElement('li');

    // 2f. add text content to li element
    listItem.textContent = gratitudeText;

    // 3. Delete (remove) items in the gratitude list
    // 3a. show delete button for each item in list
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.id = index;
    deleteButton.class = 'delete-gratitude-button';
    // NOTE: the code below is not the best practice way to add an event listener to a button
    deleteButton.onclick = deleteGratitude;
    listItem.appendChild(deleteButton);

    return listItem;
}

const showGratitudes = () => {
    // 2a. grab gratitude list
    const listWrapper = document.getElementById('gratitude-list');

    // 2b. clear previous list items from the screen
    listWrapper.textContent = '';

    // 2c. loop through each item in list, generate and show each item
    for (index in gratitudeList) {
        // 2d & 2e. generate html for gratitude list item
        const gratitude = gratitudeList[index];
        const listItem = generateListItem(gratitude);

        // 2f. append to listWrapper
        listWrapper.appendChild(listItem);
    }
}

const createGratitude = () => {
    // 1b. get value of text input
    const gratitude = document.getElementById('gratitude').value;
    
    // 1c. add item to the array
    gratitudeList.push(gratitude);
}

const addGratitude = () => {
    // 1. Create (add) item to the gratitude list
    createGratitude();

    // 2. Read (show) items in the gratitude list
    showGratitudes();    
}

// adding an event listener to add gratitude button
const addGratitudeButton = document.getElementById('add-gratitude-button');
// when user clicks on the button, call addGratitude function
addGratitudeButton.addEventListener('click', addGratitude, false);