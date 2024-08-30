'use client'

import { Portal } from '@chakra-ui/react';
import { useProgress } from '@react-three/drei';
import style from './loadingView.module.css';

export default function LoadingView(): JSX.Element {
  const { progress, active } = useProgress();

  return (
    <Portal>
      <div className={style.loading_bg}>
        <div className={style.loader} style={{ width: `${progress}vw` }} />
      </div>
    </Portal>
  );
}

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 }
  },
}

export const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
  }
}