import { getSession } from 'next-auth/react';
import CenterContent from '../components/App/CenterContent';
import Sidebar from '../components/App/Sidebar';
import Player from '../components/App/Player';

import * as S from '../pages/styles/App'; 

const App = () => {
  return (
    <>
      <main>
        <S.App>
          <S.AppContainer>
            <Sidebar />
            <CenterContent />
            <Player />
          </S.AppContainer>
        </S.App>
      </main>
    </>
  );
}

export default App;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
