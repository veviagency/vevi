
# Center "How We Do It" Button on Mobile

## What We'll Do

Add responsive alignment to the "How We Do It" button in the WhyUs section:
- **Desktop (lg and above)**: Button stays left-aligned (current behavior)
- **Mobile**: Button centers horizontally within the left column

## Technical Change

**File: `src/components/sections/WhyUs.tsx`**

Change the button wrapper div on line 63 from:
```jsx
<div className="mt-10">
```

To:
```jsx
<div className="mt-10 flex justify-center lg:justify-start">
```

This uses Tailwind's responsive utilities:
- `flex` - Makes the container a flexbox
- `justify-center` - Centers the button by default (mobile)
- `lg:justify-start` - Left-aligns on large screens (desktop)

This is a single-line change that achieves the responsive centering you want.
