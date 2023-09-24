import { accordionRecipe } from "../../components/core/Accordion/Accordion.recipe";
import { badgeRecipe } from "../../components/core/Badge/Badge.recipe";
import { bannerRecipe } from "../../components/core/Banner/Banner.recipe";
import { breadcrumbRecipe } from "../../components/core/Breadcrumb/Breadcrumb.recipe";
import { buttonRecipe } from "../../components/core/Button/Button.recipe";
import { cardRecipe } from "../../components/core/Card/Card.recipe";
import { carouselRecipe } from "../../components/core/Carousel/Carousel.recipe";
import { checkboxRecipe } from "../../components/core/Checkbox/Checkbox.recipe";
import { drawerRecipe } from "../../components/core/Drawer/Drawer.recipe";
import { flyoutRecipe } from "../../components/core/Flyout/Flyout.recipe";
import { iconRecipe } from "../../components/core/Icon/Icon.recipe";
import { imageRecipe } from "../../components/core/Image/Image.recipe";
import { inputRecipe } from "../../components/core/Input/Input.recipe";
import { menuRecipe } from "../../components/core/Menu/Menu.recipe";
import { modalRecipe } from "../../components/core/Modal/Modal.recipe";
import { numberInputRecipe } from "../../components/core/NumberInput/NumberInput.recipe";
import { radioGroupRecipe } from "../../components/core/RadioGroup/RadioGroup.recipe";
import { skeletonRecipe } from "../../components/core/Skeleton/Skeleton.recipe";
import { sliderRecipe } from "../../components/core/Slider/Slider.recipe";
import { spinnerRecipe } from "../../components/core/Spinner/Spinner.recipe";
import { tabsRecipe } from "../../components/core/Tabs/Tabs.recipe";
import { textRecipe } from "../../components/core/Text/Text.recipe";
import { textareaRecipe } from "../../components/core/Textarea/Textarea.recipe";
import { toastRecipe } from "../../components/core/Toast/Toast.recipe";
import { toggleRecipe } from "../../components/core/Toggle/Toggle.recipe";
import { tooltipRecipe } from "../../components/core/Tooltip/Tooltip.recipe";
import { hideRecipe } from "../../components/utility/Hide/Hide.recipe";
import { showRecipe } from "../../components/utility/Show/Show.recipe";

export const recipes = {
  badge: badgeRecipe,
  banner: bannerRecipe,
  button: buttonRecipe,
  hide: hideRecipe,
  icon: iconRecipe,
  image: imageRecipe,
  show: showRecipe,
  spinner: spinnerRecipe,
  text: textRecipe,
};

export const slotRecipes = {
  accordion: accordionRecipe,
  carousel: carouselRecipe,
  breadcrumb: breadcrumbRecipe,
  checkbox: checkboxRecipe,
  card: cardRecipe,
  drawer: drawerRecipe,
  input: inputRecipe,
  flyout: flyoutRecipe,
  menu: menuRecipe,
  modal: modalRecipe,
  numberInput: numberInputRecipe,
  radioGroup: radioGroupRecipe,
  skeleton: skeletonRecipe,
  slider: sliderRecipe,
  tabs: tabsRecipe,
  textarea: textareaRecipe,
  toast: toastRecipe,
  toggle: toggleRecipe,
  tooltip: tooltipRecipe,
};
