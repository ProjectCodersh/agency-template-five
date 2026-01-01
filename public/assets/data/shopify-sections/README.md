# Shopify Single Section JSON Data Structure

This directory contains JSON files for dynamic Shopify section pages. Each JSON file represents a single section's complete data.

## File Naming Convention

- Use kebab-case for file names (e.g., `video-with-text.json`, `accordion-section.json`)
- The filename (without `.json`) will be used as the slug in the URL
- Example: `video-with-text.json` → URL: `/new-services/cms/shopify-single-section/video-with-text`

## JSON Structure

Each JSON file should follow this structure:

```json
{
  "appShowcase": {
    "title": "Section Title",
    "description": "Section description text",
    "badge": "Add to Your Store",
    "appInfo": {
      "icon": "/path/to/icon.png",
      "name": "App Name",
      "subtext": "App Subtext",
      "price": "$0.00"
    },
    "features": [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    "ctaButton": {
      "text": "Button text",
      "link": "#"
    },
    "featureIcons": [
      {
        "icon": "bi-phone",
        "label": "Mobile Responsive"
      }
    ],
    "previews": [
      {
        "type": "tablet",
        "image": "/path/to/image.png",
        "alt": "Image alt text"
      }
    ]
  },
  "featureDocumentation": {
    "mainContent": {
      "heading": "Main Heading",
      "paragraphs": [
        "Paragraph 1",
        "Paragraph 2"
      ],
      "subheading": "Subheading",
      "features": [
        {
          "title": "Feature Title",
          "description": "Feature description"
        }
      ]
    },
    "instructions": {
      "heading": "Instructions Heading",
      "steps": [
        {
          "number": 1,
          "title": "Step Title",
          "description": "Step description"
        }
      ]
    }
  },
  "trendingSections": {
    "allSections": [
      {
        "id": "1",
        "headertag": "Shopify Section",
        "img": "/path/to/image.png",
        "sectiontitle": "Section Title",
        "sectiondescription": "Section description",
        "sectionbtn": "View Section",
        "link": "#"
      }
    ]
  }
}
```

## Usage

1. Create a JSON file following the structure above
2. Save it in this directory with a kebab-case name
3. Access the page at: `/new-services/cms/shopify-single-section/{your-slug}`

## Example

- File: `video-with-text.json`
- URL: `/new-services/cms/shopify-single-section/video-with-text`

