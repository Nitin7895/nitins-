import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const OUT = path.join('C:\\Users\\nitin\\.gemini\\antigravity\\brain\\842fb688-065c-4ba1-af30-b8ce6ad127ea');
const URL = 'http://localhost:3000';

console.log('Output dir:', OUT);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});

// Helper: wait for page to paint fully
async function openPage(width, height) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 45000 });
  // Trigger all animations visible
  await page.evaluate(() => {
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .animate-on-scroll').forEach(el => {
      el.classList.add('visible');
    });
  });
  await new Promise(r => setTimeout(r, 1500));
  return page;
}

// Desktop full page
const desk = await openPage(1440, 900);
await desk.screenshot({ path: OUT + '\\ss_desktop.png', fullPage: true });
console.log('✓ Desktop done');
await desk.close();

// Mobile full page 375px
const mob = await openPage(375, 812);
await mob.screenshot({ path: OUT + '\\ss_mobile.png', fullPage: true });
console.log('✓ Mobile done');
await mob.close();

// Voice card closeup
const vc = await openPage(1440, 900);
const voiceCard = await vc.$('.project-card[data-span="wide"]:nth-of-type(4)');
const allCards = await vc.$$('.project-card');
// Scroll to card index 3 (voice agent, 4th card)
await vc.evaluate(() => {
  const cards = document.querySelectorAll('.project-card');
  if (cards[3]) cards[3].scrollIntoView({ block: 'center' });
});
await new Promise(r => setTimeout(r, 800));
await vc.screenshot({ path: OUT + '\\ss_voice_card.png' });
console.log('✓ Voice card done');
await vc.close();

// Process → Contact boundary
const pc = await openPage(1440, 900);
await pc.evaluate(() => {
  document.getElementById('process')?.scrollIntoView({ block: 'end' });
});
await new Promise(r => setTimeout(r, 800));
await pc.screenshot({ path: OUT + '\\ss_process_contact.png' });
console.log('✓ Process/Contact done');
await pc.close();

// Contact section top
const ct = await openPage(1440, 900);
await ct.evaluate(() => {
  document.getElementById('contact')?.scrollIntoView({ block: 'start' });
});
await new Promise(r => setTimeout(r, 800));
await ct.screenshot({ path: OUT + '\\ss_contact.png' });
console.log('✓ Contact done');
await ct.close();

await browser.close();
console.log('All screenshots saved to', OUT);
