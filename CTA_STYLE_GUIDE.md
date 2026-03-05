# CTA Button Style Guide
**Last Updated:** January 2025

## Overview
This guide standardizes all Call-to-Action (CTA) buttons across the website to eliminate confusion and create a consistent user experience.

## CTA Hierarchy

### PRIMARY CTA: Phone Call
**Purpose:** Direct phone call to Dr. Janet Duffy  
**Action:** `tel:702-222-1964`

### SECONDARY CTA: Text Message
**Purpose:** Send text message to Dr. Janet Duffy  
**Action:** `sms:702-222-1964`

---

## 1. PRIMARY CTA: Call Button

### Specifications

#### Text
**Always:** `"Call (702) 222-1964"`  
**No variations.** The text never changes based on context.

#### Color
- **Background:** Green gradient (`from-green-500 to-emerald-600`)
- **Hover:** Darker green gradient (`from-green-600 to-emerald-700`)
- **Text:** White (`text-white`)

#### Styling
```css
Background: Linear gradient (green-500 → emerald-600)
Text Color: White
Font Weight: Bold (font-bold)
Border Radius: 0.75rem (rounded-xl)
Shadow: shadow-xl
Hover Shadow: shadow-2xl
Hover Transform: translate-y-0.5 (slight lift)
Transition: 300ms (duration-300)
```

#### Sizing

**Desktop (Default):**
- Padding: `px-8 py-4` (32px horizontal, 16px vertical)
- Font Size: `text-lg` (18px)
- Min Height: `56px`
- Icon Size: `w-6 h-6` (24px)

**Mobile:**
- Padding: `px-8 py-4` (32px horizontal, 16px vertical)
- Font Size: `text-lg` (18px)
- Min Height: `56px` (maintains touch target)
- Full Width: Yes (when in column layout)

**Large Variant:**
- Padding: `px-10 py-5` (40px horizontal, 20px vertical)
- Font Size: `text-xl` (20px)
- Icon Size: `w-7 h-7` (28px)

**Small Variant:**
- Padding: `px-6 py-3` (24px horizontal, 12px vertical)
- Font Size: `text-base` (16px)
- Icon Size: `w-5 h-5` (20px)

#### Icon
- **Type:** Phone icon (SVG)
- **Position:** Left of text
- **Color:** White (inherits from text)
- **Spacing:** `gap-2` (8px) between icon and text

#### Hover State
- Background darkens (green-600 → emerald-700)
- Shadow increases (shadow-xl → shadow-2xl)
- Slight upward movement (translate-y-0.5)

---

## 2. SECONDARY CTA: Text Button

### Specifications

#### Text
**Always:** `"Send Text"`  
**No variations.** The text never changes based on context.

#### Color
- **Background:** White (`bg-white`)
- **Border:** Gray (`border-2 border-gray-300`)
- **Text:** Dark gray (`text-gray-900`)
- **Hover Background:** Light gray (`hover:bg-gray-50`)
- **Hover Border:** Darker gray (`hover:border-gray-400`)

#### Styling
```css
Background: White
Border: 2px solid gray-300
Text Color: Gray-900
Font Weight: Bold (font-bold)
Border Radius: 0.75rem (rounded-xl)
Shadow: shadow-xl
Hover Shadow: shadow-2xl
Hover Transform: translate-y-0.5 (slight lift)
Transition: 300ms (duration-300)
```

#### Sizing

**Desktop (Default):**
- Padding: `px-8 py-4` (32px horizontal, 16px vertical)
- Font Size: `text-lg` (18px)
- Min Height: `56px`
- Icon Size: `w-6 h-6` (24px)

**Mobile:**
- Padding: `px-8 py-4` (32px horizontal, 16px vertical)
- Font Size: `text-lg` (18px)
- Min Height: `56px` (maintains touch target)
- Full Width: Yes (when in column layout)

**Large Variant:**
- Padding: `px-10 py-5` (40px horizontal, 20px vertical)
- Font Size: `text-xl` (20px)
- Icon Size: `w-7 h-7` (28px)

**Small Variant:**
- Padding: `px-6 py-3` (24px horizontal, 12px vertical)
- Font Size: `text-base` (16px)
- Icon Size: `w-5 h-5` (20px)

