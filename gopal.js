let currentPrayer = "श्रीब्रह्मसंहिता"; 
let currentIndex = 0;
let baseFontSize = 5; 
let currentSegment = "श्रीमद्भागवतम्"; 





function displayVerse(prayer, index) {
    const verseElement = document.getElementById("verse");
    if (verses[currentSegment] && verses[currentSegment][prayer]) {
        verseElement.innerHTML = verses[currentSegment][prayer][index];
    } else {
    }
    adjustFontSize();
}

function showNextVerse() {
    if (verses[currentSegment] && verses[currentSegment][currentPrayer] && currentIndex < verses[currentSegment][currentPrayer].length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first verse
    }
    displayVerse(currentPrayer, currentIndex);
}

function showPreviousVerse() {
    if (verses[currentSegment] && verses[currentSegment][currentPrayer] && currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = verses[currentSegment][currentPrayer].length - 1; // Loop back to the last verse
    }
    displayVerse(currentPrayer, currentIndex);
}

function toggleDropdown() {
    const dropdown = document.getElementById("optionDropdown");
    dropdown.classList.toggle("active");
}

function closeDropdowns() {
    const dropdown = document.getElementById("optionDropdown");
    const subDropdown = document.getElementById("subOptionDropdown");

    if (dropdown.classList.contains("active") || subDropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        subDropdown.classList.remove("active");
        return false; // Return false if any dropdown was open and got closed
    }

    return true; // Return true if no dropdown was open
}


function showSubDropdown(segment) {
    const subDropdown = document.getElementById("subOptionDropdown");
    subDropdown.innerHTML = ''; // Clear existing items
    currentSegment = segment;
    
    for (let prayer in verses[segment]) {
        const dropdownItem = document.createElement('div');
        dropdownItem.className = 'dropdown-item';
        dropdownItem.textContent = prayer;
        dropdownItem.onclick = () => displayPrayer(prayer);
        subDropdown.appendChild(dropdownItem);
    }
    subDropdown.classList.add('active');
}

function displayPrayer(prayerName) {
    currentPrayer = prayerName;
    currentIndex = 0;
    displayVerse(currentPrayer, currentIndex);

    // Close dropdown after selection
    const dropdown = document.getElementById("optionDropdown");
    dropdown.classList.remove("active");
    const subDropdown = document.getElementById("subOptionDropdown");
    subDropdown.classList.remove("active");

    const headerText = document.getElementById("prayerHeading");
    headerText.textContent = prayerName; // Update heading text
}

function populateDropdown() {
    const dropdown = document.getElementById("optionDropdown");
    dropdown.innerHTML = ''; // Clear existing items

    // Add main categories dynamically
    for (let segment in verses) {
        const dropdownItem = document.createElement('div');
        dropdownItem.className = 'dropdown-item';
        dropdownItem.textContent = segment;
        dropdownItem.onclick = () => showSubDropdown(segment);
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

document.getElementById("verseContainer").addEventListener("click", function(event) {
    const containerWidth = this.offsetWidth;
    const clickX = event.clientX - this.getBoundingClientRect().left;
    if(closeDropdowns())
    if (clickX > containerWidth / 2) {
        showNextVerse();
    } else {
        showPreviousVerse();
    }

});
