# CTA Standardization Implementation Summary

## ✅ Completed

1. **Standardized CTA Components Created** (`src/components/ui/StandardCTA.tsx`)
   - `PrimaryPhoneCTA` - Green gradient button
   - `SecondaryTextCTA` - White button with border
   - `CTAPair` - Container for both buttons

2. **Style Guide Created** (`CTA_STYLE_GUIDE.md`)
   - Complete specifications for both CTAs
   - Placement guidelines
   - Mobile considerations
   - Accessibility requirements

## 📋 Next Steps - Manual Updates Required

Due to file encoding issues, please manually update the following files:

### 1. Hero Section (`src/components/Home/HeroSection.tsx`)

**Replace lines 50-73 with:**
```tsx
{/* Standardized CTAs */}
<div className='max-w-2xl mx-auto px-2'>
  <CTAPair size="default" spacing="default" />
</div>
```

### 2. Mobile Sticky CTA (`src/components/ui/MobileStickyCTA.tsx`)

**Replace lines 40-66 with:**
```tsx
return (
  <div className='lg:hidden fixed bottom-0 left-0 right-0 z-50'>
    <div className='bg-white border-t border-gray-200 shadow-lg p-3'>
      <div className='flex items-center justify-around gap-2'>
        <div className='flex-1'>
          <PrimaryPhoneCTA 
            size="small" 
            fullWidth={true}
            className="text-sm py-2"
          />
        </div>
        <div className='flex-1'>
          <SecondaryTextCTA 
            size="small" 
            fullWidth={true}
            className="text-sm py-2"
          />
        </div>
      </div>
    </div>
  </div>
);
```

**Also add import at top:**
```tsx
import { PrimaryPhoneCTA, SecondaryTextCTA } from '@/components/ui/StandardCTA';
```

### 3. Footer (`src/components/Globals/Footer/Footer.tsx`)

**Replace the CTA section (around lines 185-198) with:**
```tsx
<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
  <PrimaryPhoneCTA size="default" />
  <SecondaryTextCTA size="default" />
</div>
```

**Add import:**
```tsx
import { PrimaryPhoneCTA, SecondaryTextCTA } from '@/components/ui/StandardCTA';
```

## 🎯 Key Standards

### Primary CTA
- **Text:** Always "Call (702) 222-1964"
- **Color:** Green gradient (from-green-500 to-emerald-600)
- **Icon:** Phone icon on left

### Secondary CTA
- **Text:** Always "Send Text"
- **Color:** White with gray border (border-2 border-gray-300)
- **Icon:** Text message icon on left

### Spacing
- **Between buttons:** gap-4 (16px) default
- **Mobile:** Buttons stack vertically, full width

## ✅ Testing Checklist

- [ ] Hero section shows both CTAs correctly
- [ ] Mobile sticky bar shows both CTAs
- [ ] Footer shows both CTAs
- [ ] All buttons link correctly (tel: and sms:)
- [ ] Buttons are minimum 56px height
- [ ] Mobile stacking works properly
- [ ] Hover states work
- [ ] Icons display correctly

## 📖 Reference

See `CTA_STYLE_GUIDE.md` for complete specifications and usage examples.

