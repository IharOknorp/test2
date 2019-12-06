const details = (state = false, action) => {
  switch(action.type){
    case "SHOW_CHARACTER_IN_DETAIL":
      return action.payload;
    default:
      return state
  }
};

export default details
