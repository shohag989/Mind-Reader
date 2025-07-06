function handleGuess() {
    const input = document
        .getElementById("numberInput")
        .value;
    const number = parseInt(input, 10);
    if (!isNaN(number) && number > 0 && number < 200) {
        alert(`Are you thinking the number ${number}? 🤔`);
    } else {
        alert("Please enter a number between 1 and 199.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    numberInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleGuess();
        }
    });

    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (view source)
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 123 || 
            (event.ctrlKey && event.shiftKey && event.keyCode == 73) || 
            (event.ctrlKey && event.shiftKey && event.keyCode == 74) || 
            (event.ctrlKey && event.keyCode == 85)) {
            event.preventDefault();
        }
    });
});