document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .home-banner {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translate(-50%, 120%);
      width: min(90vw, 480px);
      padding: 1rem 1.5rem;
      border-radius: 20px;
      background: rgba(92, 59, 50, 0.97);
      color: #f7ede2;
      box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
      display: flex;
      align-items: center;
      gap: 1rem;
      opacity: 0;
      transition: transform 0.45s ease, opacity 0.45s ease;
      z-index: 1200;
      font-family: "Work Sans", system-ui, -apple-system, sans-serif;
    }
    .home-banner.visible {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    .home-banner__link {
      color: #ffd9a8;
      font-weight: 600;
      text-decoration: underline;
      white-space: nowrap;
    }
    .home-banner__close {
      margin-left: auto;
      background: transparent;
      border: none;
      color: inherit;
      font-size: 1.3rem;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const banner = document.createElement("div");
  banner.className = "home-banner";
  banner.innerHTML = `
    <div>
      <p style="margin:0 0 0.3rem 0;">En savoir plus sur le café</p>
      <a class="home-banner__link" href="https://www.culturequizz.com/quiz/quiz-special-cafe/" target="_blank" rel="noopener">
        Visiter le site
      </a>
    </div>
    <button class="home-banner__close" aria-label="Fermer la bannière">×</button>
  `;
  document.body.appendChild(banner);

  setTimeout(() => banner.classList.add("visible"), 2500);

  banner.querySelector(".home-banner__close").addEventListener("click", () => {
    banner.classList.remove("visible");
  });
});