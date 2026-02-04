import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("contains the main navigation", () => {
    render(<Home />);
    // The page has a top-level <nav aria-label="Main navigation">
    // and the MobileNav has an inner <nav> without that label
    const mainNav = screen.getByRole("navigation", { name: "Main navigation" });
    expect(mainNav).toBeInTheDocument();
  });

  it("contains key section headings", () => {
    render(<Home />);
    // Use heading role to avoid matching nav link text like "Services"
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Featured Work" })).toBeInTheDocument();
  });

  it("contains the footer", () => {
    render(<Home />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
