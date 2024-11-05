// 1a. create an empty gratitude list array
const gratitudeList = [];

const showGratitudes = () => {
    // 2a. check to see if there are gratitudes to display
    if (gratitudeList.length > 0) {
        // 2b. grab gratitude list
        const listWrapper = document.getElementById('gratitude-list');

        // 2c. clear previous list items from the screen
        listWrapper.textContent = '';

        // 2d. loop through each item in list, generate and show each item
        for (index in gratitudeList) {
            // 2e. grab gratitude text from the list
            const gratitudeText = gratitudeList[index];

            // 2f. create li html element
            const listItem = document.createElement('li');

            // 2g. add text content to li element
            listItem.textContent = gratitudeText;

            // 2h. append to listWrapper
            listWrapper.appendChild(listItem);
        }
    }
}

const createGratitude = () => {
    // 1a. get value of text input
    const gratitude = document.getElementById('gratitude').value;
    
    // 1b. add item to the array
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