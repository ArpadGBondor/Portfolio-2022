#!/usr/bin/env bash

# Source and destination folders
SRC_DIR="public/images"
DEST_DIR="public/images/optimised"

# Create destination folder if it doesn't exist
mkdir -p "$DEST_DIR"

# Quality setting (0–100, higher = better quality/larger file)
QUALITY=80

# Supported input extensions
EXTENSIONS=("jpg" "jpeg" "png" "tiff" "bmp")

# Loop through files
for ext in "${EXTENSIONS[@]}"; do
  find "$SRC_DIR" -type f -iname "*.${ext}" | while read -r file; do

    # Get filename without path and extension
    filename=$(basename "$file")
    name="${filename%.*}"

    # Output file path
    output="$DEST_DIR/$name.webp"

    echo "Converting: $file → $output"

    # Convert to WebP
    cwebp -q "$QUALITY" "$file" -o "$output"

  done
done

echo "✅ Conversion complete!"
