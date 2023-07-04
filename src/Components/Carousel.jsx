// const Carousel = () => {
//     return (
//         <>
//         </>
//     )
// }

// export default Carousel;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import "./Carousel.css";

gsap.registerPlugin(ScrollTrigger);

export function Carousel() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      <div ref={slider} className="timeline-container">
        <div className="panel">
          <div className="section-one">
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div className="test"
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}>
                    </motion.div>
              )}
            </InView>
          </div>
        </div>
        <div className="section-two panel">
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div className="test2"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
              > </motion.div>
            )}
          </InView>
        </div>
        <div className="section-three panel">
        <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div className="test3"
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            </motion.div>
              )}
              </InView>
        </div>
      </div>
    </div>
  );
}
