let deferredPrompt; // To store the event for later use

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default browser prompt
  deferredPrompt = event; // Store the event for later use
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser prompt to install the PWA
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('PWA installed successfully!');
    } else {
      console.log('PWA installation declined.');
    }

    // Clear the deferredPrompt variable, as it can only be used once
    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed on the device.');
});
