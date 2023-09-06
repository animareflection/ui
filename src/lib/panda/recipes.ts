import { accordionRecipe } from "../../components/client/core/Accordion/Accordion.recipe";
import { bannerRecipe } from "../../components/client/core/Banner/Banner.recipe";
import { buttonRecipe } from "../../components/client/core/Button/Button.recipe";
import { checkboxRecipe } from "../../components/client/core/Checkbox/Checkbox.recipe";
import { drawerRecipe } from "../../components/client/core/Drawer/Drawer.recipe";
import { menuRecipe } from "../../components/client/core/Menu/Menu.recipe";
import { modalRecipe } from "../../components/client/core/Modal/Modal.recipe";
import { sliderRecipe } from "../../components/client/core/Slider/Slider.recipe";
import { tabsRecipe } from "../../components/client/core/Tabs/Tabs.recipe";
import { toggleRecipe } from "../../components/client/core/Toggle/Toggle.recipe";
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
  image: imageRecipe,
  show: showRecipe,
  spinner: spinnerRecipe,
  text: textRecipe,
};

export const slotRecipes = {
  accordion: accordionRecipe,
  checkbox: checkboxRecipe,
  card: cardRecipe,
  drawer: drawerRecipe,
  menu: menuRecipe,
  modal: modalRecipe,
  skeleton: skeletonRecipe,
  slider: sliderRecipe,
  tabs: tabsRecipe,
  toggle: toggleRecipe,
};
