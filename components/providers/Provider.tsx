"use client";

import { ChildProps } from "@/types";
import Snowfall from "react-snowfall";

function MainProvider({ children }: ChildProps) {
  return (
    <>
      {children}
      <Snowfall />
    </>
  );
}

export default MainProvider;
