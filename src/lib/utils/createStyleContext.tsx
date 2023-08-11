import { createContext, forwardRef, useContext } from "react";

import type { ComponentType } from "react";

type AnyProps = Record<string, unknown>;
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  splitVariantProps: (props: AnyProps) => any;
};

const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null);

  // !NB: initially T extends {}
  const withProvider = <T extends object>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    const Comp = forwardRef((props: T & Parameters<R>[0], ref) => {
      const [variantProps, rest] = recipe.splitVariantProps(props);
      const styles = recipe(variantProps);
      return (
        <StyleContext.Provider value={styles}>
          <Component ref={ref} className={styles?.[part ?? ""]} {...rest} />
        </StyleContext.Provider>
      );
    });
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  // !NB: initially T extends {}
  const withContext = <T extends object>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    if (!part) return Component;

    const Comp = forwardRef((props: T, ref) => {
      const styles = useContext(StyleContext);
      return (
        <Component ref={ref} className={styles?.[part ?? ""]} {...props} />
      );
    });
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  return {
    withProvider,
    withContext,
  };
};

export default createStyleContext;
