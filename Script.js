/**
 * Creates a reusable primary button element.
 *
 * @param {string} label - Text shown on the button.
 * @param {function} onClick - Click handler.
 * @param {boolean} [disabled=false] - Initial disabled state.
 * @returns {HTMLButtonElement}
 */
function createPrimaryButton(label, onClick, disabled = false) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'primary-btn';
  btn.textContent = label;

  // Set initial disabled state
  btn.disabled = !!disabled;
  if (disabled) {
    // extra class not strictly required, but kept in case CSS uses it
    btn.classList.add('disabled');
  }

  // Click handler
  btn.addEventListener('click', event => {
    if (!btn.disabled && typeof onClick === 'function') {
      onClick(event);
    }
  });

  return btn;
}

/**
 * Utility: enable or disable button later
 * @param {HTMLButtonElement} btn
 * @param {boolean} isDisabled
 */
function setButtonDisabled(btn, isDisabled) {
  if (!(btn instanceof HTMLButtonElement)) return;
  btn.disabled = isDisabled;
  if (isDisabled) {
    btn.classList.add('disabled');
  } else {
    btn.classList.remove('disabled');
  }
}
