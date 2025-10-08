document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');
  let timeoutId;

  dropdown.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId);
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
      dropdownContent.style.display = 'none';
    }, 300); // 300ms de delay antes de cerrar
  });

  dropdownContent.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId);
  });

  dropdownContent.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
      dropdownContent.style.display = 'none';
    }, 300);
  });
});