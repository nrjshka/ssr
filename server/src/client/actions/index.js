export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async (dispatch) => {
  await fetch('https://react-ssr-api.herokuapp.com/users')
    .then(data => data.json())
    .then(data => dispatch({
      type: FETCH_USERS,
      payload: data,
    }));
};
