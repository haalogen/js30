const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it (not UNchecking)
  let inBetween = false;
  if (e.shiftKey && this.checked && lastChecked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });

  }

  lastChecked = this; // this is checkbox node
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
