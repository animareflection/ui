import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Badge } from "components/universal";

const MockBadge = () => <Badge>badge test</Badge>;
describe("Badge", () => {
  it("renders badge correctly", () => {
    render(<MockBadge />);

    expect(screen.getByText(/badge/i)).toHaveClass("badge");
  });
});
