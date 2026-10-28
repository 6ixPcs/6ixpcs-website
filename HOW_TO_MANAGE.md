# 6IX PCS LABS — Management Guide

This setup is built to make running your tech blog/labs section on **GitHub + Cloudflare** effortless without breaking your site.

---

## 📁 File Structure

* **`index.html`**: Your main homepage with services, quote form, and a new "LABS" link in the navbar + teaser banner.
* **`labs.html`**: The Hub page featuring search, category filters (All, Benchmarks, Console Modding, PC Guides), and post cards.
* **`posts.js`**: The post database. Adding a new post to `labs.html` requires only adding 5-8 lines here!
* **`template-guide.html`**: Step-by-step tutorial template (Linus Tech Tips / iFixit style) for console modding, PC building, thermal repasting.
* **`template-review.html`**: Hardware benchmark template (Gamers Nexus style) with test bench specs, visual FPS charts, thermals table, pros & cons, and verdict scorecards.

---

## 🚀 How to Add a New Post in 3 Minutes

### Step 1: Pick and Duplicate a Template
* If writing a tutorial/modding guide: duplicate `template-guide.html` and name it (e.g., `switch-oled-setup.html`).
* If writing a benchmark/review: duplicate `template-review.html` and name it (e.g., `rtx-3070-benchmarks.html`).

### Step 2: Edit Your Content
Open the new HTML file in VS Code or your text editor and swap out:
* Title & intro text.
* Specs, steps, or benchmark numbers.
* Screenshots/photos (`<img src="...">`).

### Step 3: Add to `posts.js`
Open `posts.js` and paste a new block at the top of `window.POSTS_DATA`:

```javascript
{
  id: "rtx-3070-benchmarks",
  category: "benchmark",               // "benchmark", "modding", or "pc-guide"
  categoryLabel: "GPU Benchmark",
  date: "2026-11-01",
  title: "RTX 3070 in 2026: 1440p Benchmarks & Used Value",
  description: "Testing 1440p high settings and DLSS in Black Myth Wukong and Cyberpunk.",
  url: "rtx-3070-benchmarks.html",
  ctaText: "Read Full Benchmark",
  pills: ["VRAM: 8 GB", "1440p Capable", "TDP: 220W"],
  tags: ["rtx 3070", "nvidia", "gpu", "benchmark", "1440p"]
},
```

### Step 4: Commit and Push to GitHub
```bash
git add .
git commit -m "Add RTX 3070 benchmark"
git push
```
Cloudflare Pages will immediately deploy the new article and automatically show it on `labs.html` with real-time search and filter support!
