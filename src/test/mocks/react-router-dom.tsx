import { ReactNode } from "react";

export const mockUseNavigate = vi.fn();
export const mockLinkClick = vi.fn();

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: mockUseNavigate,
  Outlet: () => <h1>Outlet</h1>,
  Link: ({ children, to }: { children?: ReactNode; to: string }) => (
    <a href={to} onClick={() => mockLinkClick(to)}>
      {children}
    </a>
  ),
}));
