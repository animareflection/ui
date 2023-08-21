import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Menu } from "components/client";

import type { MenuItem, MenuItemGroup } from "components/client";

const ITEMS: MenuItem[] = [
  { id: "item-1", child: "Item 1" },
  { id: "item-2", child: "Item 2" },
  { id: "item-3", child: "Item 3" },
];

const GROUPS: MenuItemGroup[] = [
  {
    id: "group-1",
    label: "Group 1",
    items: ITEMS,
  },
];

const MockMenu = () => <Menu trigger="Open Menu" groups={GROUPS} />;

describe("Menu", () => {
  it("renders trigger correctly", () => {
    render(<MockMenu />);

    expect(
      screen.getByRole("button", { name: "Open Menu" }),
    ).toBeInTheDocument();
  });
});
