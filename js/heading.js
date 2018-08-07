function socialSlider () {
    var timeOut = 3000;
    var i = 0;
    var social = [
        {
            icon: document.querySelector("#twitch-icon"),
            link: document.querySelector("#twitch-link")
        },
        {
            icon: document.querySelector("#twitter-icon"),
            link: document.querySelector("#twitter-link")
        },
        {
            icon: document.querySelector("#website-icon"),
            link: document.querySelector("#website-link")
        }
    ]
    setInterval(function () {
        // Reset the social styles
        social.forEach(function(s) {
            s.icon.classList.remove("white");
            s.link.classList.add("hidden");
        });

        // Add active styles
        social[i].icon.classList.add("white");
        social[i].link.classList.remove("hidden");

        // Increment social index
        i === social.length-1 ? i = 0 : i++;
    }, timeOut);
}

// Execute the functions
socialSlider();