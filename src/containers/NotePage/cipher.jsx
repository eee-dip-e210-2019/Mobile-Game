import React from 'react';
import Debug from './debug';
import styles from './style.scss';
import '@hughsk/fulltilt/dist/fulltilt';

const Cipher = ({ message }) => {
  const ALPHA_THRESHOLD = 350;
  const BETA_THRESHOLD = 30;
  const GAMMA_THRESHOLD = 70;
  const [text, setText] = React.useState('');
  const [show, setShow] = React.useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const valueRef = React.useRef({});
  let buttonPressTimer;
  const handlePress = () => {
    buttonPressTimer = setTimeout(() => setShow(true), 2000);
  };

  const handleRelease = () => {
    setShow(false);
    clearTimeout(buttonPressTimer);
  };

  const approximate = (value, standard) =>
    value > standard - 10 && value < standard + 10;

  const asciiShift = num => {
    if (
      approximate(valueRef.current.alpha, ALPHA_THRESHOLD) &&
      approximate(valueRef.current.beta, BETA_THRESHOLD) &&
      approximate(valueRef.current.gamma, GAMMA_THRESHOLD)
    )
      return num;
    return ((num - 65 + getRandomInt(13)) % 58) + 65;
  };

  const randomCipher = msg => {
    const setence = msg.split(' ');
    const newSentence = setence.map(word => {
      const arr = word.split('');
      const originalAsciiArray = arr.map(i => i.charCodeAt(0));
      const resultAsciiArray = originalAsciiArray.map(i => asciiShift(i));
      const resultTextArray = resultAsciiArray.map(i => String.fromCharCode(i));
      const result = resultTextArray.join('');
      return result;
    });
    setText(newSentence.join(' '));
  };

  React.useEffect(() => {
    let deviceOrientation;

    window.FULLTILT.getDeviceOrientation({ type: 'world' })
      .then(controller => {
        deviceOrientation = controller;
      })
      .catch();
    const getGyro = setInterval(() => {
      if (deviceOrientation) {
        const euler = deviceOrientation.getScreenAdjustedEuler();
        valueRef.current.alpha = Math.round(euler.alpha);
        valueRef.current.beta = Math.round(euler.beta);
        valueRef.current.gamma = Math.round(euler.gamma);
        if (
          approximate(valueRef.current.alpha, 300) &&
          approximate(valueRef.current.beta, 10) &&
          approximate(valueRef.current.gamma, 10)
        )
          randomCipher(message);
      }
    }, 100);

    const refreshText = setInterval(() => {
      randomCipher(message);
    }, 2000);

    return () => {
      clearInterval(getGyro);
      clearInterval(refreshText);
    };
  }, []);

  return (
    <div
      className={styles.cipher}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
    >
      <p className={styles.note}>{text}</p>
      <Debug show={show}>
        <p>{`α : ${valueRef.current.alpha || ''}`}</p>
        <p>{`β : ${valueRef.current.beta || ''}`}</p>
        <p>{`γ : ${valueRef.current.gamma || ''}`}</p>
      </Debug>
    </div>
  );
};
export default Cipher;
