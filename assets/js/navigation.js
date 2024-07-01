document.addEventListener('DOMContentLoaded', function() {
    // Get the menu items with children
    const navItemsWithChildren = document.querySelectorAll('.nav-item.has-children > a');
  
    // Restore menu state from localStorage
    const menuState = localStorage.getItem('menuState');
    if (menuState === 'open') {
      navItemsWithChildren.forEach(function(navItem) {
        navItem.parentElement.classList.add('active');
        navItem.nextElementSibling.style.display = 'block';
      });
    }
  
    // Toggle submenu and save state in localStorage
    navItemsWithChildren.forEach(function(navItem) {
      navItem.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        const parentNavItem = this.parentElement;
        const subMenu = this.nextElementSibling;
        const isOpen = subMenu.style.display === 'block';
  
        if (isOpen) {
          subMenu.style.display = 'none';
          parentNavItem.classList.remove('active');
          localStorage.setItem('menuState', 'closed');
        } else {
          subMenu.style.display = 'block';
          parentNavItem.classList.add('active');
          localStorage.setItem('menuState', 'open');
        }
      });
    });
  
    // Add 'no-animation' class to prevent initial animations
    document.body.classList.add('no-animation');
  
    // Remove 'no-animation' class after initial load
    setTimeout(function() {
      document.body.classList.remove('no-animation');
    }, 100);
  });