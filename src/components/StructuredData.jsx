import React from 'react';

/**
 * StructuredData - Injects JSON-LD for SEC (Search Engine Optimization)
 * @param {Object} data - Treatment data including faqs and physician info
 */
const StructuredData = ({ data, type = "FAQ" }) => {
  if (!data) return null;

  let schemaContent = {};

  if (type === "FAQ" && data.faqs) {
    schemaContent = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
  }

  if (type === "Physician" && data.physician) {
    schemaContent = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": data.physician.name,
      "image": data.physician.image,
      "medicalSpecialty": data.physician.specialty,
      "description": data.physician.bio,
      "hospitalAffiliation": "Apollo Hospitals, Financial District, Hyderabad",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nanakramguda, Financial District",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500032",
        "addressCountry": "IN"
      }
    };
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaContent)}
    </script>
  );
};

export default StructuredData;
