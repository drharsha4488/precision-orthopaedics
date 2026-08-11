import React, { useEffect, useState } from 'react';
import './ConsentBanner.css';

const STORAGE_KEY = 'po-analytics-consent';

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage blocked — we cannot record a choice, so don't ask for one.
    }
  }, []);

  const decide = (granted) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
    } catch { /* choice applies to this page view only */ }
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied'
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="consent-banner" role="region" aria-label="Analytics consent">
      <p className="consent-copy">
        We use Google Analytics to understand how visitors find this site. Nothing is
        stored until you accept, and we never link it to your medical enquiries.
        <a href="/privacy" className="consent-link">Read our privacy protocol</a>
      </p>
      <div className="consent-actions">
        <button type="button" className="consent-btn consent-btn-ghost" onClick={() => decide(false)}>
          Decline
        </button>
        <button type="button" className="consent-btn consent-btn-solid" onClick={() => decide(true)}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
