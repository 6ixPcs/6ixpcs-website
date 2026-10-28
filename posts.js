/**
 * 6IX PCS LABS - Posts Database
 * 
 * To add a new article or benchmark:
 * 1. Duplicate "template-guide.html" or "template-review.html".
 * 2. Save it with a new name (e.g., "ps4-goldhen-guide.html" or "rtx-3070-benchmarks.html").
 * 3. Add an entry at the TOP of this list below.
 * 4. Save and push to GitHub! Cloudflare will automatically display it.
 */

window.POSTS_DATA = [
  {
    id: "rx-5700xt-2026",
    category: "benchmark",
    categoryLabel: "GPU Benchmark",
    date: "2026-10-20",
    title: "RX 5700XT in 2026: Modern AAA Game Benchmarks & Thermals",
    description: "Testing how AMD's legendary budget 8GB card holds up in modern AAA titles at 1080p High and FSR Balanced settings.",
    url: "template-review.html",
    ctaText: "Read Full Benchmark",
    pills: [
      "VRAM: 8 GB GDDR6",
      "TDP: 225 W",
      "1080p Pass",
      "Value: Under $200 CAD"
    ],
    tags: ["rx 5700xt", "5700 xt", "amd", "radeon", "gpu", "benchmark", "fps", "thermals", "budget gaming"]
  },
  {
    id: "switch-atmosphere-guide",
    category: "modding",
    categoryLabel: "Console Guide",
    date: "2026-10-18",
    title: "Nintendo Switch Hekate & Atmosphere: Post-Mod Setup & Usage Guide",
    description: "Everything you need to know after picking up your modded Switch from 6IX PCS: booting into emuMMC, installing themes, and safe SD card management.",
    url: "template-guide.html",
    ctaText: "View Step-by-Step Guide",
    pills: [
      "Device: Switch V1/V2/OLED",
      "CFW: Atmosphere",
      "Difficulty: Beginner",
      "Risk: Very Low"
    ],
    tags: ["switch", "nintendo", "atmosphere", "hekate", "emummc", "cfw", "homebrew", "modding", "payload"]
  },
  {
    id: "3ds-cfw-starter-guide",
    category: "modding",
    categoryLabel: "Console Guide",
    date: "2026-10-10",
    title: "3DS Luma3DS & FBI: How to Install CIA Files & Custom Themes",
    description: "Got your 3DS modded? Here is the complete beginner checklist for downloading homebrew apps, loading CIAs via FBI, and backing up your NAND.",
    url: "template-guide.html",
    ctaText: "View Step-by-Step Guide",
    pills: [
      "Device: 3DS / 2DS / New 3DS",
      "CFW: Luma3DS v13+",
      "Difficulty: Beginner"
    ],
    tags: ["3ds", "2ds", "nintendo 3ds", "luma", "fbi", "cia", "hshop", "universal updater"]
  },
  {
    id: "thermal-throttling-fix",
    category: "pc-guide",
    categoryLabel: "PC Tuning",
    date: "2026-10-05",
    title: "Why Your Gaming PC is Overheating: Thermal Throttling Diagnostics & Repasting",
    description: "Step-by-step troubleshooting for CPU temps hitting 95°C+, dried-out thermal paste replacement, and optimizing case fan intake/exhaust curves.",
    url: "template-guide.html",
    ctaText: "View PC Tutorial",
    pills: [
      "Platform: Intel / AMD",
      "Est. Time: 30 Mins",
      "Tools: PTM7950 / Arctic MX-6"
    ],
    tags: ["thermal throttling", "overheating", "cpu temp", "thermal paste", "repasting", "airflow", "aio", "cooler"]
  }
];
