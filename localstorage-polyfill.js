// localStorage polyfill for Node.js
// This must run before any code tries to access localStorage
(function() {
  if (typeof global === 'undefined') return;
  
  // Node.js v26+ has a built-in localStorage that throws if --localstorage-file isn't set
  // We need to replace it immediately with a working implementation
  
  // Create a working localStorage implementation
  let workingLocalStorage;
  
  try {
    const { LocalStorage } = require('node-localstorage');
    const path = require('path');
    const fs = require('fs');
    
    // Create .localstorage directory if it doesn't exist
    const storageDir = path.join(process.cwd(), '.localstorage');
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }
    
    // Initialize localStorage with a file path
    workingLocalStorage = new LocalStorage(path.join(storageDir, 'nextjs-storage.json'));
  } catch (error) {
    // If node-localstorage isn't available, create a minimal mock
    workingLocalStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0,
      key: () => null
    };
  }
  
  // Use defineProperty to override localStorage on all global objects
  // This works even if the property is non-configurable in Node.js v26
  const defineLocalStorage = (target, name) => {
    try {
      // First try to delete if possible
      try {
        delete target[name];
      } catch (e) {
        // Ignore deletion errors
      }
      
      // Then define the new property
      try {
        Object.defineProperty(target, name, {
          value: workingLocalStorage,
          writable: true,
          configurable: true,
          enumerable: true
        });
      } catch (e) {
        // If defineProperty fails, try direct assignment
        try {
          target[name] = workingLocalStorage;
        } catch (e2) {
          // Last resort: use a setter/getter proxy
          try {
            const descriptor = Object.getOwnPropertyDescriptor(target, name);
            if (descriptor && !descriptor.configurable) {
              // Can't override, but we can try to wrap it
              Object.defineProperty(target, name, {
                get: () => workingLocalStorage,
                set: (val) => { workingLocalStorage = val; },
                configurable: false,
                enumerable: true
              });
            } else {
              target[name] = workingLocalStorage;
            }
          } catch (e3) {
            // Give up for this target
          }
        }
      }
    } catch (e) {
      // Silently fail for this target
    }
  };
  
  // Apply to all global objects
  defineLocalStorage(global, 'localStorage');
  
  if (typeof globalThis !== 'undefined') {
    defineLocalStorage(globalThis, 'localStorage');
  }
  
  if (typeof window !== 'undefined') {
    defineLocalStorage(window, 'localStorage');
  }
})();

