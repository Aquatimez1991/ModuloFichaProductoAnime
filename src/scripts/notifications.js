// Global notification system
let activeNotifications = new Set();

function showNotification(message, options = {}) {
  const config = {
    type: 'success',
    duration: 3000,
    position: 'top-right',
    ...options,
  };

  // Create a unique key for this notification
  const notificationKey = `${message}-${config.type}-${config.position}`;

  // Check if this exact notification is already active
  if (activeNotifications.has(notificationKey)) {
    return; // Don't show duplicate
  }

  // Add to active notifications
  activeNotifications.add(notificationKey);

  const notification = document.createElement('div');
  notification.className = `notification notification--${config.type} notification--${config.position}`;
  notification.setAttribute('data-notification-key', notificationKey);

  notification.innerHTML = `
    <div class="notification__content">
      <span class="notification__icon">
        ${
          config.type === 'success'
            ? '✓'
            : config.type === 'error'
              ? '✕'
              : config.type === 'warning'
                ? '⚠'
                : 'ℹ'
        }
      </span>
      <span class="notification__message">${message}</span>
      <button class="notification__close" aria-label="Cerrar notificación">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;

  // Add styles if not already added
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      .notification {
        position: fixed;
        z-index: 9999;
        padding: 1rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .notification--top-right {
        top: 1.25rem;
        right: 1.25rem;
      }
      
      .notification--top-left {
        top: 1.25rem;
        left: 1.25rem;
      }
      
      .notification--bottom-right {
        bottom: 1.25rem;
        right: 1.25rem;
      }
      
      .notification--bottom-left {
        bottom: 1.25rem;
        left: 1.25rem;
      }
      
      .notification--success {
        background-color: #10b981;
        color: white;
      }
      
      .notification--error {
        background-color: #ef4444;
        color: white;
      }
      
      .notification--warning {
        background-color: #f59e0b;
        color: white;
      }
      
      .notification--info {
        background-color: #3b82f6;
        color: white;
      }
      
      .notification__content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .notification__icon {
        font-size: 1.25rem;
        font-weight: bold;
        flex-shrink: 0;
      }
      
      .notification__message {
        flex: 1;
        font-weight: 500;
      }
      
      .notification__close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.2s;
        flex-shrink: 0;
      }
      
      .notification__close:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Add to DOM
  document.body.appendChild(notification);

  // Close button functionality
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn?.addEventListener('click', () => {
    removeNotification(notification, notificationKey);
  });

  // Auto-remove after duration
  setTimeout(() => {
    removeNotification(notification, notificationKey);
  }, config.duration);
}

function removeNotification(notification, key) {
  notification.style.animation = 'slideOut 0.3s ease-in forwards';
  setTimeout(() => {
    notification.remove();
    activeNotifications.delete(key);
  }, 300);
}

// Global function for cart notifications (most common use case)
function showCartNotification(message = '¡Producto agregado al carrito!') {
  showNotification(message, { type: 'success', position: 'top-right' });
}

// Make functions globally available
window.showNotification = showNotification;
window.showCartNotification = showCartNotification;
