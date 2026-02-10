/* ============================= */
/*         WHAT CAN I OFFER      */
/* ============================= */

const services = [
  "SOCIAL MEDIA STRATEGY",
  "CONTENT CREATION",
  "COMMUNITY MANAGEMENT",
  "GRAPHIC DESIGN FOR POSTS",
  "CREATION OF REELS / VIDEO CONTENT",
  "SOCIAL MEDIA COPYWRITING",
  "CONTENT PLANNING & SCHEDULING",
  "ANALYTICS & OPTIMIZATION"
];

let offerIndex = 0;
let offerAnimating = false;

const chat = document.getElementById("chat");
const chatStage = document.getElementById("chatStage");

const positions = [
  { top: 0, left: 8 },
  { top: 40, right: 10 },
  { top: 110, left: 20 },
  { top: 160, right: 18 },
  { top: 230, left: 12 },
  { top: 280, right: 8 },
  { top: 350, left: 25 },
  { top: 400, right: 6 }
];

// click only on stage
chatStage.addEventListener("click", (e) => {
  e.stopPropagation();
  if (offerAnimating || offerIndex >= services.length) return;
  offerAnimating = true;
  showTyping(offerIndex);
});

function showTyping(i) {
  const pos = positions[i];

  const typing = document.createElement("div");
  typing.className = "typing";
  typing.style.top = pos.top + "px";

  if (pos.left !== undefined) typing.style.left = pos.left + "%";
  if (pos.right !== undefined) typing.style.right = pos.right + "%";

  typing.innerHTML = `
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `;

  chat.appendChild(typing);

  setTimeout(() => {
    typing.remove();
    createMessage(i);
  }, 900);
}

function createMessage(i) {
  const pos = positions[i];

  const message = document.createElement("div");
  message.className = `message ${pos.left !== undefined ? "left" : "right"}`;
  message.style.top = pos.top + "px";

  if (pos.left !== undefined) message.style.left = pos.left + "%";
  if (pos.right !== undefined) message.style.right = pos.right + "%";

  chat.appendChild(message);
  requestAnimationFrame(() => message.classList.add("animate"));

  const text = services[i];
  let charIndex = 0;

  const typingInterval = setInterval(() => {
    message.textContent += text.charAt(charIndex);
    charIndex++;

    if (charIndex >= text.length) {
      clearInterval(typingInterval);
      offerIndex++;
      offerAnimating = false;
    }
  }, 22);
}

/* ============================= */
/*         SOCIAL STRATEGY       */
/* ============================= */

const strategySection = document.getElementById("strategySection");
const strategyChat = document.getElementById("strategyChat");

const strategySteps = [
  { title: "BRAND ANALYSIS", icon: "fa-magnifying-glass", body: "Identity, visual language, target audience, pain points & opportunities." },
  { title: "TARGET AUDIENCE", icon: "fa-users", body: "Demographics, psychographics, behavior — clear direction that resonates." },
  { title: "PLATFORM SELECTION", icon: "fa-sitemap", body: "Pick the most effective platforms. Start with 1–2, optimize, then scale." },
  { title: "VISUAL & VERBAL IDENTITY", icon: "fa-pen-nib", body: "Palette, fonts, grid, brand voice, emojis/hashtags/caption style." },
  { title: "CONTENT STRATEGY", icon: "fa-calendar-check", body: "Custom calendar: education, inspiration, reels/trends, promo, BTS, UGC." },
  { title: "GROWTH & COMMUNITY", icon: "fa-handshake", body: "Hashtags, geotags, story engagement, collabs, giveaways, user content." },
  { title: "ANALYTICS & OPTIMIZATION", icon: "fa-chart-pie", body: "Monthly review: reach, engagement, best posts, traffic, conversions." },
  { title: "WHY THIS STRATEGY WORKS", icon: "fa-bolt", body: "Aligned brand + consistent content + optimization = sustainable growth." }
];

const strategyPositions = [
  { top: 0,   left: 8  },
  { top: 74,  right: 10 },
  { top: 156, left: 20 },
  { top: 238, right: 16 },
  { top: 320, left: 12 },
  { top: 402, right: 8  },
  { top: 484, left: 24 },
  { top: 566, right: 6  }
];

let sIndex = 0;
let strategyStarted = false;

