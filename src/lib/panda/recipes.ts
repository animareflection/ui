import { accordionRecipe } from "../../components/client/core/Accordion/Accordion.recipe";
import { bannerRecipe } from "../../components/client/core/Banner/Banner.recipe";
import { breadcrumbRecipe } from "../../components/client/core/Breadcrumb/Breadcrumb.recipe";
import { buttonRecipe } from "../../components/client/core/Button/Button.recipe";
import { carouselRecipe } from "../../components/client/core/Carousel/Carousel.recipe";
import { checkboxRecipe } from "../../components/client/core/Checkbox/Checkbox.recipe";
import { drawerRecipe } from "../../components/client/core/Drawer/Drawer.recipe";
import { flyoutRecipe } from "../../components/client/core/Flyout/Flyout.recipe";
import { iconRecipe } from "../../components/client/core/Icon/Icon.recipe";
import { inputRecipe } from "../../components/client/core/Input/Input.recipe";
import { menuRecipe } from "../../components/client/core/Menu/Menu.recipe";
import { modalRecipe } from "../../components/client/core/Modal/Modal.recipe";
import { numberInputRecipe } from "../../components/client/core/NumberInput/NumberInput.recipe";
import { sliderRecipe } from "../../components/client/core/Slider/Slider.recipe";
import { tabsRecipe } from "../../components/client/core/Tabs/Tabs.recipe";
import { toastRecipe } from "../../components/client/core/Toast/Toast.recipe";
import { toggleRecipe } from "../../components/client/core/Toggle/Toggle.recipe";
import { tooltipRecipe } from "../../components/client/core/Tooltip/Tooltip.recipe";
import { badgeRecipe } from "../../components/universal/core/Badge/Badge.recipe";
import { cardRecipe } from "../../components/universal/core/Card/Card.recipe";
import { imageRecipe } from "../../components/universal/core/Image/Image.recipe";
import { skeletonRecipe } from "../../components/universal/core/Skeleton/Skeleton.recipe";
import { spinnerRecipe } from "../../components/universal/core/Spinner/Spinner.recipe";
import { textRecipe } from "../../components/universal/core/Text/Text.recipe";
import { hideRecipe } from "../../components/universal/utility/Hide/Hide.recipe";
import { showRecipe } from "../../components/universal/utility/Show/Show.recipe";

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
  skeleton: skeletonRecipe,
  slider: sliderRecipe,
  tabs: tabsRecipe,
  toast: toastRecipe,
  toggle: toggleRecipe,
  tooltip: tooltipRecipe,
};
