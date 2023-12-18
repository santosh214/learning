// Event handling is the process of responding to user actions in a web page.
// Event handlers can be used to handle and verify user input, user actions, and browser actions:

// types of event handlers

// 1.click
// 2. mouseover
// 3. keydown
// 4. keyup
// 5. submit
// 6. focus
// 7. blur
// 8. change
// 9. resize

<button id='myBtn'>click</button>
const button = document.getElementById("myBtn")
button.addEventListener('click', () => {
    alert("button clicked")
})