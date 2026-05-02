const checkbox = document.getElementById('policyCheckbox');
const button = document.getElementById('getCodeBtn');

checkbox.addEventListener('change', function() {
  button.disabled = !this.checked;
});