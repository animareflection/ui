import {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type ComponentProps,
  type ElementType,
  type JSX,
} from "react";

interface GenericProps extends Record<string, unknown> {}

type StyleRecipe = {
  (props?: GenericProps): Record<string, string>;
  splitVariantProps: (props: GenericProps) => any;
};

type StyleSlot<R extends StyleRecipe> = keyof ReturnType<R>;

type StyleSlotRecipe<R extends StyleRecipe> = Record<StyleSlot<R>, string>;

type StyleVariantProps<R extends StyleRecipe> = Parameters<R>[0];

type CombineProps<T, U> = Omit<T, keyof U> & U;

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(" ");

export interface ComponentVariants<
  T extends ElementType,
  R extends StyleRecipe,
> {
  (props: CombineProps<ComponentProps<T>, StyleVariantProps<R>>): JSX.Element;
}

const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<StyleSlotRecipe<R> | null>(null);

  const withProvider = <T extends ElementType>(
    Component: T,
    slot?: StyleSlot<R>,
  ): ComponentVariants<T, R> => {
    // eslint-disable-next-line react/display-name
    const StyledComponent = forwardRef((props: ComponentProps<T>, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);

      const slotStyles = recipe(variantProps) as StyleSlotRecipe<R>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component
            ref={ref}
            {...otherProps}
            className={cx(slotStyles[slot ?? ""], otherProps.className)}
          />
        </StyleContext.Provider>
      );
    });

    return StyledComponent as unknown as ComponentVariants<T, R>;
  };

  const withContext = <T extends ElementType>(
    Component: T,
    slot?: StyleSlot<R>,
  ): T => {
    if (!slot) return Component;

    // eslint-disable-next-line react/display-name
    const StyledComponent = forwardRef((props: ComponentProps<T>, ref) => {
      const slotStyles = useContext(StyleContext);

      return createElement(Component, {
        ...props,
        className: cx(slotStyles?.[slot ?? ""], props.className),
        ref,
      });
    });

    return StyledComponent as unknown as T;
  };

  return {
    withProvider,
    withContext,
  };
};

export default createStyleContext;
