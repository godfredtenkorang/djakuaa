
function handleScrollToTop(){
    window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        const newHeight = windowHeight - 1;
    
        if (newHeight < windowHeight) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
        // Check if the scroll position is at the top of the page
        if (window.scrollY === 0) {
            scrollToTopBtn.style.display = "none"; // Set display to "none" when at the top
        }
    });
    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        scrollToTopBtn.style.display = "none"; // Hide the button after initiating smooth scroll
    }
    const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    
    // Event listener for button click
    scrollToTopBtn.addEventListener("click", scrollToTop);
    
}

handleScrollToTop()
