document.addEventListener('click', function(e) {
  const button = e.target;
  
  if (button.tagName === 'BUTTON' && button.classList.contains('px-4') && button.classList.contains('py2')) {

    const paketContainer = button.closest('.flex.gap-2, .flex.flex-wrap.gap-2, .flex.flex-row.flex-wrap.gap-2');
    
    if (!paketContainer) return;
    
    paketContainer.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    button.classList.add('active');
  }
});

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
