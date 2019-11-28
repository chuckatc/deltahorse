const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      if (!action.payload.title) return state;
      return {
        ...state,
        watchlist: [
          ...state.watchlist.filter(
            item => item.title !== action.payload.title
          ),
          { ...action.payload }
        ]
      };
    case "DELETE_TITLE":
      return {
        ...state,
        watchlist: [
          ...state.watchlist.filter(item => item.title !== action.payload.title)
        ]
      };
    case "TOGGLE_SERVICE_ACTIVE":
      return {
        ...state,
        services: [
          ...state.services.map(service =>
            service.name === action.payload
              ? { ...service, active: !service.active }
              : service
          )
        ]
      };
    default:
      return state;
  }
};

export default reducer;