#### Icon
- **Type:** Text message/chat bubble icon (SVG)
- **Position:** Left of text
- **Color:** Gray-900 (inherits from text)
- **Spacing:** `gap-2` (8px) between icon and text

#### Hover State
- Background lightens (white → gray-50)
- Border darkens (gray-300 → gray-400)
- Shadow increases (shadow-xl → shadow-2xl)
- Slight upward movement (translate-y-0.5)

---

## 3. Button Pair Layout

### Spacing Between Buttons

**Default:** `gap-4` (16px)  
**Tight:** `gap-3` (12px) - Use in tight spaces  
**Loose:** `gap-6` (24px) - Use for emphasis

### Layout Options

#### Row Layout (Desktop)
- Buttons side-by-side
- Both buttons equal width (when space allows)
- Responsive: Stacks to column on mobile (`flex-col sm:flex-row`)

#### Column Layout (Mobile Default)
- Buttons stacked vertically
- Both buttons full width
- Better for mobile touch targets

---

## 4. Placement Guidelines

### Hero Section
- **Layout:** Row (desktop), Column (mobile)
- **Size:** Default
- **Spacing:** Default (gap-4)
- **Position:** Centered below headline/subheadline
- **Both CTAs:** Always show both primary and secondary

### Testimonials Section
- **Layout:** Row (desktop), Column (mobile)
- **Size:** Default
- **Spacing:** Default (gap-4)
- **Position:** Below testimonials, centered
- **Both CTAs:** Always show both

### Services Section
- **Layout:** Row (desktop), Column (mobile)
- **Size:** Default
- **Spacing:** Default (gap-4)
- **Position:** At end of services section, centered
- **Both CTAs:** Always show both

### Feature Blocks
- **Layout:** Column (always)
- **Size:** Small or Default
- **Spacing:** Tight (gap-3)
- **Position:** Bottom of each feature card
- **Both CTAs:** Optional - Can show only primary if space is limited

### Footer
- **Layout:** Row (desktop), Column (mobile)
- **Size:** Default
- **Spacing:** Default (gap-4)
- **Position:** In footer CTA section
- **Both CTAs:** Always show both

### Mobile Sticky Bar
- **Layout:** Row (horizontal)
- **Size:** Small (icon-only or compact text)
- **Spacing:** Tight (gap-2)
- **Position:** Fixed bottom of viewport
- **Both CTAs:** Always show both (as icons or compact buttons)

---

## 5. Text Variants

### ❌ DO NOT USE
- "Schedule Consultation"
- "Schedule Your Free Consultation"
- "Schedule Private Consultation"
- "Get Started Today"
- "Contact Dr. Duffy"
- "Browse Properties"
- "Learn More →"
- "Start Assessment"
- Any context-specific text

### ✅ ALWAYS USE
**Primary CTA:** `"Call (702) 222-1964"`  
**Secondary CTA:** `"Send Text"`

**Why?** Consistency builds trust. Users recognize the same CTAs throughout the site, reducing cognitive load and decision paralysis.

---

## 6. Brand Voice Alignment

### Recommended Text Tone
**"Call (702) 222-1964"** matches the **friendly expert neighbor** tone because:
- Direct and action-oriented (not pushy)
- Professional (includes area code)
- Personal (shows accessibility)
- No marketing fluff

**"Send Text"** is simple, clear, and non-intimidating:
- Short and friendly
- Appeals to text-preferred users
- Low commitment action

---

## 7. Tailwind CSS Classes

### Primary Phone CTA
```tsx
className="
  inline-flex items-center justify-center gap-2
  bg-gradient-to-r from-green-500 to-emerald-600
  text-white font-bold rounded-xl
  shadow-xl hover:shadow-2xl
  transition-all duration-300
  hover:from-green-600 hover:to-emerald-700
  transform hover:-translate-y-0. مصرف
  min-h-[56px]
  px-8 py- WP-4 text-lg
"
```

### Secondary Text CTA
```tsx
className="
  inline-flex items-center justify-center gap-2
  bg-white border-2 border-gray-300
  text-gray-900 font-bold rounded-xl
  shadow-xl hover:shadow-2xl
  transition-all duration-300
  hover:bg-gray-50 hover:border-gray-400
  transform hover:-translate-y-0.5
  min-h-[56px]
  px-8 py-4 text-lg
"
```

