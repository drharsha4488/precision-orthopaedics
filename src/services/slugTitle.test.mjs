// Run: node src/services/slugTitle.test.mjs
import assert from 'node:assert/strict';
import { titleFromSlug } from './slugTitle.js';

assert.equal(titleFromSlug('acl-arthroscopy'), 'ACL Arthroscopy');
assert.equal(titleFromSlug('prp-injections'), 'PRP Injections');
assert.equal(titleFromSlug('acl-reconstruction-surgery-in-hyderabad'), 'ACL Reconstruction Surgery in Hyderabad');
assert.equal(titleFromSlug('robotic-knee-replacement'), 'Robotic Knee Replacement');
assert.equal(titleFromSlug('in-office-procedures'), 'In Office Procedures'); // minor word still leads
assert.equal(titleFromSlug('daa-hip-replacement'), 'DAA Hip Replacement');
assert.equal(titleFromSlug(''), '');
assert.equal(titleFromSlug(undefined), '');

console.log('slugTitle: all assertions passed');
