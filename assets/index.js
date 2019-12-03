$(document).ready(() => {
    console.log("logic Loaded");
    $(document).on("click", "#youtubeChannel", function() {
        console.log("clicked");
        window.open(
            "https://www.youtube.com/channel/UCRFXE9jkPXair83Mb09KERg?view_as=subscriber",
            "_blank"
        );
    });
    $(document).on("click", "#algos", function() {
        console.log("clicked");
        window.open("https://po1sigala.github.io/Algorithims/", "_blank");
    });
});
