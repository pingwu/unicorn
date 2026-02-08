import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResumePage from "@/app/resume/page";

describe("Resume page", () => {
  it("renders without crashing", () => {
    render(<ResumePage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("contains John Smith's name", () => {
    render(<ResumePage />);
    const nameHeading = screen.getByRole("heading", { level: 1, name: /John Smith/i });
    expect(nameHeading).toBeInTheDocument();
  });

  it("contains key section headings", () => {
    render(<ResumePage />);
    expect(screen.getByRole("heading", { name: /Impact & Experience/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Core Expertise/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Education/i })).toBeInTheDocument();
  });
});
