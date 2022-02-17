import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { fetchData } from '../actions/appActions';

const Player = props => {
  const { playerPic, playerName, fetchData } = props;

  useEffect(() => {
    console.log(playerPic);
    console.log(playerName);

    fetchData();
  }, []);

  return (
    <div>
      {playerName && playerName.length > 0 && (<ul>
        { playerName.map((item, index) => (<li key={index}>
          <h2>{item.first_name} {item.last_name}</h2>

          <figure><img src={playerPic} alt="" /></figure>
        </li>))}
      </ul>)}
      Player
    </div>
  );
};

Player.propTypes = {
  fetchData: PropTypes.func.isRequired,
  playerName: PropTypes.array.isRequired,
  playerPic: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  playerName: state.appReducer.name.data.data,
  playerPic: state.appReducer.name.config.url
});

export default connect(mapStateToProps, { fetchData })(Player);
