# Campus Dive UI - Local Tailwind Setup

## Project Structure
```
ui-designs/
├── src/
│   ├── input.css          # Tailwind directives + custom CSS
│   └── output.css         # Generated CSS (do not edit)
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # NPM dependencies & scripts
├── posts.html
├── single-post.html
├── user-profile.html
└── group-profile.html
```

## Setup Complete ✓

Tailwind CSS has been configured locally for your Campus Dive UI project. Here's what was done:

### 1. **Installed Dependencies**
- `tailwindcss` - CSS framework
- `postcss` - CSS processor
- `autoprefixer` - Vendor prefixes

### 2. **Created Configuration Files**
- `tailwind.config.js` - Configured with your custom colors and dark mode
- `postcss.config.js` - Configured for Tailwind + Autoprefixer
- `src/input.css` - Contains all Tailwind directives and custom styles

### 3. **Generated Output CSS**
- `src/output.css` - Your compiled Tailwind CSS (ready to use)
- Updated all HTML files to link to the built CSS instead of CDN

### 4. **Added Scripts to package.json**
- `npm run build` - Build CSS once
- `npm run watch` - Watch for changes and rebuild automatically

## Usage

### Development (Watch Mode)
Running this will rebuild your CSS whenever you modify `src/input.css`:
```bash
npm run watch
```

### Production Build
Build the CSS once:
```bash
npm run build
```

## Key Features Configured

✓ **Custom Colors:**
- brand: #5D5CDE
- brandLight: #7D7CFE
- bgDark: #020414
- surfDark: #0B1120
- btnDark: #1E293B

✓ **Dark Mode:** Class-based (`dark:` utilities work)

✓ **Custom Styles:** All animations, transitions, and effects migrated from inline `<style>` tags to `src/input.css`

✓ **Plus Jakarta Sans Font** - Already configured

## Next Steps

1. Test your pages - they should now use the local CSS
2. Run `npm run watch` during development for instant CSS updates
3. Any changes to HTML classes will reflect automatically in watch mode
4. For production, run `npm run build` before deployment

## Notes

- The HTML files are now using `src/output.css` instead of the Tailwind CDN
- All custom animations and styling have been preserved
- No functionality changes - only the CSS delivery method changed
- Theme switching (light/dark mode) is fully functional via localStorage
