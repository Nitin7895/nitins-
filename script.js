/* ============================================================
   EDIT YOUR PORTFOLIO HERE
============================================================ */

const ME = {
  name:      "Nitin Mishra",
  available: true,
  links: {
    linkedin: "https://www.linkedin.com/in/nitin-mishra-2a421037b/",
    youtube:  "https://www.youtube.com/@NitinMishra-t3x",
    email:    "nitinmishra04821@gmail.com"
  }
};

/* image: filename inside the images/ folder
   stat / statLabel: big amber number shown on card
   span "wide" = full row | "normal" = half row            */
const CASE_STUDIES = [
  {
    title:    "Dental Clinic Booking System",
    category: "Healthcare / Web App",
    whoFor:   "Dental clinic (private practice)",
    whatBuilt:"Multi-clinic AI booking system with appointment management and follow-up automation.",
    outcome:  "4 → 19 bookings/month (no extra ad spend) · 12 → 67 Google reviews in 5 months",
    image:    "images/proj_booking.jpg",
    stack:    ["Next.js", "Supabase", "n8n automation", "WhatsApp API"],
    live:     true
  },
  {
    title:    "AI Voice Agent for Service Business",
    category: "Voice AI / Automation",
    whoFor:   "Solar installation company",
    whatBuilt:"24/7 AI voice agent that handles incoming calls, qualifies leads, and books appointments.",
    outcome:  "Answers 100% of after-hours calls · Zero missed inquiries · Client inquiries never drop",
    image:    "images/proj_voice.jpg",
    stack:    ["OpenAI voice", "n8n workflows", "Twilio"],
    live:     true
  },
  {
    title:    "SEO Site & Content Pipeline",
    category: "Web & Content Automation",
    whoFor:   "UK-based client",
    whatBuilt:"Full website build + SEO content planning workflow (n8n + AI agents).",
    outcome:  "30K impressions in 6 weeks · Ranked for 15+ high-intent keywords",
    image:    "images/proj_seo.jpg",
    stack:    ["Next.js", "Vercel", "n8n", "Claude"],
    live:     true
  }
];

const BUILDING_NOW = [
  {
    title:    "Multi-Tenant SaaS for Plumbers",
    status:   "In Active Build",
    desc:     "White-label platform featuring WhatsApp AI assistant, automated client invoicing, and automated lead follow-up for field services.",
    stack:    ["Next.js", "Supabase", "WhatsApp API", "Stripe"],
    progress: "85%"
  },
  {
    title:    "AI Model Evaluation Workflows",
    status:   "Testing & Benchmarking",
    desc:     "Automated benchmark framework evaluating output accuracy, cost, and response latency across Claude 3.5, GPT-4o, and Gemini 1.5 Pro.",
    stack:    ["n8n", "Anthropic", "OpenAI", "Google Gemini"],
    progress: "75%"
  }
];

const STACK = [
  { cat: "Frontend",        items: ["React", "Next.js", "TanStack Start", "TypeScript"] },
  { cat: "Backend / Infra", items: ["Supabase", "Vercel", "Stripe Connect", "PostgreSQL"] },
  { cat: "Automation / AI", items: ["n8n", "Vapi", "OpenAI", "Anthropic", "Resend"] },
  { cat: "Growth",          items: ["GA4", "Google Search Console", "SEO", "Call Tracking"] }
];

/* color = brand hex to pass to simpleicons CDN (no #). null slug = dot fallback */
const TOOLS = [
  { name: "OpenAI",    slug: "openai",      color: "FFFFFF" },
  { name: "Claude",    slug: "anthropic",   color: "CC8B5E" },
  { name: "Lovable",   slug: null,          color: null     },
  { name: "n8n",       slug: "n8n",         color: "EA4B71" },
  { name: "Airtable",  slug: "airtable",    color: "18BFFF" },
  { name: "Make",      slug: "make",        color: "9B59D0" },
  { name: "Supabase",  slug: "supabase",    color: "3ECF8E" },
  { name: "Vercel",    slug: "vercel",      color: "FFFFFF" },
  { name: "Next.js",   slug: "nextdotjs",   color: "FFFFFF" },
  { name: "Vapi",      slug: null,          color: null     },
  { name: "Zapier",    slug: "zapier",      color: "FF4A00" },
  { name: "Stripe",    slug: "stripe",      color: "635BFF" },
  { name: "WhatsApp",  slug: "whatsapp",    color: "25D366" },
  { name: "Shopify",   slug: "shopify",     color: "96BF48" },
  { name: "Twilio",    slug: "twilio",      color: "F22F46" },
  { name: "GitHub",    slug: "github",      color: "FFFFFF" },
];

