# Project Information

## Overview
- **Framework**: Next.js (React-based framework)
- **Languages**: TypeScript, SCSS
- **Styling**: Custom SCSS with utility classes
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Font Awesome, Custom SVG components

## Directory Structure

### Core Directories
- **`/src/app/`**: Application-specific pages and route groups (using Next.js app directory)
- **`/src/pages/`**: Pages directory for file-based routing
- **`/src/components/`**: Reusable UI components
- **`/src/layouts/`**: Layout components (headers, footers)
- **`/src/data/`**: Data files for dynamic content (TypeScript files)
- **`/src/hooks/`**: Custom React hooks
- **`/public/assets/`**: Static assets (images, fonts, CSS)

### Key Component Directories
- **`/src/components/service/`**: Service-related components
- **`/src/components/pricing/`**: Pricing display components
- **`/src/components/hero-banner/`**: Hero/banner sections
- **`/src/components/gallery/`**: Image gallery components
- **`/src/layouts/headers/`**: Header variations
- **`/src/layouts/footers/`**: Footer variations

## How It Works

### Routing System
- **File-based Routing**: Each file in `/src/pages/` automatically becomes a route
- **Dynamic Routes**: Use bracket notation for dynamic segments (e.g., `[slug].tsx`)
- **Service Pages**: Located at `/src/pages/service/[service-name].tsx`

### Service Links Flow
1. **Homepage** (`/src/pages/homes/home-4.tsx`) displays services via `ServiceFour` component
2. **ServiceFour** (`/src/components/service/service-four.tsx`) contains service data and links
3. Each service link points to: `/service/[service-name]`
4. Service pages use `ServiceDetailTemplate` component for consistent layout

### Current Service Routes
- `/service/branding-&-identity`
- `/service/web-design-&-development`
- `/service/photography-&-visual-content`
- `/service/social-media-management`
- `/service/content-&-email-marketing`

## Modifying Content

### Changing Service Information on Homepage

**File**: `/src/components/service/service-four.tsx`

```typescript
const service_data = [
  {
    id: 1,
    title: "Service Name", // This generates the URL
    desc: "Service description shown on homepage",
    category: ["Category 1", "Category 2", "Category 3"],
  },
  // Add more services...
];
```

**URL Generation**: The title is automatically converted to a URL-friendly format:
- Spaces become hyphens
- Ampersands (&) remain as-is
- All lowercase
- Example: "Web Design & Development" → `/service/web-design-&-development`

### Creating a New Service Page

1. **Create the page file** in `/src/pages/service/[service-name].tsx`
2. **Use the template structure**:

```typescript
import ServiceDetailTemplate from "@/components/service/service-detail-template";
import ServicePricing from "@/components/pricing/service-pricing";

// Define pricing tiers
const pricingTiers = [
  {
    id: 1,
    title: "Tier Name",
    price: 99, // or "Custom" for string
    features: ["Feature 1", "Feature 2"],
    featured: false, // Set true for highlighted tier
  },
];

// Use components in your page
<ServiceDetailTemplate
  subtitle="Service Category"
  title="Service Title"
  introText="Introduction paragraph"
  mainDescription="Main description"
  features={["Feature 1", "Feature 2"]}
  // ... other props
/>
<ServicePricing tiers={pricingTiers} />
```

### Modifying Existing Service Pages

Each service page (`/src/pages/service/[service-name].tsx`) contains:

1. **Service Details Section**:
   - Update `subtitle`, `title`, `introText`, `mainDescription`
   - Modify `features` array
   - Edit `detailSections` for custom content blocks

2. **Pricing Section**:
   - Edit the `pricingTiers` array
   - Modify `title`, `price`, and `features` for each tier
   - Set `featured: true` for the recommended plan

3. **Images**:
   - Replace image paths in `mainImage` and `smallImages` props
   - Images should be stored in `/public/assets/img/`

### Changing Headers and Footers

- **Header**: Replace `<HeaderFour />` with other header variants (e.g., `HeaderEleven`)
- **Footer**: Replace `<FooterFour />` with other footer variants (e.g., `FooterTwo`)
- Available in `/src/layouts/headers/` and `/src/layouts/footers/`

### Updating Global Styles

- **Main styles**: `/public/assets/css/`
- **Component-specific styles**: Update className attributes in components
- **Colors & branding**: Modify SCSS variables in the main stylesheet

## Testing Your Changes

### Local Development
1. Run `npm install` (first time only)
2. Run `npm run dev` to start development server
3. Visit `http://localhost:3000` (or the displayed port)
4. Navigate to homepage and click each service link
5. Verify content, pricing, and images display correctly

### Checklist for Service Links
- [ ] Service appears on homepage (`ServiceFour` component)
- [ ] Clicking service title navigates to correct page
- [ ] Clicking "See Details" button navigates to correct page
- [ ] Service page displays correct title and description
- [ ] Pricing section shows 3 tiers with correct information
- [ ] Images load properly
- [ ] Footer and header display correctly
- [ ] Mobile responsiveness works

## Common Modifications

### Add a New Service
1. Add service data to `service_data` array in `/src/components/service/service-four.tsx`
2. Create new page file: `/src/pages/service/[url-friendly-name].tsx`
3. Copy structure from existing service page
4. Update content, pricing, and images
5. Test the link from homepage

### Change Service Pricing
1. Open service page file: `/src/pages/service/[service-name].tsx`
2. Find `pricingTiers` array
3. Update `price`, `features`, or add/remove tiers
4. Save and refresh page to see changes

### Update Service Images
1. Add new images to `/public/assets/img/`
2. Update image paths in service page:
   - `mainImage`: Large hero image
   - `smallImages`: Array of smaller detail images
3. Use format: `/assets/img/folder/image-name.jpg`

## Architecture Notes

### Component Reusability
- `ServiceDetailTemplate`: Reusable template for all service detail pages
- `ServicePricing`: Reusable pricing display component
- Both accept props to customize content without duplicating code

### Animation System
- Uses GSAP for scroll animations
- `useScrollSmooth` hook enables smooth scrolling
- `charAnimation` and `titleAnimation` provide text effects

### Performance
- Next.js automatically optimizes images
- Code splitting for faster page loads
- Server-side rendering for better SEO

## Troubleshooting

### Link Not Working
- Verify the service title in `service_data` matches the page filename
- Check for typos in the URL conversion (spaces, special characters)
- Ensure page file exists in `/src/pages/service/`

### Content Not Updating
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Restart development server
- Check for TypeScript errors in console

### Images Not Loading
- Verify image path starts with `/assets/img/`
- Check image file exists in `/public/assets/img/`
- Ensure correct file extension (.jpg, .png, etc.)

## Implementation Status

✅ **Completed**:
- Updated `ServiceFour` component with dynamic service links
- Created 5 individual service pages with unique content
- Implemented reusable `ServiceDetailTemplate` component
- Implemented reusable `ServicePricing` component
- Each service page includes:
  - Custom hero section with title and description
  - Main content area with features list
  - Image gallery section
  - 3-tier pricing section
  - Call-to-action area
  - Responsive layout

**Service Pages Created**:
1. Branding & Identity
2. Web Design & Development
3. Photography & Visual Content
4. Social Media Management
5. Content & Email Marketing

All service links from the homepage now correctly route to their respective service detail pages.
