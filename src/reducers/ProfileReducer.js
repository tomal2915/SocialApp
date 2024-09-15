import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        posts: action.payload.posts,
      };
    case actions.profile.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actions.profile.USER_DATA_EDITED:
      return {
        ...state,
        user: action.payload.user,
      };
    case actions.profile.IMAGE_UPDATED:
      return {
        ...state,
        user: {
          ...state.user,
          image: action.payload.image,
        },
      };
    default:
      return state;
  }
};

export { initialState, ProfileReducer };