/* ============================================================
   END OF EDITABLE SECTION
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  applyMeta();
  renderTicker();
  renderCaseStudies();
  renderBuildingNow();
  initNav();
  initScrollAnimations();
  initForm();
  initChatbot();
  initProjectModal();
  initTestimonials();
  document.getElementById('footer-year').textContent = `© ${new Date().getFullYear()}`;
});

/* ── Meta ───────────────────────────────────────── */
function applyMeta() {}

/* ── Render: Case Studies ───────────────────────────── */
function renderCaseStudies() {
  const el = document.getElementById('case-studies-list');
  if (!el) return;
  el.innerHTML = CASE_STUDIES.map((cs, i) => `
    <article class="case-study-card reveal-up" data-cs-index="${i}" style="transition-delay:${i * 0.12}s">
      <div class="cs-image-col">
        <img src="${cs.image}" alt="${cs.title}" class="cs-img" loading="lazy">
        <span class="cs-category-badge">${cs.category}</span>
      </div>
      <div class="cs-content-col">
        <div class="cs-outcome-badge">
          <span class="cs-outcome-icon">🏆</span>
          <span class="cs-outcome-text">${cs.outcome}</span>
        </div>
        <h3 class="cs-title">${cs.title}</h3>
        
        <div class="cs-detail-row">
          <span class="cs-detail-label">Who For:</span>
          <span class="cs-detail-val">${cs.whoFor}</span>
        </div>
        
        <div class="cs-detail-row">
          <span class="cs-detail-label">What Built:</span>
          <p class="cs-detail-desc">${cs.whatBuilt}</p>
        </div>

        <div class="cs-footer">
          <div class="cs-stack-list">
            ${cs.stack.map(s => `<span class="cs-stack-tag">${s}</span>`).join('')}
          </div>
          <button class="btn btn-outline btn-cs-more" data-cs-index="${i}">
            Case details ↗
          </button>
        </div>
      </div>
    </article>
  `).join('');

  el.querySelectorAll('.case-study-card, .btn-cs-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('[data-cs-index]');
      if (card) {
        const idx = parseInt(card.dataset.csIndex, 10);
        if (!isNaN(idx)) openProjectModal(idx);
      }
    });
  });
}

/* ── Render: What I'm Building Now ───────────────────────────── */
function renderBuildingNow() {
  const el = document.getElementById('building-grid');
  if (!el) return;
  el.innerHTML = BUILDING_NOW.map((b, i) => `
    <div class="building-card reveal-up" style="transition-delay:${i * 0.1}s">
      <div class="b-header">
        <span class="b-status-pill"><span class="b-pulse-dot"></span>${b.status}</span>
        <span class="b-progress-val">${b.progress} complete</span>
      </div>
      <h3 class="b-title">${b.title}</h3>
      <p class="b-desc">${b.desc}</p>
      <div class="b-stack">
        ${b.stack.map(s => `<span class="b-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Render: Tools Ticker ────────────────────────────────────────────── */
function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const chip = t => `
    <div class="tool-chip">
      ${t.slug
        ? `<img class="tool-chip-logo" src="https://cdn.simpleicons.org/${t.slug}/E9A31B" alt="${t.name}" width="18" height="18" onerror="this.style.display='none'">`
        : `<span class="tool-chip-dot"></span>`
      }
      <span class="tool-chip-name">${t.name}</span>
    </div>
  `;
  const items = TOOLS.map(chip).join('');
  // Duplicate for seamless infinite loop
  track.innerHTML = items + items;
}

/* ── Render: Outcomes ───────────────────────────────────────────────────── */
function renderOutcomes() {
  const el = document.getElementById('outcomes-grid');
  if (!el) return;
  el.innerHTML = OUTCOMES.map((o, i) => `
    <div class="outcome-card reveal-up" style="transition-delay:${i * 0.09}s">
      <div class="outcome-icon">${o.icon}</div>
      <h3 class="outcome-title">${o.title}</h3>
      <p class="outcome-desc">${o.desc}</p>
    </div>
  `).join('');
}

/* ── Render: Stack ──────────────────────────────── */
function renderStack() {
  const el = document.getElementById('stack-rows');
  if (!el) return;
  el.innerHTML = STACK.map((s, i) => `
    <div class="stack-row reveal-up" style="transition-delay:${i * 0.08}s">
      <span class="stack-cat">${s.cat}</span>
      <div class="stack-items">
        ${s.items.map(t => `<span class="stack-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Render: Contact Links ──────────────────────────────── */
function renderContactLinks() {
  const el = document.getElementById('contact-links');
  if (!el) return;
  const links = [
    { label: 'LinkedIn',  sub: null,           icon: 'in', href: ME.links.linkedin },
    { label: 'YouTube',   sub: null,           icon: 'yt', href: ME.links.youtube },
    { label: 'Email',     sub: ME.links.email, icon: 'em', href: `mailto:${ME.links.email}` }
  ];
  el.innerHTML = links.map(l => `
    <a href="${l.href}" class="c-link"
       ${l.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
      <span class="c-icon">${l.icon}</span>
      <span class="c-link-col">
        <span class="c-link-label">${l.label}</span>
        ${l.sub ? `<span class="c-link-sub">${l.sub}</span>` : ''}
      </span>
    </a>
  `).join('');
}

/* ── Nav frosted glass ──────────────────────────── */
function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const fn = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', fn, { passive: true });
  fn();
}

/* ── Scroll animations (reveal-up / left / right / scale) ── */
function initScrollAnimations() {
  // Scroll progress bar
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const prog = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (bar) bar.style.transform = `scaleX(${prog})`;
  }, { passive: true });

  // Intersection observer for all reveal classes
  const selectors = '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .animate-on-scroll';
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(selectors).forEach(el => io.observe(el));
}

