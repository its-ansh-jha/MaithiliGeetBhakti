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

// Dynamically add videos
const videoList = document.getElementById("videoList");
videoLinks.forEach(link => {
    let div = document.createElement("div");
    div.className = "video";
    div.innerHTML = `<iframe src="${link}" frameborder="0" allowfullscreen></iframe>`;
    videoList.appendChild(div);
});

// Play All Videos
function playAll() {
    document.querySelectorAll("iframe").forEach((iframe, index) => {
        setTimeout(() => {
            iframe.src = videoLinks[index] + "?autoplay=1";
        }, index * 3000); // Delay each video start by 3 seconds
    });
}
