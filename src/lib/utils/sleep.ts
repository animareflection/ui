/**
 * Simulate "sleep" by fulfilling a Promise that resolves after a given number of milliseconds.
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
