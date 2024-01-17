import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TRouteItems = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRouteItems[];
};
export type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: { key: string; label: ReactNode }[];
};
