"use client";

import {
  FiHeart,
  FiCheck,
  FiExternalLink,
  FiAlertTriangle,
} from "react-icons/fi";

import { Flex, HStack, Text } from "@animareflection/ui";
import {
  Accordion,
  Button,
  Drawer,
  Icon,
  Menu,
  Modal,
  Slider,
} from "@animareflection/ui/client";

import type {
  MenuItemRecord,
  MenuItemGroupRecord,
  SliderMarkerRecord,
  AccordionItemRecord,
} from "@animareflection/ui/client";

const ITEMS: AccordionItemRecord[] = [
  {
    id: "panel-1",
    value: "panel-1",
    triggerLabel: "Panel 1",
    content: "Panel 1 content",
  },
  {
    id: "panel-2",
    value: "panel-2",
    triggerLabel: "Panel 2",
    content: "Panel 2 content",
  },
  {
    id: "panel-3",
    value: "panel-3",
    triggerLabel: "Panel 3",
    content: "Panel 3 content",
  },
];

const SUBMENU_GROUP_ITEMS: MenuItemRecord[] = [
  { id: "item-7", child: "Item 7" },
  { id: "item-8", child: "Item 8" },
  { id: "item-9", child: "Item 9" },
];

const SUBMENU_GROUP: MenuItemGroupRecord = {
  id: "group-3",
  label: "Group 3",
  items: SUBMENU_GROUP_ITEMS,
};

const GROUP_ONE_ITEMS: MenuItemRecord[] = [
  {
    id: "item-1",
    child: (
      <HStack justify="space-between" flex={1}>
        Item 1
        <Text color="fg.subtle" textStyle="xs">
          Ctrl+P
        </Text>
      </HStack>
    ),
  },
  { id: "item-2", child: "Item 2" },
  { id: "item-3", child: "Item 3" },
];

const GROUP_TWO_ITEMS: MenuItemRecord[] = [
  { id: "item-4", child: "Item 4" },
  {
    id: "item-5",
    subMenu: true,
    child: (
      <Menu
        key="item-5"
        positioning={{ placement: "right-start", gutter: -2 }}
        triggerItem="Item 5"
        groups={[SUBMENU_GROUP]}
      />
    ),
  },
  { id: "item-6", child: "Item 6" },
];

const GROUPS: MenuItemGroupRecord[] = [
  {
    id: "group-1",
    label: "Group 1",
    items: GROUP_ONE_ITEMS,
  },
  {
    id: "group-2",
    label: "Group 2",
    items: GROUP_TWO_ITEMS,
  },
];

const MARKERS: SliderMarkerRecord[] = [
  { id: "marker-1", value: 25, label: "25%" },
  { id: "marker-2", value: 50, label: "50%" },
  { id: "marker-3", value: 75, label: "75%" },
];

const ClientPage = () => (
  <Flex direction="column" align="center" w="100%" gap={2} p={12}>
    Client component demo!
    <Text fontWeight="bold">Button:</Text>
    <Button w="fit-content" onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
    <Text fontWeight="bold">Accordion:</Text>
    <Accordion items={ITEMS} />
    <Text fontWeight="bold">Drawer:</Text>
    <Drawer
      trigger={<Button>Open Drawer</Button>}
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
    <Text fontWeight="bold">Icons:</Text>
    <Flex gap={2}>
      <Flex bgColor="red.100" p={2} borderRadius="md">
        <Icon as={FiHeart} color="red.500" />
      </Flex>
      <Flex bgColor="blue.100" p={2} borderRadius="md">
        <Icon as={FiCheck} color="blue.500" />
      </Flex>
      <Flex bgColor="gray.100" p={2} borderRadius="md">
        <Icon as={FiExternalLink} color="gray.500" />
      </Flex>
      <Flex bgColor="yellow.100" p={2} borderRadius="md">
        <Icon as={FiAlertTriangle} color="yellow.500" />
      </Flex>
    </Flex>
    <Text fontWeight="bold">Menu:</Text>
    <Menu trigger="Open Menu" groups={GROUPS} />
    <Text fontWeight="bold">Modal:</Text>
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="Modal Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Modal>
    <Text fontWeight="bold">Slider:</Text>
    <Slider min={0} max={100} label="Slider Label" markers={MARKERS} />
  </Flex>
);

export default ClientPage;
