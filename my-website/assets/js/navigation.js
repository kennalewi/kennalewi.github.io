document.addEventListener('DOMContentLoaded', function() {
  // Get all nav items with children
  const navItemsWithChildren = document.querySelectorAll('.nav-item.has-children > a');

  navItemsWithChildren.forEach(function(navItem) {
    navItem.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Toggle the active class on the parent nav item
      this.parentElement.classList.toggle('active');
    });
  });
});
