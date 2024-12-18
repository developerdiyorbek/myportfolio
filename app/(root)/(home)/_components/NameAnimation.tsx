"use client";

import { Fade } from "react-awesome-reveal";

function NameAnimation() {
  return (
    <Fade
      cascade
      duration={500}
      className="text-[21px] sm:text-[28px]  text-main dark:text-white"
    >
      Diyorbek Sulaymonov
    </Fade>
  );
}

export default NameAnimation;
