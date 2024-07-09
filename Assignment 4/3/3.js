function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');

    // Check current visibility state
    if (paragraph.style.display === 'none') {
        // If paragraph is hidden, show it
        paragraph.style.display = 'block';
    } else {
        // If paragraph is visible, hide it
        paragraph.style.display = 'none';
    }
}
