import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './scoreboard.styles.scss';
import useRecordPlayerStore from '../../zustand/record-page-store';
const ScoreBoard = () => {

  const { zoom, setZoom } = useRecordPlayerStore();
  return (
    <div className="score-board">
      <CustomButton
        onClick={() => {
          window.appHistory.push('/');
        }}
      >
        Home Page
      </CustomButton>
      <CustomButton
        onClick={() => {
          setZoom()
        }}
      >
        {zoom ? 'Zoom -' : 'Zoom +'}
      </CustomButton>

    </div>
  );
};

export default ScoreBoard;
