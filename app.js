// Grab the hamburger button and sidebar
const toggleButton = document.getElementById("sidebar-toggle-btn")
const sidebar = document.getElementById("sidebar")

function showSidebar(visible) {
    // show (visible=true) or hide (visible=false) sidebar
    toggleButton.setAttribute("aria-expanded", visible)
    sidebar.setAttribute("aria-hidden", !visible)
}
window.showSidebar = showSidebar

function sideBarIsOpen() {
    return toggleButton.getAttribute("aria-expanded") === "true"
}

// Function to toggle sidebar open/close
function toggleSidebar() {
    showSidebar(!sideBarIsOpen())
}

// Add event listener to the hamburger button
toggleButton.addEventListener("click", toggleSidebar)

// Function to update aria-hidden based on screen width
function initSidebarAriaAttrs() {
    if (window.innerWidth <= 768) {
        // On mobile, make the button accessible
        toggleButton.setAttribute("aria-hidden", "false")
        toggleButton.setAttribute("aria-expanded", "false")
        // on load if hambrurger button is visible, then navmenu is hidden
        sidebar.setAttribute("aria-hidden", "true")
    } else {
        // On desktop, hide the button from screen readers
        toggleButton.setAttribute("aria-hidden", "true")
        toggleButton.setAttribute("aria-expanded", "true")
        // On desktop the nav menu is always visible
        sidebar.setAttribute("aria-hidden", "false")
    }
}

initSidebarAriaAttrs()
// Update aria-hidden on window resize
window.addEventListener("resize", initSidebarAriaAttrs)
