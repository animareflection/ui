import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Badge } from "components/universal";

const MockBadge = () => <Badge />;

describe("Badge", () => {
  it("renders badge correctly", () => {
    render(<MockBadge />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
