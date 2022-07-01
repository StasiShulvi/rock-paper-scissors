import React, { useState} from 'react';
import { Game } from 'components/Game';
import { ButtonRules } from 'components/ButtonRules';
import { PopupRules } from 'components/PopupRules';
import { Layout } from 'components/Layout';

export const HomePage: React.FC = () => {
  const [showRules, setShowRules] = useState<boolean>(false);

  return (
    <Layout>
      <Game />
      <ButtonRules onClick = {() => setShowRules(true)} />
      {showRules && <PopupRules close={() => setShowRules(false)} />}
    </Layout>
  );
};
