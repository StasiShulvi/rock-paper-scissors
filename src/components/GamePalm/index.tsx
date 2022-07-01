import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  winItem: boolean;
  piecePicked: string
};

export const GamePalm: React.FC<Props> = ({winItem, piecePicked}) => {
  return (
    <div className={cn(styles.circle, styles.circleFirst, { [styles.circleActive]: winItem })}>
      <div className={cn(styles.circle, styles.circleSecond, { [styles.circleActive]: winItem })}>
        <div className={cn(styles.circle, styles.circleThird, { [styles.circleActive]: winItem })}>
          <div className={cn(styles[piecePicked], styles.item)} />
        </div>
      </div>
    </div>
  );
};