/* ── Counter animation for stat numbers ─────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const dur    = 1600; // ms
      const start  = performance.now();
      const tick   = (now) => {
        const p       = Math.min((now - start) / dur, 1);
        const eased   = 1 - Math.pow(1 - p, 4); // ease-out quart
        el.textContent = Math.round(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
}

/* ── Parallax — hero photo moves slowly on scroll ── */
function initParallax() {
  const photo = document.getElementById('hero-photo');
  if (!photo) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) {
        photo.style.transform = `translateY(${y * 0.12}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ── Contact form ───────────────────────────────── */
function initForm() {
  const form  = document.getElementById('contact-form');
  const ok    = document.getElementById('form-ok');
  const btn   = document.getElementById('form-btn');
  const label = document.getElementById('btn-label');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    btn.disabled = true; label.textContent = 'Sending…';
    try {
      const r = await fetch(form.action, {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
      });
      if (r.ok) { form.style.display = 'none'; ok.style.display = 'block'; }
      else throw new Error();
    } catch {
      label.textContent = 'Failed — email me directly'; btn.disabled = false;
    }
  });
}

/* ── Interactive AI Chatbot Widget ───────────────────────────── */
function initChatbot() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const closeBtn  = document.getElementById('chat-close-btn');
  const modal     = document.getElementById('chat-modal');
  const messages  = document.getElementById('chat-messages');
  const form      = document.getElementById('chat-form');
  const input     = document.getElementById('chat-input');
  const quickOpts = document.getElementById('chat-quick-options');
  const dot       = document.querySelector('.chat-unread-dot');

  if (!toggleBtn || !modal || !messages) return;

  const toggleModal = (show) => {
    const isHidden = modal.classList.contains('chat-modal-hidden');
    const shouldShow = show !== undefined ? show : isHidden;
    modal.classList.toggle('chat-modal-hidden', !shouldShow);
    if (shouldShow) {
      if (dot) dot.style.display = 'none';
      if (input) input.focus();
    }
  };

  toggleBtn.addEventListener('click', () => toggleModal());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));

  const appendMsg = (text, sender, isHtml = false) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}-msg`;
    if (isHtml) {
      msgDiv.innerHTML = text;
    } else {
      msgDiv.textContent = text;
    }
    messages.appendChild(msgDiv);
    messages.scrollTop = messages.scrollHeight;
  };

  const DISCLAIMER = `<br><br><em>I'm an AI assistant, so I provide estimated ideas & guidance! For exact project details or a custom quote, connect directly via WhatsApp / Call at <strong>+91 9258706148</strong> or email — fast communication works best!</em><br><a href="https://wa.me/919258706148?text=Hi%20Nitin,%20I'd%20like%20to%20discuss%20a%20project" target="_blank" class="chat-whatsapp-btn">💬 Chat on WhatsApp (+91 9258706148)</a>`;

  const getBotResponse = (q) => {
    const query = q.toLowerCase();
    
    if (query.includes('cost') || query.includes('price') || query.includes('rate') || query.includes('budget') || query.includes('timeline')) {
      return `Projects range based on scope — small automation workflows or business sites start around 5+ days turnaround, while full AI SaaS apps and custom voice agents take 1-3 weeks.` + DISCLAIMER;
    }
    if (query.includes('service') || query.includes('ai') || query.includes('workflow') || query.includes('bot') || query.includes('automation') || query.includes('voice')) {
      return `Nitin builds production AI voice agents (Vapi), custom n8n workflows, WhatsApp business automations, full-stack Next.js web applications, and AI support widgets trained on custom data.` + DISCLAIMER;
    }
    if (query.includes('contact') || query.includes('phone') || query.includes('whatsapp') || query.includes('call') || query.includes('email') || query.includes('number')) {
      return `You can connect directly with Nitin via Phone / WhatsApp at <strong>+91 9258706148</strong> or via Email at <strong>nitinmishra04821@gmail.com</strong>. Direct communication, zero agency layers!` + DISCLAIMER;
    }
    if (query.includes('fast') || query.includes('ship') || query.includes('process') || query.includes('time') || query.includes('day')) {
      return `Nitin focuses on rapid production shipping. A full business web app with analytics & tracking goes live in as fast as 5+ days.` + DISCLAIMER;
    }
    
    return `That sounds like a great project topic! Nitin specializes in custom web development, AI automation pipelines, and smart agents.` + DISCLAIMER;
  };

  const handleUserInput = (text) => {
    if (!text || !text.trim()) return;
    appendMsg(text, 'user');
    if (input) input.value = '';

    setTimeout(() => {
      const resp = getBotResponse(text);
      appendMsg(resp, 'bot', true);
    }, 350);
  };

  if (quickOpts) {
    quickOpts.addEventListener('click', (e) => {
      const btn = e.target.closest('.chat-opt-btn');
      if (!btn) return;
      handleUserInput(btn.textContent);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input) handleUserInput(input.value);
    });
  }
}

