/**
 * @file Jest setup configuration. Anything included in here is injected into downstream tests.
 */

// inject mocks
import "test/mocks/resizeObserver.mock";

// inject test utilities
import "@testing-library/jest-dom";
