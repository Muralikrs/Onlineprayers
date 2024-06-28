let currentPrayer = "गोपाल सहस्त्रनाम";
let currentIndex = 0;
let baseFontSize = 5; // 5vh default font size

function displayVerse(prayer, index) {
    const verseElement = document.getElementById("verse");
    verseElement.innerHTML = verses[prayer][index];
    adjustFontSize();
}

function showNextVerse() {
    if (currentIndex < verses[currentPrayer].length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first verse
    }
    displayVerse(currentPrayer, currentIndex);
}

function showPreviousVerse() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = verses[currentPrayer].length - 1; // Loop back to the last verse
    }
    displayVerse(currentPrayer, currentIndex);
}

function toggleDropdown() {
    const dropdown = document.getElementById("optionDropdown");
    dropdown.classList.toggle("active");
    const headerText = document.getElementById("prayerHeading");
    headerText.classList.toggle("active");
}

function displayPrayer(prayerName) {
    currentPrayer = prayerName;
    currentIndex = 0;
    displayVerse(currentPrayer, currentIndex);

    // Close dropdown after selection
    const dropdown = document.getElementById("optionDropdown");
    dropdown.classList.remove("active");

    const headerText = document.getElementById("prayerHeading");
    headerText.textContent = prayerName; // Update heading text
    headerText.classList.remove("active"); // Remove active class for header text color change
}

function populateDropdown() {
    const dropdown = document.getElementById("optionDropdown");
    dropdown.innerHTML = ''; // Clear existing items

    for (let prayer in verses) {
        const dropdownItem = document.createElement('div');
        dropdownItem.className = 'dropdown-item';
        dropdownItem.textContent = prayer;
        dropdownItem.onclick = () => displayPrayer(prayer);
        dropdown.appendChild(dropdownItem);
    }
}

// Call populateDropdown on page load
document.addEventListener("DOMContentLoaded", function() {
    populateDropdown();
    displayVerse(currentPrayer, currentIndex); // Display the first verse of the initial prayer
    adjustFontSize(); // Adjust the font size initially
});

// Event listeners for navigating verses
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        showNextVerse();
    } else if (event.key === "ArrowLeft") {
        showPreviousVerse();
    }
});

// Event listener for clicking on the container to navigate on desktop
document.getElementById("verseContainer").addEventListener("click", function(event) {
    const containerWidth = this.offsetWidth;
    const clickX = event.clientX - this.getBoundingClientRect().left;

    if (clickX > containerWidth / 2) {
        showNextVerse();
    } else {
        showPreviousVerse();
    }
});

// Adjust font size based on baseFontSize
function adjustFontSize() {
    const verseElement = document.getElementById("verse");
    verseElement.style.fontSize = `${baseFontSize}vh`;
}

// Increase font size
function increaseFontSize() {
    baseFontSize += 1; // Adjust the increment value as needed
    adjustFontSize();
}

// Decrease font size
function decreaseFontSize() {
    if (baseFontSize > 1) { // Ensure the font size does not go below a certain threshold
        baseFontSize -= 1; // Adjust the decrement value as needed
        adjustFontSize();
    }
}
