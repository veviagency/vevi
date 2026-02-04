

# Add Slide-in Animations to Service Cards and Enhance Hover Effects

## Overview

This plan adds a "slide from right" animation to the 3 service cards (OrthoBot V1, OrthoCall, Specialized Marketing) in the Services section on the home page, and makes the existing hover effect more distinctive. The section header text will remain static (no animation).

## What Changes

### 1. Create New "Slide from Left" Animation

The cards should slide in from the right side of the screen moving to the left (their final position). This requires a new keyframe animation in CSS.

**File: `src/index.css`**

Add a new keyframe animation `slideFromRight` that:
- Starts with opacity 0 and translateX(40px) (off to the right)
- Ends at opacity 1 and translateX(0) (final position)
- Duration: 0.7s for a smooth, not-too-fast motion

### 2. Enhance Card Hover Effect

The current hover effect is subtle. We'll make it more distinctive with:
- Larger shadow on hover
- Slightly more lift (transform: translateY(-6px) instead of -2px)
- Border color change to primary on hover
- Smooth transition timing

**File: `src/index.css`**

Update the `.card-elevated` class:
- Increase the hover shadow depth and spread
- Increase the translateY value for more lift
- Add border-color transition

### 3. Update Services Component

**File: `src/components/sections/Services.tsx`**

- Remove animation from section header (keep it static)
- Change card animation from `animate-slide-up` to the new `animate-slide-from-right`
- Adjust stagger delay timing (0.15s between cards for smooth sequential effect)

---

## Technical Details

### CSS Changes (src/index.css)

**New keyframe animation:**
```css
@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-from-right {
  animation: slideFromRight 0.7s ease-out forwards;
}
```

**Enhanced hover effect:**
```css
.card-elevated {
  box-shadow: var(--card-shadow);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.card-elevated:hover {
  box-shadow: 0 12px 40px -8px hsl(200 25% 15% / 0.18);
  transform: translateY(-6px);
  border-color: hsl(var(--primary) / 0.3);
}
```

### Services Component Changes

```jsx
{/* Section Header - NO animation */}
<div className="text-center max-w-4xl mx-auto mb-16">
  <h2>Everything You Need to Grow</h2>
  <p>Our integrated system...</p>
</div>

{/* Cards - with slide-from-right animation */}
{services.map((service, index) => (
  <div
    className="... animate-slide-from-right"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    ...
  </div>
))}
```

---

## Visual Result

1. **On page load:** The section header appears immediately (no animation)
2. **Cards animate in sequence:**
   - OrthoBot V1 slides in from right (0s delay)
   - OrthoCall slides in from right (0.15s delay)
   - Specialized Marketing slides in from right (0.3s delay)
3. **On hover:** Cards lift more noticeably with a stronger shadow and subtle primary border highlight

