import { accordionRecipe } from "../../components/client/core/Accordion/Accordion.recipe";
import { buttonRecipe } from "../../components/client/core/Button/Button.recipe";
import { drawerRecipe } from "../../components/client/core/Drawer/Drawer.recipe";
import { menuRecipe } from "../../components/client/core/Menu/Menu.recipe";
import { modalRecipe } from "../../components/client/core/Modal/Modal.recipe";
import { sliderRecipe } from "../../components/client/core/Slider/Slider.recipe";
import { badgeRecipe } from "../../components/universal/core/Badge/Badge.recipe";
import { cardRecipe } from "../../components/universal/core/Card/Card.recipe";
import { imageRecipe } from "../../components/universal/core/Image/Image.recipe";
import { spinnerRecipe } from "../../components/universal/core/Spinner/Spinner.recipe";
import { textRecipe } from "../../components/universal/core/Text/Text.recipe";

export const recipes = {
  badge: badgeRecipe,
  button: buttonRecipe,
  image: imageRecipe,
  spinner: spinnerRecipe,
  text: textRecipe,
};

export const slotRecipes = {
  accordion: accordionRecipe,
  card: cardRecipe,
  drawer: drawerRecipe,
  menu: menuRecipe,
  modal: modalRecipe,
  slider: sliderRecipe,
};
