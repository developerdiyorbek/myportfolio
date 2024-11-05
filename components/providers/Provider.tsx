"use client";

import { ChildProps } from "@/types";
import Snowfall from "react-snowfall";

function MainProvider({ children }: ChildProps) {
  return (
    <>
      {children}
      <Snowfall snowflakeCount={100} speed={[0, 2]} />
    </>
  );
}

export default MainProvider;
