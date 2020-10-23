export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after Finished Developing
  // token:
  //   "BQDHWwlMtsgXAQA95krt4CIjU98RC92IsaqvQAiQLJo130gOy0l0-P3SPicp2j1qgWQU0Ck4qUUo0oij-qeWwjHylVHhhBbwGeZweePnCxtdDro_REHvU_qt8ayKjnxt7W7rqhflg1Ff0Pq4E3TNrvsQwAXyBg7B6vGSSG1ozQedKlPL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        currentPlaylist: action.currentPlaylist,
      };
    default:
      return state;
  }
};

export default reducer;
