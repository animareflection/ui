// inject root cascade layers
import "lib/styles/main.css";

// 🐼 export backfill of Panda components
export * from "generated/panda/css";
export * from "generated/panda/jsx";
export type { JsxStyleProps } from "generated/panda/types";

// export Panda preset (to be used in downstream Panda configurations)
export { default as anirefPreset } from "lib/panda/aniref.preset";

// export components renderable on both server and client
export * from "./components/universal";
