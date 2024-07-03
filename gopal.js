<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Webpage</title>
    <link rel="stylesheet" href="demo.css">
    <link rel="stylesheet" href="gopal.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>

</head>
<body>
    <nav id="naver">
            <div id="fonter">
                <button onclick="increaseFontSize()"><i class="fa-solid fa-font "></i>+</button>
                <button onclick="decreaseFontSize()"><i class="fa-solid fa-font "></i>-</button>
            
            </div>
            <div id="audio">
                <img src="./photos/onaudio.png" >
            </div>
        <div>
            <span id="prayerHeading">गोपाल सहस्त्रनाम</span>
        </div>
        <div>
            <button class="option-button" onclick="toggleDropdown()"><i class="fa-sharp fa-solid fa-bars" style="color: #000000;"></i></button>
            <div class="option-dropdown" id="optionDropdown">
                <!-- Book names will be populated here -->
            </div>
            <div class="option-dropdown" id="subOptionDropdown"></div>
        </div>
    </nav>
    <div id="cont">
        <div id="body">
            <div class="container" id="verseContainer">
                <div class="verse" id="verse">
                    <!-- Content goes here -->
                </div>
            </div>
        </div>
    </div>
    <script src="gopal.js"></script>
    <script src="data.js"></script>
</body>
</html>
