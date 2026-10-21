# Background Assets

## Required Images

Place the following images in this directory for the premium USA-themed design:

### 1. grain.png
- **Description**: Subtle noise/grain texture overlay
- **Size**: 200x200px (tileable)
- **Format**: PNG with transparency
- **Opacity**: Will be applied at 5-8% in CSS
- **Purpose**: Adds premium texture to backgrounds

### 2. usa-flag-blur.jpg (Optional Enhancement)
- **Description**: Blurred American flag
- **Size**: 1920x1080px or larger
- **Format**: JPG
- **Opacity**: Will be applied at 10-15%
- **Purpose**: Subtle patriotic background element

### 3. liberty-silhouette.png (Optional Enhancement)
- **Description**: Statue of Liberty silhouette/monocrome
- **Size**: 800x1200px or larger
- **Format**: PNG with transparency
- **Opacity**: Will be applied at 10-18%
- **Purpose**: Decorative USA theme element (bottom-right corner)

## Current Implementation

The BackgroundLayer component currently uses:
- Gradient backgrounds (navy tones)
- CSS-based blur effects for flag simulation
- Radial gradients for liberty simulation
- grain.png texture overlay

You can enhance by replacing the CSS simulations with actual images.

## How to Add Images

1. Export/create the images following the specs above
2. Place them in this `/public/bg/` directory
3. Update the BackgroundLayer component if needed to reference actual image files
4. The current code will work with or without actual image files
