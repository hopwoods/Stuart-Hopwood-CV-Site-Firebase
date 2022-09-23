import { domAnimation, LazyMotion, m, Variants } from "framer-motion";
import { ReactNode } from "react";
import { classes } from "./banner.css";

type BannerProps = {
  id: string;
  fullscreen: boolean;
  children: ReactNode
};

const variants: Variants = {
  start: {
    background: 'linear-gradient(45deg, #5c1149 0%, #bb0542 31%, #dd003f 43%, #dd003f 55%, #bb0542 72%, #5c1149 100%)',
    backgroundPosition: '0% 25%',
    backgroundSize: '400% 400%',
    opacity: 1
  },
  end: {
    backgroundPosition: ['0% 25%', '50% 50%', '100% 50%'],
    opacity: 1,
  }
}

export function Banner({ id, fullscreen, children }: BannerProps) {
  return <LazyMotion features={domAnimation}>
    <m.section
      layout
      initial="start"
      animate="end"
      transition={{
        repeat: Infinity, repeatType: 'reverse', duration: 10
      }}
      variants={variants}
      id={id}
      className={`${fullscreen ? classes.fullscreen : undefined} ${classes.banner}`}>
      {children}
    </m.section>
  </LazyMotion>;
};