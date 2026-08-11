/**
 * Turn a URL slug into a display title.
 *
 * Naive word-capitalisation renders "acl-reconstruction" as "Acl Reconstruction",
 * which is both wrong and the exact term patients search for. These two lists are
 * the only reason this helper exists — keep them, not the capitalisation logic.
 */

// Rendered uppercase wherever they appear.
const ACRONYMS = new Set([
  'acl', 'pcl', 'mcl', 'lcl', 'mpfl', 'slap', 'tfcc',
  'prp', 'bmac', 'avn', 'oa', 'ra',
  'daa', 'tka', 'tkr', 'tha', 'thr', 'uka', 'rsa', 'acj',
  'hto', 'pao', 'orif', 'mua',
  'mri', 'ct', 'xray', 'dexa', 'emg',
  'acs', 'jci', 'nabh', 'vald', 'ai'
]);

// Kept lowercase unless they open the title.
const MINOR_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'in',
  'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'vs', 'with'
]);

export function titleFromSlug(slug) {
  if (!slug) return '';
  const words = String(slug).split('-').filter(Boolean);

  return words
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (ACRONYMS.has(lower)) return lower.toUpperCase();
      if (i > 0 && MINOR_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

export default titleFromSlug;
