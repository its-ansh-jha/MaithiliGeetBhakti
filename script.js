// YouTube Video Data
const videos = [
    { id: "g6XsluC-i9w", title: "Mobile Video 1" },
    { id: "y3NVjgVkyLY", title: "Mobile Video 2" },
    { id: "JXffWEm8rUw", title: "Mobile Video 3" },
    { id: "YoYRszpBe20", title: "Mobile Video 4" }
];

// Function to Display Thumbnails
function loadVideos() {
    const container = document.getElementById("video-container");
    container.innerHTML = ""; // Clear previous content

    videos.forEach(video => {
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("video");

        // YouTube Thumbnail URL
        const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

        videoDiv.innerHTML = `
            <h3>${video.title}</h3>
            <img src="${thumbnailUrl}" alt="${video.title}" data-videoid="${video.id}">
        `;

        // Add Click Event to Replace Thumbnail with Video
        videoDiv.addEventListener("click", function () {
            this.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            `;
        });

        container.appendChild(videoDiv);
    });
}

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Load Videos on Page Load
window.onload = loadVideos;