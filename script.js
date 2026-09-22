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
const PROJECTS = [
  {
    type:      "Booking Platform",
    name:      "Dental Booking Platform",
    tagline:   "Appointment booking across multiple clinic locations with automatic confirmations to patients and doctors.",
    image:     "images/proj_booking.jpg",
    stat:      null, statLabel: null,
    metric:    "Live in production",
    stack:     ["Next.js", "Supabase", "Resend", "TypeScript"],
    live:      true,  span: "wide"
  },
  {
    type:      "Web Development",
    name:      "Business Site in 5 Days",
    tagline:   "19 location pages, GA4 analytics and call tracking. Built and live in under a week.",
    image:     "images/proj_website.jpg",
    stat:      "30K+", statLabel: "impressions in the first 6 weeks",
    metric:    "Now on an ongoing SEO retainer",
    stack:     ["TanStack Start", "Vercel", "Supabase", "GA4"],
    live:      true,  span: "normal"
  },
  {
    type:      "AI SaaS",
    name:      "AI SaaS for Field Service",
    tagline:   "Gmail and WhatsApp inbox manager that drafts tone matched replies, auto generates invoices and handles lead follow up.",
    image:     "images/proj_ai_saas.jpg",
    stat:      null, statLabel: null,
    metric:    "Tested live with a real user",
    stack:     ["OpenAI", "Anthropic", "Stripe Connect", "Supabase"],
    live:      true,  span: "normal"
  },
  {
    type:      "Voice AI",
    name:      "AI Voice Agent",
    tagline:   "Handles after hours inbound calls for a care services business with a full staff admin dashboard.",
    image:     "images/proj_voice.jpg",
    stat:      "24/7", statLabel: "call coverage, zero missed calls",
    metric:    "Live and handling real calls",
    stack:     ["Vapi", "n8n", "Supabase", "OpenAI"],
    live:      true,  span: "wide"
  },
  {
    type:      "Automation",
    name:      "WhatsApp Business Automation",
    tagline:   "Automated order confirmations, delivery updates and support replies via WhatsApp Business API for an e-commerce brand.",
    image:     "images/proj_whatsapp.jpg",
    stat:      null, statLabel: null,
    metric:    "Handles hundreds of messages daily",
    stack:     ["n8n", "WhatsApp API", "Supabase", "Twilio"],
    live:      true,  span: "normal"
  },
  {
    type:      "AI Automation",
    name:      "AI Customer Support Agent",
    tagline:   "Embedded GPT-4 chat widget trained on product docs and FAQs, with automatic human handoff when confidence drops.",
    image:     "images/proj_ai_support.jpg",
    stat:      "80%", statLabel: "of tickets resolved without a human",
    metric:    "Running live on a client site",
    stack:     ["OpenAI", "Next.js", "Supabase", "Resend"],
    live:      true,  span: "normal"
  },
  {
    type:      "Data Pipeline",
    name:      "E-commerce Analytics Pipeline",
    tagline:   "Pulls Shopify sales, ad spend and inventory data into a unified dashboard updated in real time.",
    image:     "images/proj_analytics.jpg",
    stat:      null, statLabel: null,
    metric:    "Replaced 3 separate reporting tools",
    stack:     ["n8n", "Shopify API", "Supabase", "GA4"],
    live:      true,  span: "wide"
  },
  {
    type:      "Automation",
    name:      "Social Content Pipeline",
    tagline:   "Content calendar to published post pipeline — generates captions, resizes images and schedules across platforms.",
    image:     "images/proj_social.jpg",
    stat:      null, statLabel: null,
    metric:    "10 hours of manual work saved per week",
    stack:     ["n8n", "OpenAI", "Airtable", "Buffer API"],
    live:      false, span: "normal"
  },
  {
    type:      "SaaS",
    name:      "Multi-tenant Client Portal",
    tagline:   "White-label portal with role-based access, custom branding per client and automated onboarding flows.",
    image:     "images/proj_saas_portal.jpg",
    stat:      null, statLabel: null,
    metric:    "4 clients live on the same codebase",
    stack:     ["Next.js", "Supabase", "Stripe Connect", "TypeScript"],
    live:      true,  span: "normal"
  },
  {
    type:      "Automation",
    name:      "Google Maps Lead Scraper",
    tagline:   "Enter a zip code and category. Get clean business leads written to Google Sheets automatically.",
    image:     "images/proj_leads.jpg",
    stat:      null, statLabel: null,
    metric:    "Used in real outbound sales",
    stack:     ["n8n", "Google Sheets API"],
    live:      false, span: "normal"
  },
  {
    type:      "Automation",
    name:      "SEO Content Planning Pipeline",
    tagline:   "Turns a raw keyword list into a writer ready content plan. Solves the real SEO bottleneck.",
    image:     "images/proj_seo.jpg",
    stat:      null, statLabel: null,
    metric:    "Eliminates manual keyword clustering",
    stack:     ["n8n", "OpenAI", "Google Sheets"],
    live:      false, span: "normal"
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
  { name: "OpenAI",    slug: "openai",      color: "FFFFFF" },  // white (brand is black)
  { name: "Claude",    slug: "anthropic",   color: "CC8B5E" },  // warm amber-brown
  { name: "Lovable",   slug: null,          color: null     },
  { name: "n8n",       slug: "n8n",         color: "EA4B71" },  // official n8n pink
  { name: "Airtable",  slug: "airtable",    color: "18BFFF" },  // official Airtable cyan
  { name: "Make",      slug: "make",        color: "9B59D0" },  // Make purple (lightened)
  { name: "Supabase",  slug: "supabase",    color: "3ECF8E" },  // official Supabase green
  { name: "Vercel",    slug: "vercel",      color: "FFFFFF" },  // white (brand is black)
  { name: "Next.js",   slug: "nextdotjs",   color: "FFFFFF" },  // white (brand is black)
  { name: "Vapi",      slug: null,          color: null     },
  { name: "Zapier",    slug: "zapier",      color: "FF4A00" },  // official Zapier orange
  { name: "Notion",    slug: "notion",      color: "FFFFFF" },  // white (brand is black)
  { name: "Stripe",    slug: "stripe",      color: "635BFF" },  // official Stripe indigo
  { name: "WhatsApp",  slug: "whatsapp",    color: "25D366" },  // official WhatsApp green
  { name: "Shopify",   slug: "shopify",     color: "96BF48" },  // official Shopify green
  { name: "Twilio",    slug: "twilio",      color: "F22F46" },  // official Twilio red
  { name: "Cursor",    slug: "cursor",      color: "FFFFFF" },
  { name: "GitHub",    slug: "github",      color: "FFFFFF" },
];

const OUTCOMES = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: "A system that actually ships.",
    desc:  "Production apps and automations go live in days, not months — and keep running without babysitting after handoff."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    title: "More customers finding you.",
    desc:  "SEO and local search work that shows up in real impressions and clicks — not a report full of vanity metrics."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>`,
    title: "Your busywork, automated away.",
    desc:  "AI workflows and voice agents handle bookings, follow-ups, replies and lead gen so you don't have to think about them."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: "One person. No layers.",
    desc:  "You talk directly to the person building it. Fast turnarounds, honest timelines, zero agency runaround."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    title: "Built to grow with you.",
    desc:  "Systems designed to extend as your business needs change — not rigid one-time builds you'll outgrow in six months."
  }
];

/* ============================================================
   END OF EDITABLE SECTION
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  applyMeta();
  renderTicker();
  renderProjects();
  renderOutcomes();
  renderStack();
  renderContactLinks();
  initNav();
  initScrollAnimations();
  initCounters();
  initParallax();
  initForm();
  initChatbot();
  initProjectModal();
  document.getElementById('footer-year').textContent = `© ${new Date().getFullYear()}`;
});

/* ── Meta ───────────────────────────────────────── */
function applyMeta() {
  if (!ME.available) {
    const p = document.getElementById('avail-pill');
    if (p) p.style.display = 'none';
  }
}

/* ── Render: Projects ───────────────────────────── */
function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  el.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal-up"
             data-span="${p.span}"
             data-proj-index="${i}"
             style="transition-delay:${(i % 2) * 0.1}s">
      <div class="card-click-badge">View Overview ↗</div>
      <!-- Project image -->
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
        <div class="card-img-overlay"></div>
      </div>
      <!-- Card content -->
      <div class="card-body">
        <div class="card-badges">
          <span class="badge-type">${p.type}</span>
          ${p.live ? `<span class="badge-live"><span class="badge-live-dot"></span>Live</span>` : ''}
        </div>
        ${p.stat ? `
          <div class="card-stat-block">
            <span class="card-stat">${p.stat}</span>
            <span class="card-stat-label">${p.statLabel}</span>
          </div>
        ` : ''}
        <h3 class="card-title">${p.name}</h3>
        <p class="card-tagline">${p.tagline}</p>
        <div class="card-stack">
          ${p.stack.map(s => `<span class="card-tag">${s}</span>`).join('')}
        </div>
        <div class="card-metric">
          <span class="card-metric-icon">◆</span>
          <span>${p.metric}</span>
        </div>
      </div>
    </article>
  `).join('');

  // Add click handlers for project modal
  el.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.projIndex, 10);
      if (!isNaN(idx)) openProjectModal(idx);
    });
  });
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
  const p = PROJECTS[index];
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
    <img src="${p.image}" alt="${p.name}" class="modal-hero-img">
    <div class="modal-body">
      <div class="modal-badges">
        <span class="badge-type">${p.type}</span>
        ${p.live ? `<span class="badge-live"><span class="badge-live-dot"></span>Live in Production</span>` : ''}
      </div>
      <h2 class="modal-title">${p.name}</h2>
      <p class="modal-tagline">${p.tagline}</p>

      <div class="modal-section">
        <h4 class="modal-sec-title">Project Overview &amp; Impact</h4>
        <p class="modal-sec-text">
          Built to solve real operational bottlenecks. This system streamlines daily manual work into an intuitive, reliable pipeline — ensuring speed, precision, and business scalability.
        </p>
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
        <a href="https://wa.me/919258706148?text=Hi%20Nitin,%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(p.name)}" 
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


