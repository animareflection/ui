import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Slider } from "components/client";

import type { SliderMarkerRecord } from "components/client";

const MARKERS: SliderMarkerRecord[] = [
  { id: "marker-1", value: 25, label: "25%" },
  { id: "marker-2", value: 50, label: "50%" },
  { id: "marker-3", value: 75, label: "75%" },
];

const MockSlider = () => (
  <Slider min={0} max={100} maxW="md" label="Slider Label" markers={MARKERS} />
);

describe("Slider", () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    // @ts-ignore TS2790: The operand of a 'delete' operator must be optional.
    delete window.ResizeObserver;
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
  });

  it("renders label correctly", () => {
    render(<MockSlider />);

    expect(screen.getByText("Slider Label")).toBeInTheDocument();
  });

  it("renders markers correctly", () => {
    render(<MockSlider />);
    expect(screen.getByText("25%")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("renders slider correctly", () => {
    render(<MockSlider />);

    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