### Button Pair Container
```tsx
className="
  flex items-center justify-center
  flex-col sm:flex-row
  gap-4
"
```

---

## 8. Component Usage

### Import
```tsx
import { 
  PrimaryPhoneCTA, 
  SecondaryTextCTA, 
  CTAPair 
} from '@/components/ui/StandardCTA';
```

### Basic Usage - Single Button
```tsx
<PrimaryPhoneCTA />
<SecondaryTextCTA />
```

### Usage - Button Pair
```tsx
<CTAPair />
```

### Usage - Custom Layout
```tsx
<CTAPair 
  layout="column"    // 'row' | 'column'
  spacing="tight"    // 'tight' | 'default' | 'loose'
  size="large"       // 'small' | 'default' | 'large'
  fullWidth={true}   // boolean
/>
```

### Usage - Individual Buttons with Customization
```tsx
<PrimaryPhoneCTA 
  size="large"
  fullWidth={false}
  className="mt-8"  // Additional classes
/>

<SecondaryTextCTA 
  size="small"
  fullWidth={true}
/>
```

---

## 9. Mobile Considerations

### Button Sizing
- **Minimum Height:** 56px (WCAG AA compliant touch target)
- **Text Size:** Never smaller than `text-base` (16px)
- **Padding:** Maintain adequate padding for touch
- **Full Width:** Buttons should be full-width when stacked

### Mobile Sticky Bar
- **Height:** Minimum 80px
- **Position:** Fixed bottom, above mobile keyboard
- **Z-index:** High (z-50)
- **Buttons:** Can be icon-only with labels, or compact text buttons
- **Spacing:** Ensure content padding-bottom to prevent overlap

---

## 10. Accessibility

### ARIA Labels
- Primary: `aria-label="Call Dr. Janet Duffy at (702) 222-1964"`
- Secondary: `aria-label="Send text message to Dr. Janet Duffy at (702) 222-1964"`

### Keyboard Navigation
- Both buttons are focusable
- Focus ring: Blue outline (2px solid)
- Focus offset: 2px

### Screen Readers
- Icons marked as `aria-hidden="true"`
- Text labels provide context
- Button type clear from aria-label

---

## 11. Implementation Checklist

When adding CTAs to a new section:

- [ ] Use `PrimaryPhoneCTA` or `CTAPair` component
- [ ] Text is exactly "Call (702) 222-1964" (no variations)
- [ ] Secondary button text is exactly "Send Text"
- [ ] Green gradient for primary, white with border for secondary
- [ ] Buttons are 56px minimum height
- [ ] Spacing between buttons is 16px (gap-4) default
- [ ] Mobile: Buttons stack vertically and are full-width
- [ ] Desktop: Buttons can be side-by-side
- [ ] Hover states work correctly
- [ ] Icons are present and properly sized
- [ ] ARIA labels are included
- [ ] Tested on mobile device

---

## 12. Migration Notes

### Replacing Old CTAs

**Old:** `"Schedule Consultation"` button  
**New:** Use `CTAPair` component

**Old:** `"Browse Properties"` amber button  
**New:** Use `PrimaryPhoneCTA` (convert to call action)

**Old:** Various text link CTAs  
**New:** Use `SecondaryTextCTA` or `CTAPair`

**Old:** Blue buttons with different text  
**New:** Replace with green `PrimaryPhoneCTA`

---

## 13. Examples by Page Section

### Hero Section
```tsx
<CTAPair size="default" spacing="default" />
```

### Services Section
```tsx
<CTAPair size="default" spacing="default" className="mt-12" />
```

### Footer CTA Block
```tsx
<div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
    Ready to Start Your Real Estate Journey?
  </h3>
  <CTAPair 
    size="default" 
    spacing="default"
    className="mt-6"
  />
</div>
```

### Mobile Sticky Bar
```tsx
<div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
  <div className="bg-blue-600 rounded-xl shadow-2xl p-4">
    <CTAPair 
      size="small" 
      spacing="tight"
      layout="row"
      fullWidth={false}
    />
  </div>
</div>
```

---

## Questions?

For questions or clarifications about CTA usage, refer to this guide or check the component implementation in `src/components/ui/StandardCTA.tsx`.
