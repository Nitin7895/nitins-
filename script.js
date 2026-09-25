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
    headline: "Rise Catalyst — Custom Website Build & Lead Capture",
    title:    "Rise Catalyst Website Build",
    category: "Web Application / Business Site",
    whoFor:   "Tamada (Co-Founder, Rise Catalyst)",
    whatBuilt:"Built a custom, fast-loading, fully responsive business website for Rise Catalyst, designed to convert visitors into qualified leads.",
    outcome:  "Delivered quickly · High lead conversion · Accelerated client acquisition",
    statBadge:"Fast Turnaround & Lead Growth",
    timeline: "5 days from concept to live",
    image:    "images/client_1_poster.jpg",
    demoVideo: "images/client_1.mp4",
    demoPreview: "images/client_1_preview.mp4",
    demoPoster: "images/client_1_poster.jpg",
    demoBadge:  "🔊 44s Client Verification (Sound)",
    stack:    ["Next.js", "Vercel", "Supabase", "Tailwind CSS"],
    live:     true
  },
  {
    headline: "Service Business Website — Growing Client Inquiry List",
    title:    "Professional Service Business Site",
    category: "Web Development / Lead Gen",
    whoFor:   "Service Business Client",
    whatBuilt:"Designed & built a clean, professionally organized website with streamlined lead capture so potential clients convert effortlessly.",
    outcome:  "Client list actively growing · 100% automated inquiry capture · High-converting UI",
    statBadge:"Active Client List Growth",
    timeline: "4 days deployment, live in production",
    image:    "images/client_2_poster.jpg",
    demoVideo: "images/client_2.mp4",
    demoPreview: "images/client_2_preview.mp4",
    demoPoster: "images/client_2_poster.jpg",
    demoBadge:  "🔊 54s Client Verification (Sound)",
    stack:    ["React", "Next.js", "n8n automation", "Formspree"],
    live:     true
  },
  {
    headline: "SEO Website + AI Content Pipeline — 30K Impressions in 6 Weeks",
    title:    "SEO Site + Content Automation",
    category: "Web & Content Automation",
    whoFor:   "UK-based service business",
    whatBuilt:"Built full website from scratch + n8n workflow that auto-generates SEO content using AI agents for categorization and clustering.",
    outcome:  "30K impressions in 6 weeks · Ranked for 15+ keywords · Content pipeline runs automatically every month",
    statBadge:"30K Impressions in 6 Wks",
    timeline: "5-day initial build, ongoing automation",
    image:    "images/proj_seo.jpg",
    stack:    ["Next.js", "Vercel", "n8n", "Claude AI agents", "Airtable"],
    live:     true
  }
];

const WORKFLOWS = [
  {
    title:       "Google Maps Lead Scraper",
    category:    "n8n / Data Extraction",
    whatItDoes:  "n8n workflow that scrapes business listings from Google Maps, handles concurrent requests, deduplicates by place_id, manages rate limits vs quota errors, and exports clean structured data.",
    image:       "images/wf_gmaps.png",
    keyMetric:   "Processes 500+ businesses per run · Concurrency caps · Zero duplicate data",
    learning:    "Checkpointing and state management matter more than raw speed.",
    stack:       ["n8n", "Google Maps API", "PostgreSQL", "Rate Limit Queue"]
  },
  {
    title:       "Cold Email Follow-up (State in Gmail)",
    category:    "Gmail / Email Automation",
    whatItDoes:  "Gmail automation that encodes campaign metadata in hidden HTML spans, detects when replies come in, switches from broadcast to reply-in-thread sends, and tracks state across multiple sends.",
    image:       "images/wf_cold_email.png",
    keyMetric:   "Handles reply detection · Self-references for ongoing sequences · Idempotent by design",
    learning:    "Hidden spans survive Gmail but not corporate gateways; need opaque IDs and idempotency logs.",
    stack:       ["n8n", "Gmail API", "HTML Metadata", "Webhooks"]
  },
  {
    title:       "SEO Keyword Clustering + Content Pipeline",
    category:    "AI Pipeline / Content Automation",
    whatItDoes:  "Two parallel n8n paths — one categorizes keywords via AI agent, one finds semantic clusters and generates hub + spoke article ideas, outputting structured data to Airtable.",
    image:       "images/wf_seo_cluster.png",
    keyMetric:   "Generates 50+ keyword groups · Auto-creates content calendar · Runs on monthly schedule",
    learning:    "AI clustering isn't deterministic; embeddings + clustering > LLM-only for stability; schema validation at API level prevents JSON breaks.",
    stack:       ["n8n", "Claude API", "Embeddings", "Airtable API"]
  },
  {
    title:       "AI Model Evaluator",
    category:    "LLM Benchmarking / Automation",
    whatItDoes:  "Tests same prompt across Claude, GPT-4, and Gemini in parallel, scores each on clarity/accuracy, and generates comparison reports for internal testing and client evaluations.",
    image:       "images/wf_model_eval.png",
    keyMetric:   "Runs 100+ test prompts · Automated scorecards · Pinpoints winning model per use case",
    learning:    "Structured output matters; parse-and-retry beats prompt wording; parallel testing reveals real differences.",
    stack:       ["n8n", "OpenAI API", "Anthropic API", "Google Gemini API"]
  }
];

