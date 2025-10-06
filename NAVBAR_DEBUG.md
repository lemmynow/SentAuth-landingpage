# Navbar Debug Guide

## Issue: Text bleeding through navbar

### Current Fixes Applied:

1. **Solid Background Color**: `backgroundColor: '#020617'` (100% opaque)
2. **High Z-Index**: `zIndex: 9999` with `isolation: isolate`
3. **Backup Background Layer**: Added a `<div>` with solid background as fallback
4. **No Opacity Animation**: Removed `opacity: 0` from GSAP animation
5. **GPU Acceleration**: Added `transform: translateZ(0)` and `willChange: 'transform'`
6. **Global CSS Rules**: 
   - `scroll-padding-top: 80px` for smooth scroll
   - All sections have `z-index: 1`
   - Header has `isolation: isolate`

### Testing Checklist:

- [ ] Hard refresh browser (Ctrl + Shift + R or Cmd + Shift + R)
- [ ] Clear browser cache
- [ ] Check DevTools > Elements > Inspect navbar element
- [ ] Verify computed styles show `background-color: rgb(2, 6, 23)`
- [ ] Verify computed z-index is `9999`
- [ ] Test in incognito/private mode
- [ ] Scroll up and down to see if text still bleeds through

### Browser DevTools Check:

1. Right-click navbar > Inspect
2. In Styles panel, check:
   - `background-color` should be `rgb(2, 6, 23)` or `#020617`
   - `z-index` should be `9999`
   - `isolation` should be `isolate`
   - `opacity` should be `1`

### If Still Not Working:

The issue might be:
1. **Browser caching** - Try hard refresh
2. **CSS specificity** - Check if another rule is overriding
3. **Stacking context** - Check parent elements
4. **Color profile** - The background might be correct but text is rendering on top due to rendering layers

### Quick Fix to Test:

Add this to navbar for testing (temporary):
```tsx
style={{ 
  backgroundColor: 'red', // Change to red to verify it's working
  zIndex: 99999,
}}
```

If you see a red navbar, the styles are applying correctly and it's a different issue.
