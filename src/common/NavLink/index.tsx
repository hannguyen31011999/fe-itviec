import React from "react";
import { NavLink } from "react-router-dom";
import { flexBox } from "../../config/constants";
import CSS from "csstype";

export default function NavLinkCustom({
  href,
  children,
  sx,
}: {
  href: string;
  children: JSX.Element;
  sx?: CSS.Properties;
}) {
  return (
    <NavLink to={href} style={{ lineHeight: "initial", ...flexBox, ...sx }}>
      {children}
    </NavLink>
  );
}
