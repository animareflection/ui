/**
 * Shim Resize Observer API.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
 */
const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
  observe: jest.fn().mockReturnValue(null),
  unobserve: jest.fn().mockReturnValue(null),
  disconnect: jest.fn().mockReturnValue(null),
});

window.ResizeObserver = mockResizeObserver;
