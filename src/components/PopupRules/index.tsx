import React, { useRef } from 'react';
import { useOnClickOutside } from 'utils/useOnClickOutside';
import styles from './styles.module.scss';

type Props = {
  close: () => void
};

export const PopupRules: React.FC<Props> = ({ close }) => {
  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => close());

  return (
    <div ref={wrapperRef} className={styles.root}>
      <div className={styles.header}>
        <span className={styles.title}>Rules</span>
        <button className={styles.close} onClick={close} type="button" />
      </div>
      <div className={styles.img} />
    </div>
  );
};
