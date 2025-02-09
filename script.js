// YouTube Video Links (Video 2 Removed)
const videoLinks = [
    "https://www.youtube.com/embed/g6XsluC-i9w",
    "https://www.youtube.com/embed/JXffWEm8rUw",
    "https://www.youtube.com/embed/YoYRszpBe20",
    "https://www.youtube.com/embed/Kq-OI4mjyII",
    "https://www.youtube.com/embed/FPzernST0tk",
    "https://www.youtube.com/embed/oETJb-BhdEI",
    "https://www.youtube.com/embed/oszZukrcZKc",
    "https://www.youtube.com/embed/msfs8lgsVOY"
];

const videoList = document.getElementById("videoList");
const players = []; // Store YouTube players

// Function to initialize YouTube videos
function onYouTubeIframeAPIReady() {
    videoLinks.forEach((link, index) => {
        let div = document.createElement("div");
        div.className = "video";
        let videoId = link.split("/embed/")[1]; // Extract YouTube Video ID
        div.innerHTML = `<div id="player${index}"></div>`;
        videoList.appendChild(div);

        // Initialize YouTube Player API
        players[index] = new YT.Player(`player${index}`, {
            height: "180",
            width: "100%",
            videoId: videoId,
            playerVars: { 'playsinline': 1 }
        });
    });
}

// Function to play all videos simultaneously
function playAll() {
    players.forEach(player => player.playVideo());
}

// Function to pause all videos
function pauseAll() {
    players.forEach(player => player.pauseVideo());
}

// Load YouTube API
function loadYouTubeAPI() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load API on page load
loadYouTubeAPI();
