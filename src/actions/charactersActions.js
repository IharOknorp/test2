const fetchCharacter = (CharacterArr) => {
    return {
        type: "FETCH_CHARACTERS",
        payload: CharacterArr
    }
};
export default {fetchCharacter}
