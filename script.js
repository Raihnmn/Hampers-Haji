// ============================================
// PACKAGE SELECTION FUNCTIONALITY
// ============================================
document.addEventListener('click', function(e) {
  // Handle package button clicks
  const button = e.target;
  
  // Check if clicked element is a button with px-4 and py2 classes (package button)
  if (button.tagName === 'BUTTON' && button.classList.contains('px-4') && button.classList.contains('py2')) {
    // Find the paket container (parent with gap-2 class)
    const paketContainer = button.closest('.flex.gap-2, .flex.flex-wrap.gap-2, .flex.flex-row.flex-wrap.gap-2');
    
    if (!paketContainer) return;
    
    // Remove 'active' class from all siblings
    paketContainer.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add 'active' class to clicked button
    button.classList.add('active');
  }
});

// ============================================
// QUANTITY COUNTER FUNCTIONALITY
// ============================================
document.addEventListener('click', function(e) {
  const button = e.target;
  
  // Handle plus button
  if (button.tagName === 'BUTTON' && button.textContent.trim() === '+') {
    const container = button.parentElement;
    const quantitySpan = container.querySelector('span');
    
    if (quantitySpan) {
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
    }
  }
  
  // Handle minus button
  if (button.tagName === 'BUTTON' && button.textContent.trim() === '-') {
    const container = button.parentElement;
    const quantitySpan = container.querySelector('span');
    
    if (quantitySpan) {
      let currentQuantity = parseInt(quantitySpan.textContent);
      
      // Minimum quantity is 1
      if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
      }
    }
  }
});