/* ── Project Detail Modal Handler ───────────────────────────── */
function initProjectModal() {
  const modal   = document.getElementById('project-modal');
  const overlay = document.getElementById('proj-modal-overlay');
  const closeBtn= document.getElementById('proj-modal-close');

  if (!modal) return;

  const close = () => {
    modal.classList.add('proj-modal-hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (overlay) overlay.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('proj-modal-hidden')) close();
  });
}

function openProjectModal(index) {
  const p = CASE_STUDIES[index];
  if (!p) return;

  const modal   = document.getElementById('project-modal');
  const content = document.getElementById('proj-modal-content');
  if (!modal || !content) return;

  const highlights = [
    `Designed for real production use with high-reliability automated workflows.`,
    `Seamlessly handles incoming data, error recovery, and user interactions automatically.`,
    `Delivers instant notifications & status updates for complete operational transparency.`
  ];

  content.innerHTML = `
    <img src="${p.image}" alt="${p.title}" class="modal-hero-img">
    <div class="modal-body">
      <div class="modal-badges">
        <span class="badge-type">${p.category}</span>
        ${p.live ? `<span class="badge-live"><span class="badge-live-dot"></span>Live in Production</span>` : ''}
      </div>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-tagline"><strong>Outcome:</strong> ${p.outcome}</p>

      <div class="modal-section">
        <h4 class="modal-sec-title">Who it was built for</h4>
        <p class="modal-sec-text">${p.whoFor}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-sec-title">What was built</h4>
        <p class="modal-sec-text">${p.whatBuilt}</p>
        <ul class="modal-highlights">
          ${highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4 class="modal-sec-title">Tech Stack &amp; Tools Used</h4>
        <div class="modal-stack-list">
          ${p.stack.map(s => `<span class="modal-stack-tag">${s}</span>`).join('')}
        </div>
      </div>

      <div class="modal-cta">
        <span class="modal-cta-text">Need a similar solution for your business?</span>
        <a href="https://wa.me/919258706148?text=Hi%20Nitin,%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(p.title)}" 
           target="_blank" class="btn btn-primary" style="padding:10px 20px; font-size:0.85rem;">
          Discuss on WhatsApp &thinsp;→
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('proj-modal-hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/* ── Video Testimonials Handler ───────────────────────────── */
function initTestimonials() {
  const videoWraps = document.querySelectorAll('.video-frame-wrap');
  if (!videoWraps.length) return;

  // 1. Lazy load muted preview loops when scrolled into view
  const previewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrap = entry.target;
        const previewVideo = wrap.querySelector('.video-preview-loop');
        if (previewVideo && !previewVideo.src && previewVideo.dataset.src) {
          previewVideo.src = previewVideo.dataset.src;
          previewVideo.play().catch(() => {});
        }
        previewObserver.unobserve(wrap);
      }
    });
  }, { threshold: 0.25 });

  videoWraps.forEach(wrap => previewObserver.observe(wrap));

  // 2. Play full testimonial video with audio on user click
  videoWraps.forEach(wrap => {
    wrap.addEventListener('click', () => {
      const fullSrc = wrap.dataset.fullSrc;
      const poster  = wrap.dataset.poster;
      if (!fullSrc) return;

      // Replace preview video element with full video player
      wrap.innerHTML = `
        <video class="video-active-full" controls autoplay playsinline poster="${poster}">
          <source src="${fullSrc}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;

      const fullVideo = wrap.querySelector('.video-active-full');
      if (fullVideo) {
        fullVideo.muted = false;
        fullVideo.volume = 1.0;
        fullVideo.play().catch(() => {});
      }
    });
  });
}



