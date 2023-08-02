let deferredPrompt;

async function installPWA() {
  if (deferredPrompt) {
    try {
      await deferredPrompt.prompt();

      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        console.log("PWA installed successfully!");
      } else {
        console.log("PWA installation declined.");
      }

      deferredPrompt = null;
    } catch (error) {
      console.error("Error while installing the PWA:", error);
    }
  } else {
    console.log("The PWA installation prompt is not available yet.");
  }
}

const installButton = document.getElementById("buttonInstall");
installButton.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt event fired.");
  event.preventDefault();
  deferredPrompt = event;
});

window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed on the device.");

  installButton.classList.add("hidden");
});



