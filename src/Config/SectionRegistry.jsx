import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import RightContentBox from '../Components/WhiteLabelServices/RightContentBox';
import LeftContentBox from '../Components/WhiteLabelServices/LeftContentBox';
import CardsSectionTwo from '../Components/WhiteLabelServices/CardSectionTwo';
import FaqSection from '../Components/WhiteLabelServices/FAQSectionTwo';
import CTASection from '../Components/WhiteLabelServices/CTASection';
import ShopifyPartnersSection from '../Components/WhiteLabelServices/ShopifyPartnersSection';

/**
 * Section Registry
 *
 * Maps section types to their corresponding React components.
 * This registry allows for easy addition of new section types
 * without modifying the page component.
 *
 * Each entry should have:
 * - component: The React component to render
 * - renderer: Optional custom render function for special cases
 *            If not provided, component will be rendered with data prop
 */

/**
 * Custom renderer for breadcrumb section
 * Handles special case where title can fallback to pageTitle
 */
const renderBreadcrumb = (Component, data, pageData) => {
  return <Component bgimg={data?.bgimg} Title={data?.title || pageData?.pageTitle} />;
};

/**
 * Custom renderer for FAQ section
 * Handles addclass prop
 */
const renderFAQSection = (Component, data) => {
  return <Component data={data} addclass={data?.addclass || ''} />;
};

/**
 * Section Registry Map
 *
 * Add new section types here:
 *
 * Example:
 *   'newSectionType': {
 *     component: NewSectionComponent,
 *     // Optional: use custom renderer for special cases
 *     // renderer: (Component, data, pageData) => <Component customProp={data} />
 *   }
 */
export const sectionRegistry = {
  breadcrumb: {
    component: BreadCumb,
    renderer: renderBreadcrumb,
  },
  leftContentBox: {
    component: LeftContentBox,
  },
  rightContentBox: {
    component: RightContentBox,
  },
  cardSectionTwo: {
    component: CardsSectionTwo,
  },
  faqSection: {
    component: FaqSection,
    renderer: renderFAQSection,
  },
  ctaSection: {
    component: CTASection,
  },
  shopifyPartnersSection: {
    component: ShopifyPartnersSection,
  },
};

/**
 * Render a section based on its type
 *
 * @param {Object} section - Section object with type and data
 * @param {number} index - Index for React key
 * @param {Object} pageData - Full page data (for fallbacks like pageTitle)
 * @returns {React.Element|null} Rendered component or null if type not found
 */
export const renderSection = (section, index, pageData = {}) => {
  const { type, data } = section;

  // Check if section type exists in registry
  const registryEntry = sectionRegistry[type];

  if (!registryEntry) {
    console.warn(`Unknown section type: ${type}. Available types:`, Object.keys(sectionRegistry));
    return null;
  }

  const { component: Component, renderer } = registryEntry;

  // Use custom renderer if provided, otherwise use default
  if (renderer) {
    const rendered = renderer(Component, data, pageData);
    // Ensure key is set on the rendered element
    return React.cloneElement(rendered, { key: index });
  }

  // Default: render component with data prop
  return <Component key={index} data={data} />;
};

/**
 * Get all registered section types
 * @returns {string[]} Array of section type names
 */
export const getRegisteredTypes = () => {
  return Object.keys(sectionRegistry);
};

/**
 * Check if a section type is registered
 * @param {string} type - Section type to check
 * @returns {boolean} True if type is registered
 */
export const isTypeRegistered = (type) => {
  return type in sectionRegistry;
};

export default sectionRegistry;
