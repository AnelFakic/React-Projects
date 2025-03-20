import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        image
        name
        status
        species
        gender
        origin {
          name
        }
      }
      info {
        pages
      }
    }
  }
`;
