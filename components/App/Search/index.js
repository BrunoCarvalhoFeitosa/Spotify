import { SearchIcon } from '@heroicons/react/outline';
import { AdjustmentsIcon } from '@heroicons/react/solid';

import * as S from './style';

const Search = () => {
  return (
    <S.SearchContainer>
      <S.SearchContainerWrapper>
        <SearchIcon />
        <S.SearchContainerInputWrapper>
          <input type='text' placeholder='Busque algum artista, álbum ou música...' />  
        </S.SearchContainerInputWrapper>
        <S.SearchContainerFiltersWrappper>
          <S.SearchContainerFiltersLeft>
            <S.SearchContainerFiltersLeftButton>Rock</S.SearchContainerFiltersLeftButton>
            <S.SearchContainerFiltersLeftButton>Pop</S.SearchContainerFiltersLeftButton>
            <S.SearchContainerFiltersLeftButton>Sertanejo</S.SearchContainerFiltersLeftButton>
            <S.SearchContainerFiltersLeftButton>Eletrônica</S.SearchContainerFiltersLeftButton>
          </S.SearchContainerFiltersLeft>
          <S.SearchContainerFiltersRight>
            <S.SearchContainerFiltersRightButton>
              <AdjustmentsIcon />
              <S.SearchContainerFiltersRightText>Filtros</S.SearchContainerFiltersRightText>
            </S.SearchContainerFiltersRightButton>
          </S.SearchContainerFiltersRight>
        </S.SearchContainerFiltersWrappper>
      </S.SearchContainerWrapper>      
    </S.SearchContainer>
  );
}

export default Search;
