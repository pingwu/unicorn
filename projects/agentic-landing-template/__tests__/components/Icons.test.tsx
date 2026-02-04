import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CheckIcon, ArrowRightIcon, MenuIcon } from "@/components/Icons";

describe("Icon components", () => {
  it("renders CheckIcon with default className", () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("w-5", "h-5");
  });

  it("renders CheckIcon with a custom className", () => {
    const { container } = render(<CheckIcon className="w-8 h-8 text-red-500" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("w-8", "h-8", "text-red-500");
  });

  it("renders ArrowRightIcon as an SVG", () => {
    const { container } = render(<ArrowRightIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders MenuIcon as an SVG", () => {
    const { container } = render(<MenuIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
