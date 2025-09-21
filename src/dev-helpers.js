// Development helpers to suppress console warnings
if (process.env.NODE_ENV === 'development') {
  // Suppress WebSocket connection warnings
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0] && typeof args[0] === 'string' && 
        (args[0].includes('WebSocket connection') || 
         args[0].includes('ws://localhost:443'))) {
      return; // Suppress WebSocket connection errors
    }
    originalError.apply(console, args);
  };

  // Suppress React DevTools suggestion
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0] && typeof args[0] === 'string' && 
        args[0].includes('Download the React DevTools')) {
      return; // Suppress React DevTools suggestion
    }
    originalWarn.apply(console, args);
  };

  console.log('🚀 BAHOOVA Events - Scientific Congresses & Forums');
  console.log('✨ Development environment optimized');
  console.log('🔬 Specialized in scientific events management');
}
