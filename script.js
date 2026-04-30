document.addEventListener('click', function(e) {
  const button = e.target;
 
  if (button.tagName === 'BUTTON' && button.classList.contains('px4') && button.classList.contains('py2')) {
 
    const paketContainer = button.closest('.flex-row.flex-wrap.gap-2') || button.parentElement;
 
    if (!paketContainer) return;
 
    paketContainer.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
      btn.style.backgroundColor = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    });
 
    button.classList.add('active');
    button.style.backgroundColor = 'var(--green-500)';
    button.style.color = 'var(--white)';
    button.style.borderColor = 'var(--green-500)';
  }
});
 
document.addEventListener('click', function(e) {
  const button = e.target;
 
  if (button.tagName === 'BUTTON' && button.textContent.trim() === '+') {
    const container = button.parentElement;
    const quantitySpan = container.querySelector('span');
 
    if (quantitySpan) {
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
    }
  }
 
  if (button.tagName === 'BUTTON' && button.textContent.trim() === '-') {
    const container = button.parentElement;
    const quantitySpan = container.querySelector('span');
 
    if (quantitySpan) {
      let currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
      }
    }
  }
});
 
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.flex-row.flex-wrap.gap-2').forEach(function(container) {
    const firstBtn = container.querySelector('button.px4.py2');
    if (firstBtn) {
      firstBtn.style.backgroundColor = 'var(--green-500)';
      firstBtn.style.color = 'var(--white)';
      firstBtn.style.borderColor = 'var(--green-500)';
    }
  });
});