function spawnNextStrategy() {
  if (sIndex >= strategySteps.length) return;

  const step = strategySteps[sIndex];
  const pos = strategyPositions[sIndex];

  const trail = document.createElement("div");
  trail.className = "strategy-trail";
  trail.style.top = (pos.top + 24) + "px";

  if (pos.left !== undefined) {
    trail.style.left = "0px";
    trail.style.width = "68%";
    trail.style.transformOrigin = "left center";
  } else {
    trail.style.right = "0px";
    trail.style.width = "68%";
    trail.style.transformOrigin = "right center";
  }

  strategyChat.appendChild(trail);
  setTimeout(() => trail.remove(), 560);

  const bubble = document.createElement("div");
  bubble.className = "strategy-message";

  if (pos.left !== undefined) {
    bubble.classList.add("left", "in-left");
    bubble.style.left = pos.left + "%";
  } else {
    bubble.classList.add("right", "in-right");
    bubble.style.right = pos.right + "%";
  }

  bubble.style.top = pos.top + "px";
  bubble.innerHTML = `
    <i class="fa-solid ${step.icon}"></i>
    <div>
      <span class="s-title">${step.title}</span>
      <span class="s-body">${step.body}</span>
    </div>
  `;

  strategyChat.appendChild(bubble);

  sIndex++;
  setTimeout(spawnNextStrategy, 420);
}

/* ============================= */
/*            PLATFORMS          */
/* ============================= */

const platformsSection = document.getElementById("platformsSection");
const platformChat = document.getElementById("platformChat");

const platforms = [
  { name: "Facebook", icon: "fa-facebook-f" },
  { name: "Instagram", icon: "fa-instagram" },
  { name: "TikTok", icon: "fa-tiktok" },
  { name: "LinkedIn", icon: "fa-linkedin-in" },
  { name: "YouTube", icon: "fa-youtube" },
  { name: "X", icon: "fa-x-twitter" },
  { name: "Pinterest", icon: "fa-pinterest-p" },
  { name: "Snapchat", icon: "fa-snapchat" },
  { name: "Threads", icon: "fa-threads" },
  { name: "WhatsApp", icon: "fa-whatsapp" },
  { name: "Reddit", icon: "fa-reddit-alien" },
  { name: "Telegram", icon: "fa-telegram" },
  { name: "Discord", icon: "fa-discord" }
];

const platformPositions = [
  { top: 0, left: 8 },
  { top: 50, right: 12 },
  { top: 110, left: 22 },
  { top: 160, right: 18 },
  { top: 220, left: 12 },
  { top: 270, right: 6 },
  { top: 320, left: 28 },
  { top: 370, right: 10 },
  { top: 420, left: 14 },
  { top: 470, right: 20 },
  { top: 520, left: 18 },
  { top: 570, right: 8 },
  { top: 620, left: 24 }
];

let pIndex = 0;
let platformsStarted = false;

function spawnNextPlatform() {
  if (pIndex >= platforms.length) return;

  const data = platforms[pIndex];
  const pos = platformPositions[pIndex];

  const bubble = document.createElement("div");
  bubble.className = `platform-message ${pos.left !== undefined ? "left" : "right"}`;
  bubble.style.top = pos.top + "px";

  if (pos.left !== undefined) bubble.style.left = pos.left + "%";
  if (pos.right !== undefined) bubble.style.right = pos.right + "%";

  bubble.innerHTML = `
    <i class="fa-brands ${data.icon}"></i>
    <span>${data.name.toUpperCase()}</span>
  `;

  platformChat.appendChild(bubble);
  requestAnimationFrame(() => bubble.classList.add("animate"));

  pIndex++;
  setTimeout(spawnNextPlatform, 260);
}

/* ============================= */
/*      SCROLL + VISIBILITY      */
/* ============================= */

const scrollElements = document.querySelectorAll(".scroll-appear");
const aboutSlides = document.querySelectorAll(".about-slide");

function setDynamicHeights() {
  const lastStrategyTop = Math.max(...strategyPositions.map(p => p.top));
  strategyChat.style.height = (lastStrategyTop + 220) + "px";

  const lastPlatformTop = Math.max(...platformPositions.map(p => p.top));
  platformChat.style.height = (lastPlatformTop + 180) + "px";
}

function handleScroll() {
  const trigger = window.innerHeight - 120;

  scrollElements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) el.classList.add("visible");
  });

  aboutSlides.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 140) el.classList.add("visible");
  });

  if (!strategyStarted && strategySection.getBoundingClientRect().top < trigger) {
    strategyStarted = true;
    spawnNextStrategy();
  }

  if (!platformsStarted && platformsSection.getBoundingClientRect().top < trigger) {
    platformsStarted = true;
    spawnNextPlatform();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setDynamicHeights();
  handleScroll();
});

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", setDynamicHeights);
