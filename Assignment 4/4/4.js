document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const colorBox = document.getElementById('colorbox');
    const colorChangeBtn = document.getElementById('colorchange');
    const fontSizeInput = document.getElementById('fontsize');
    const italicBtn = document.getElementById('italic');
    const underlineBtn = document.getElementById('underline');
    const boldBtn = document.getElementById('bold');
    const fontFamilyDropdown = document.getElementById('list');
    const getStyleBtn = document.getElementById('getstyle');
    const cssPropsOutput = document.getElementById('css-props');

    // Initial font size setup
    textContainer.style.fontSize = fontSizeInput.value + 'px';

    // Event listener for color change button
    colorChangeBtn.addEventListener('click', function() {
        textContainer.style.color = colorBox.value;
    });

    // Event listener for font size slider
    fontSizeInput.addEventListener('input', function() {
        textContainer.style.fontSize = fontSizeInput.value + 'px';
    });

    // Event listeners for style buttons (Italic, Underline, Bold)
    italicBtn.addEventListener('click', function() {
        toggleTextStyle('font-style', 'italic');
    });

    underlineBtn.addEventListener('click', function() {
        toggleTextStyle('text-decoration', 'underline');
    });

    boldBtn.addEventListener('click', function() {
        toggleTextStyle('font-weight', 'bold');
    });

    // Function to toggle text style
    function toggleTextStyle(styleProperty, styleValue) {
        const currentValue = textContainer.style.getPropertyValue(styleProperty);
        if (currentValue.includes(styleValue)) {
            textContainer.style.setProperty(styleProperty, 'normal');
        } else {
            textContainer.style.setProperty(styleProperty, styleValue);
        }
    }

    // Event listener for font family dropdown
    fontFamilyDropdown.addEventListener('change', function() {
        textContainer.style.fontFamily = fontFamilyDropdown.value;
    });

    // Event listener for "Get CSS" button
    getStyleBtn.addEventListener('click', function() {
        const computedStyles = window.getComputedStyle(textContainer);
        const cssProps = [];
        cssProps.push(`font-size: ${computedStyles.fontSize};`);
        cssProps.push(`color: ${computedStyles.color};`);
        cssProps.push(`font-family: ${computedStyles.fontFamily};`);
        cssProps.push(`text-decoration: ${computedStyles.textDecorationLine};`);
        cssProps.push(`font-style: ${computedStyles.fontStyle};`);
        cssProps.push(`font-weight: ${computedStyles.fontWeight};`);

        cssPropsOutput.textContent = cssProps.join(' ');
    });
});
