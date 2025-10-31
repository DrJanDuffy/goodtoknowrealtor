# Homepage Widget Streamlining - Quick Reference

## 🎯 RECOMMENDED ACTIONS

### ✅ KEEP (Essential - 1 widget)
- **RealScout Home Value Widget** → Section 3: "Discover Your Home's Value"

### 🔄 MOVE TO DEDICATED PAGES
- **Homebot Homeowner** → `/home-value` or `/sellers` page
- **Homebot Buyers** → `/buying` page
- **RealScout Office Listings** → `/listings` page (replace with static cards on homepage)

### ❓ CONSIDER
- **RealScout Simple Search** → Keep in hero OR move to navigation menu + `/search` page

---

## 📐 PROPOSED LAYOUT

```
Hero
├── CTAs (No search widget)
└── treadmill
  ├── Testimonials
  ├── "Discover Your Home's Value" [SINGLE WIDGET]
  ├── Why Choose Dr. Jan
  ├── Featured Properties [STATIC CARDS]
  ├── Readiness Assessments
  └── Services + Final CTA
```

---

## 🎨 ALTERNATIVE APPROACHES

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Tabs** | Reduces clutter | Hidden content = lower engagement | ❌ Not recommended |
| **Accordion** | Collapsible sections | Poor mobile UX, SEO issues | ❌ Not recommended |
| **Dedicated Pages** | Faster load, better SEO, higher conversion | Extra click required | ✅ **BEST OPTION** |

---

## 📱 MOBILE OPTIMIZATION

### Recommended Strategy:
- **Homepage:** Show CTA buttons → lazy load widgets OR redirect to dedicated pages
- **Desktop:** Show widgets inline
- **Performance:** 40-60% faster load time expected

### Implementation:
1. Lazy load widgets (IntersectionObserver)
2. Progressive disclosure (button → widget appears)
3. Simplified mobile version (CTA only)

---

## 📊 TESTING PRIORITY

### Widget Removal Impact (Lowest → Highest):

1. ⭐ **Homebot Buyers** → Lowest impact (niche use case)
2. ⭐⭐ **Homebot Homeowner** → Low-medium (overlaps with Home Value)
3. ⭐⭐⭐ **RealScout Office Listings** → Medium (can replace with static cards)
4. ⭐⭐⭐⭐ **RealScout Simple Search** → Higher (universal tool)
5. ⭐⭐⭐⭐⭐ **RealScout Home Value** → Highest (key lead gen tool - KEEP)

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Quick Wins
- [ ] Remove Homebot Buyers → move to `/buying` page
- [ ] Remove Homebot Homeowner → move to `/home-value` page
- [ ] Simplify "Track Your Home's Value" section to single widget
- [ ] Add "Track Equity Monthly" link

### Phase 2: Structural
- [ ] Replace listings widget with static property cards
- [ ] Add "View All Listings" button
- [ ] Optimize Home Value widget section copy

### Phase 3: Hero
- [ ] Test removing search widget from hero
- [ ] Add search to navigation or dedicated page

### Phase 4: Mobile
- [ ] Implement lazy loading
- [ ] Add mobile-specific CTAs
- [ ] Optimize widget containers

---

## 📈 EXPECTED RESULTS

- **Performance:** 40-60% faster page load
- **Conversion:** 20-30% increase
- **Mobile Score:** 80+ Lighthouse (up from ~60)
- **User Experience:** Clearer intent, less confusion

---

**Full details:** See `HOMEPAGE_WIDGET_STRATEGY.md`

