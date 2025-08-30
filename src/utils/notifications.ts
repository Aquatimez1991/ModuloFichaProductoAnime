// Sistema de notificaciones

export interface NotificationOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const DEFAULT_OPTIONS: Required<NotificationOptions> = {
  type: 'success',
  duration: 3000,
  position: 'top-right',
};

export function showNotification(
  message: string,
  options: NotificationOptions = {}
): void {
  const config = { ...DEFAULT_OPTIONS, ...options };

  const notification = document.createElement('div');
  notification.className = `notification notification--${config.type} notification--${config.position}`;

  notification.innerHTML = `
    <div class="notification__content">
      <span class="notification__message">${message}</span>
      <button class="notification__close" aria-label="Cerrar notificación">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      z-index: 9999;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      animation: slideIn 0.3s ease-out;
      max-width: 400px;
    }
    
    .notification--top-right {
      top: 1rem;
      right: 1rem;
    }
    
    .notification--top-left {
      top: 1rem;
      left: 1rem;
    }
    
    .notification--bottom-right {
      bottom: 1rem;
      right: 1rem;
    }
    
    .notification--bottom-left {
      bottom: 1rem;
      left: 1rem;
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
      justify-content: space-between;
      gap: 0.5rem;
    }
    
    .notification__message {
      flex: 1;
    }
    
    .notification__close {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 0.25rem;
      transition: background-color 0.2s;
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
  document.body.appendChild(notification);

  // Auto remove
  const timeout = setTimeout(() => {
    removeNotification(notification);
  }, config.duration);

  // Manual close
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn?.addEventListener('click', () => {
    clearTimeout(timeout);
    removeNotification(notification);
  });
}

function removeNotification(notification: HTMLElement): void {
  notification.style.animation = 'slideOut 0.3s ease-in';
  setTimeout(() => {
    notification.remove();
  }, 300);
}
