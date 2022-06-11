import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

import * as S from './style';

const UserInformations = () => {
  const { data: session } = useSession();
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    openDropdown ? setOpenDropdown(false) : setOpenDropdown(true);
  };

  return (
    <S.UserInformationsContainer>
      <S.UserInformationsContainerUser>
        <S.UserInformationsContainerUserOpen onClick={handleOpenDropdown}>
          <ChevronDownIcon />
        </S.UserInformationsContainerUserOpen>
        <S.UserInformationsContainerUserPicture>
          <img
            src={session?.user.image}
            alt={session?.user.name}
            title={session?.user.name}
          />
        </S.UserInformationsContainerUserPicture>
      </S.UserInformationsContainerUser>
      {
        openDropdown && (
        <S.UserInformationsContainerUserTexts>
          <S.UserInformationsContainerLogout>
            <S.UserInformationsContainerLogoutButton onClick={() => signOut()}>
              Sair
            </S.UserInformationsContainerLogoutButton>
          </S.UserInformationsContainerLogout>
        </S.UserInformationsContainerUserTexts>
        )
      }
    </S.UserInformationsContainer> 
  );
}

export default  UserInformations;
