import React from 'react';
import LightMode from '../assets/img/lightMode.png';
import DarkMode from '../assets/img/darkMode.png';

const Switch = ({ isToggled, onToggle, themeTogglerHandler, userPref }) => {
  const displayModePic = userPref === 'light' ? DarkMode : LightMode;
  return (
    <section className="display-mode-continuer">
      <p>Display Mode</p>
      <div className="display-mode">
        <label className="switch">
          <input
            type="checkbox"
            onClick={themeTogglerHandler}
            checked={isToggled}
            onChange={onToggle}
          />
          <span className="slider" />
        </label>
        <img src={displayModePic} />
      </div>
    </section>
  );
};

export default Switch;
