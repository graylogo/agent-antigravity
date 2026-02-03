#!/bin/bash

# Build the Vue app
echo "Building Vue app..."
npm run build

# Copy manifest.json to dist
echo "Copying manifest.json..."
cp public/manifest.json dist/

# Copy icons to dist
echo "Copying icons..."
mkdir -p dist/icons
cp public/icons/*.png dist/icons/

echo "Chrome extension build complete!"
echo "Load the 'dist' folder as an unpacked extension in Chrome."
