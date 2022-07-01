import React, {useEffect, useState, useCallback, useMemo} from 'react';
import cn from 'classnames';
import { GamePalm } from 'components/GamePalm';
import styles from './styles.module.scss';

export const Game: React.FC = () => {
  const computerVariable = useMemo(() => ['itemRock', 'itemPaper', 'itemScissors'], []);
  const [userPicked, setUserPicked] = useState('');
  const [randomNumber, setRandomNumber] = useState(-1);
  const [winner, setWinner] = useState('');
  const [gameScore, setGameScore] = useState(0);

  const determineTheWinner = useCallback(() => {
    switch (`${userPicked}-${computerVariable[randomNumber]}`) {
      case 'itemRock-itemPaper':
      case 'itemPaper-itemScissors':
      case 'itemScissors-itemRock':
        setWinner('computer');
        break;
      case 'itemRock-itemScissors':
      case 'itemPaper-itemRock':
      case 'itemScissors-itemPaper':
        setWinner('user');
        break;
      case 'itemRock-itemRock':
      case 'itemPaper-itemPaper':
      case 'itemScissors-itemScissors':
        setWinner('draw');
        break;
      default:
        setWinner('');

    }
  }, [userPicked, randomNumber, computerVariable]);

  useEffect(() => {
    if (userPicked.length > 0) {
      setTimeout( () => {
        setRandomNumber(Math.floor(Math.random() * 3));
      }, 1000);
    }
  }, [userPicked]);

  useEffect(() => {
    determineTheWinner();
  }, [determineTheWinner]);

  useEffect(() => {
    if (winner === 'user') {
      setGameScore((score) => score + 1);
    } else if (winner === 'computer') {
      setGameScore((score) => score - 1);
    }
  }, [winner]);

  const setPlay = () => {
    setUserPicked('');
    setRandomNumber(-1);
  };

  return (
    <div>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>
          Rock <br />
          Paper <br />
          Scissors
        </div>

        <div className={styles.headerPoints}>
          <div className={styles.headerPointsTitle}>Score</div>
          <div className={styles.headerPointsCounter}>{gameScore}</div>
        </div>
      </div>

      <div className={styles.playgroundFieldWrapper}>
        {userPicked.length <= 0 ? (
          <div className={styles.playgroundField}>
            <div className={cn(styles.itemRock, styles.item)} onClick={() => setUserPicked('itemRock')} />
            <div className={cn(styles.itemPaper, styles.item)} onClick={() => setUserPicked('itemPaper')} />
            <div className={cn(styles.itemScissors, styles.item)} onClick={() => setUserPicked('itemScissors')} />
          </div>
        ) : (
          <div className={styles.wrapperPlayProcess}>
            <div>
              <div className={styles.playProcessTitle}>You picked</div>
              <GamePalm winItem={winner === 'user'} piecePicked={userPicked} />
            </div>
            <div className={styles.playResultWrapper}>
              {winner.length > 0 && (
                <div>
                  <div className={styles.playResultTitle}>
                    {winner === 'computer' ? 'You Lose' : winner === 'user' ? 'You Win' : 'Draw'}</div>
                  <button onClick={setPlay} className={styles.playResultButton}>Play again</button>
                </div>
              )}
            </div>
            <div>
              <div className={styles.playProcessTitle}>The house picked</div>
              {randomNumber >= 0 ? (
                <GamePalm winItem={winner === 'computer'} piecePicked={computerVariable[randomNumber]} />
              ) : (
                <div className={styles.circleEmpty}>
                  <div className={styles.computerVariableEmpty} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
