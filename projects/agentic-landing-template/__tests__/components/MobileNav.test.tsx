import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MobileNav } from "@/components/MobileNav";

describe("MobileNav", () => {
  it("renders the hamburger button with 'Open menu' label", () => {
    render(<MobileNav />);
    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles to 'Close menu' after clicking the button", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    const button = screen.getByRole("button", { name: "Open menu" });
    await user.click(button);

    // After click, the same button should now say "Close menu"
    const closeButton = screen.getByRole("button", { name: "Close menu" });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles back to 'Open menu' on a second click", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    const button = screen.getByRole("button", { name: "Open menu" });
    await user.click(button); // open
    await user.click(screen.getByRole("button", { name: "Close menu" })); // close

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("shows navigation links when menu is open", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Work" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });
});
