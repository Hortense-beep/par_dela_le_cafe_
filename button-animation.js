document.addEventListener("DOMContentLoaded", () => {
    const infoLink = document.querySelector(".info-link");
    if (!infoLink) return;
 
    const pulseDuration = 1200;
    const pulseDelay = 4500;
    let pulseTimeoutId;
 
    const triggerPulse = () => {
        infoLink.classList.add("is-pulsing");
        setTimeout(() => infoLink.classList.remove("is-pulsing"), pulseDuration);
    };

    const schedulePulse = () => {
        pulseTimeoutId = setTimeout(() => {
            triggerPulse();
            schedulePulse();
        }, pulseDelay);
    };

    infoLink.addEventListener("mouseenter", () => {
        infoLink.classList.add("is-hovered");
        clearTimeout(pulseTimeoutId);
    });
    
    infoLink.addEventListener("mouseleave", () => {
        infoLink.classList.remove("is-hovered");
        schedulePulse();
    });
    infoLink.addEventListener("focus", () => infoLink.classList.add("is-focused"));
    infoLink.addEventListener("blur", () => infoLink.classList.remove("is-focused"));
   
    triggerPulse();
    schedulePulse();
});

