# Stefano Leone - Personal Website

Modern, performant personal website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with gradient accents
- **Dark Mode**: Native dark mode with localStorage persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**:
  - Zero framework overhead
  - Optimized images (340KB total assets)
  - Minimal JavaScript (~5KB)
  - Lighthouse Score target: 90+
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **SEO Optimized**: Semantic HTML, meta tags, Open Graph

## 📁 Structure

```
/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── variables.css   # CSS custom properties
│   │   ├── base.css        # Reset & typography
│   │   ├── components.css  # Reusable components
│   │   └── main.css        # Layout & sections
│   ├── js/
│   │   ├── theme.js        # Dark mode toggle
│   │   └── animations.js   # Scroll animations & interactions
│   └── images/             # Optimized images
├── manifest.json           # PWA manifest
└── robots.txt              # SEO directives
```

## 🛠 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript**: Vanilla ES6+
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

## 🎨 Design System

### Colors
- Primary: `#0066FF` (Blockchain blue)
- Secondary: `#FF6B35` (AI orange)
- Accent: `#00D9FF` (Cyan)

### Typography
- Font Scale: 12px - 60px
- Font Family: Inter for UI, JetBrains Mono for code

### Spacing
- Base unit: 4px
- Scale: xs(4px) → sm(8px) → md(16px) → lg(24px) → xl(32px) → 5xl(128px)

## 🚀 Local Development

Start a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx http-server -p 8000
```

Visit: http://localhost:8000

## 📦 Deployment

Deployed on **GitHub Pages**:
- Domain: https://allthingsblockchain.tech
- Auto-deploys from `master` branch

## ⚡ Performance

### Before (React)
- JavaScript: 282 KB
- Total Size: ~1.8 MB
- Load Time: 2-3s

### After (Vanilla)
- JavaScript: ~5 KB
- Total Size: ~340 KB
- Load Time: <0.5s

**Improvement**: 96% JS reduction, 81% total size reduction

## 📝 Content Sections

1. **Hero**: Introduction with CTA buttons
2. **About**: Personal background and interests
3. **Services**: Blockchain, AI, Market Insights, Innovation Strategy
4. **Newsletter**: AI for Product Pioneers subscription
5. **Contact**: Professional links (LinkedIn, GitHub)

## 🔧 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2026 Stefano Leone. All rights reserved.

## 🤝 Contact

- LinkedIn: [stefanoleone](https://www.linkedin.com/in/stefanoleone)
- Newsletter: [AI for Product Pioneers](https://www.linkedin.com/newsletters/7058015512634511361)
- Mentorship: [Startup Geeks](https://www.startupgeeks.it/)
