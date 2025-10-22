/* eslint-disable @typescript-eslint/no-explicit-any */
// Transform YYYY-MM-DD to MMM DD, YYYY
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    return date.toLocaleDateString('en-US', options);
  }

// Basic throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}


// Basic debounce function
export function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | null = null;
  
    return function (this: unknown, ...args: Parameters<T>) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  