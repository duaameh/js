
  const editor = document.getElementById('editor');
  const fontFamilySelect = document.getElementById('fontFamily');
  const fontSizeSelect = document.getElementById('fontSize');
  const italicBtn = document.getElementById('italic-btn');
  const boldBtn = document.getElementById('bold-btn');
  const underlineBtn = document.getElementById('underline-btn');

  fontFamilySelect.addEventListener('change', function() {
    applyStyle('fontFamily', this.value);
  });

  fontSizeSelect.addEventListener('change', function() {
    applyStyle('fontSize', this.value);
  });

  italicBtn.addEventListener('click', function() {
    applyStyle('fontStyle', 'italic');
  });

  boldBtn.addEventListener('click', function() {
    applyStyle('fontWeight', 'bold');
  });

  underlineBtn.addEventListener('click', function() {
    applyStyle('textDecoration', 'underline');
  });

  function applyStyle(styleProperty, value) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style[styleProperty] = value;
    range.surroundContents(span);
  }