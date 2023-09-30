import { defineTokens } from "@pandacss/dev";

const animations = defineTokens.animations({
  "fade-in": {
    value: "fade-in 250ms {easings.default}",
  },
  "fade-out": {
    value: "fade-out 200ms {easings.default}",
  },
  "modal-in": {
    value: "slide-in 400ms {easings.emphasized-in}",
  },
  "modal-out": {
    value: "slide-out 200ms {easings.emphasized-out}",
  },
  "drawer-in-left": {
    value: "slide-in-left 400ms {easings.emphasized-in}",
  },
  "drawer-out-left": {
    value: "slide-out-left 200ms {easings.emphasized-out}",
  },
  "drawer-in-right": {
    value: "slide-in-right 400ms {easings.emphasized-in}",
  },
  "drawer-out-right": {
    value: "slide-out-right 200ms {easings.emphasized-out}",
  },
  "drawer-in-bottom": {
    value: "slide-in-bottom 400ms {easings.emphasized-in}",
  },
  "drawer-out-bottom": {
    value: "slide-out-bottom 200ms {easings.emphasized-out}",
  },
  "drawer-in-top": {
    value: "slide-in-top 400ms {easings.emphasized-in}",
  },
  "drawer-out-top": {
    value: "slide-out-top 200ms {easings.emphasized-out}",
  },
  "infinite-spin": {
    value: "spin 1s infinite linear",
  },
  "skeleton-dark": {
    value: "skeleton-loading-dark 1s infinite linear alternate",
  },
  "skeleton-light": {
    value: "skeleton-loading-light 1s infinite linear alternate",
  },
});

export default animations;