const BUILDING_NOW = [
  {
    title:    "Multi-Tenant Plumber SaaS",
    status:   "Active development, beta with 2 clients",
    desc:     "Full SaaS platform for plumbers — WhatsApp AI lead capture, email automation, invoicing, and appointment follow-ups. Currently in beta with 2 clients, ready for broader launch.",
    stack:    ["Next.js", "Supabase", "n8n", "Claude API"],
    progress: "Beta Live"
  },
  {
    title:    "AI Model Evaluator Workflow",
    status:   "In use, framework complete",
    desc:     "n8n workflow that tests the same prompt against Claude, GPT-4, and Gemini in parallel, scores them on clarity/accuracy, and generates comparison reports. Used for internal testing and client evaluations.",
    stack:    ["n8n", "Claude API", "OpenAI API", "Gemini API"],
    progress: "Framework Complete"
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
  renderWorkflows();
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
        ${cs.demoVideo ? `
          <div class="cs-video-frame-wrap video-frame-wrap" data-full-src="${cs.demoVideo}" data-poster="${cs.demoPoster}">
            <video class="video-preview-loop" loop muted playsinline poster="${cs.demoPoster}" preload="none" data-src="${cs.demoPreview || cs.demoVideo}"></video>
            <button class="video-play-btn" aria-label="Play Project Demo Video">
              <span class="play-btn-pulse"></span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <span class="cs-demo-badge">${cs.demoBadge || '🎬 35s Live Demo'}</span>
            <span class="video-duration-badge">0:35</span>
          </div>
        ` : `
          <img src="${cs.image}" alt="${cs.title}" class="cs-img" loading="lazy">
          <span class="cs-category-badge">${cs.category}</span>
        `}
      </div>
      <div class="cs-content-col">
        <div class="cs-header-badge-row">
          <div class="cs-outcome-badge">
            <span class="cs-outcome-icon">🏆</span>
            <span class="cs-outcome-text">${cs.outcome}</span>
          </div>
          <span class="cs-timeline-tag">⚡ ${cs.timeline}</span>
        </div>

        <h3 class="cs-title">${cs.headline}</h3>
        
        <div class="cs-detail-row">
          <span class="cs-detail-label">Who:</span>
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

/* ── Render: Production AI Workflows ───────────────────────────── */
function renderWorkflows() {
  const el = document.getElementById('workflows-list');
  if (!el) return;
  el.innerHTML = WORKFLOWS.map((wf, i) => `
    <article class="workflow-card reveal-up" style="transition-delay:${i * 0.1}s">
      <div class="wf-image-col" onclick="openImageModal('${wf.image}', '${wf.title}')">
        <img src="${wf.image}" alt="${wf.title}" class="wf-img" loading="lazy">
        <div class="wf-img-overlay">
          <span>🔍 Expand Workflow Canvas</span>
        </div>
      </div>
      <div class="wf-content-col">
        <div>
          <div class="wf-header-row">
            <span class="wf-category-tag">${wf.category}</span>
            <span class="cs-timeline-tag">⚡ Production System</span>
          </div>
          <h3 class="wf-title">${wf.title}</h3>
          <p class="wf-desc">${wf.whatItDoes}</p>
          
          <div class="wf-metric-badge">
            <span>📊</span>
            <span>${wf.keyMetric}</span>
          </div>

          <div class="wf-learning-box">
            <div class="wf-learning-header">
              <span>💡</span>
              <span class="wf-learning-title">What I Learned (Production Insight)</span>
            </div>
            <p class="wf-learning-text">${wf.learning}</p>
          </div>
        </div>

        <div class="wf-stack">
          ${wf.stack.map(s => `<span class="wf-stack-tag">${s}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function openImageModal(src, title) {
  const modal   = document.getElementById('project-modal');
  const content = document.getElementById('proj-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="padding: 10px;">
      <h3 style="margin-bottom: 12px; font-size: 1.2rem; font-weight: 700; color: var(--text-h);">${title} — Workflow Canvas</h3>
      <img src="${src}" alt="${title}" style="width:100%; height:auto; border-radius:12px; border:1px solid var(--border);">
    </div>
  `;

  modal.classList.remove('proj-modal-hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
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
        <span class="badge-type" style="background:rgba(217,119,6,0.08); color:var(--amber); border-color:rgba(217,119,6,0.2);">⚡ ${p.timeline}</span>
        ${p.live ? `<span class="badge-live"><span class="badge-live-dot"></span>Live in Production</span>` : ''}
      </div>
      <h2 class="modal-title">${p.headline || p.title}</h2>
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

  // 2. Play full video with audio on user click
  videoWraps.forEach(wrap => {
    wrap.addEventListener('click', (e) => {
      // Prevent click loops if already clicking controls on active video
      if (e.target.tagName === 'VIDEO') return;

      const fullSrc = wrap.dataset.fullSrc;
      const poster  = wrap.dataset.poster;
      if (!fullSrc) return;

      // Pause all other active videos on the page
      document.querySelectorAll('video').forEach(v => {
        try { v.pause(); } catch(err) {}
      });

      // Replace preview loop element with interactive full video player with audio
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
        const playPromise = fullVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Fallback for strict browser autoplay restriction
            fullVideo.muted = false;
            fullVideo.play();
          });
        }
      }
    });
  });
}



