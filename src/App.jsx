import React, { useState, useEffect } from 'react';
import './App.css';
import cursor from './cursor.png'
import arrow from './arrow.png'

const ImageAnimation = () => {
  const [animation, setAnimation] = useState('');
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  useEffect(() => {
    const animateImage = async () => {
      await delay(20); 
      // Задержка 0.02 секунды перед началом анимации
      // Движение от точки A в точку B
      setAnimation('move-to-b');
      await delay(800); // Движение длится 0.8 секунды
      setFirst(true);
      // Остановка в точке B
      setAnimation('stop-at-b');
      await delay(200); // Задержка 0.2 секунды
      setFirst(true);
      // Движение от точки B в точку C
      setAnimation('move-to-c');
      setFirst(false);
      await delay(700);
      // Остановка в точке C
      setAnimation('stop-at-c');
      setSecond(true);
      await delay(100);
      // Движение от точки C в точку D
      setAnimation('move-to-d');
      setSecond(false);
      await delay(700);
      setThird(false);
      // Остановка в точке D
      setAnimation('stop-at-d');
      setThird(true);
      await delay(100);
       setThird(false);
      // Обратное движение от точки D в точку C
      setAnimation('move-to-c-reverse');
      await delay(500);
      setSecond(true);
      // Остановка в точке C
      setAnimation('stop-at-c');
      
      await delay(50);
      setSecond(false);
      // Обратное движение от точки C в точку B
      setAnimation('move-to-b-reverse');
      setFirst(false);
      await delay(500);
      // Остановка в точке B
      setAnimation('stop-at-b');
      await delay(10);
      // Обратное движение от точки B в точку A
      setAnimation('move-to-a-reverse');
      setFirst(true);
      await delay(500);
      setFirst(false);
      // Завершение анимации, возвращение в исходное состояние
      setAnimation('');
    };

    animateImage();
  }, []);
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const reloadHandler = () => {
    window.location.reload();
  }

  return (
    <>
    <div className="container">
      <p className={`text ${first ? 'underline' : ''}`}>FIRST</p>
      <p className={`text ${second ? 'underline' : ''}`}>SECOND</p>
      <p className={`text ${third ? 'underline' : ''}`}>SOME THIRD TEXT</p>
      <img className={`image ${animation}`} src={cursor}alt="" />
    </div>
    <div className='reload'>
    <i className="bi bi-arrow-clockwise" onClick={reloadHandler}><p className='r'>Reload</p></i>
    </div>
    </>
  );
};

export default ImageAnimation;
