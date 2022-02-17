import axios from 'axios';
import { SET_NAME, SET_IMG } from './types';

export const setName = name => ({ type: SET_NAME, payload: name });
export const setImg = img => ({ type: SET_IMG, payload: img });

export const fetchData = () => {
  const getNBAPlayer = axios.get('https://www.balldontlie.io/api/v1/players');
  const getPlayerPic = axios.get('https://nba-players.herokuapp.com/players/james/lebron');

  return dispatch => {
    return axios.all([getNBAPlayer, getPlayerPic])
      .then(
        axios.spread((...alldata) => {
          const allDataPlayer = alldata[0];
          const getNBAPlayerPic = alldata[1];

          console.log(allDataPlayer.data.data);
          console.log(getNBAPlayerPic.config.url);

          dispatch(setName(allDataPlayer));
          dispatch(setImg(getNBAPlayerPic));
        })
      )
      .catch(err => console.log(err.response));
  };
};
