import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
  const imageRef = useRef(null);

  const onKeyPressInput = e => {
    if (e.key === 'Enter')
      console.log(e.target.value);
  }
  const onFocusInput = e => console.log('focused');
  const onBlurInput = e => console.log('blur');

  const onMouseOverImage = e => console.log('mouseover', `x=${e.clientX}, x=${e.clientY}`);
  const onMouseMoveImage = e => console.log('mousemove', `x=${e.clientX}, x=${e.clientY}`);
  const onMouseOutImage = e => console.log('mouseout', `x=${e.clientX}, x=${e.clientY}`);
  const onMouseDownImage = e => console.log('mousedown', `x=${e.clientX}, x=${e.clientY}`);
  const onMouseUpImage = e => console.log('mouseup', `x=${e.clientX}, x=${e.clientY}`);

  const onClickImage = e => console.log('click', `x=${e.clientX}, x=${e.clientY}`);
  const onDoubleClickImage = e => console.log('doubleclick', `x=${e.clientX}, x=${e.clientY}`);

  return (
    <Fragment>
      <h2>Some Examples of Event Handler</h2>
      <input
        type='text'
        placeholder='메세지를 입력 하세요'
        onKeyPress={onKeyPressInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput} />
      <br />
      <br />
      <img
        ref={imageRef}
        style={{
          cursor: 'pointer',
          width: 190,
          border: '1px solid #ccc'
        }}
        src={logo}
        onMouseOver={onMouseOverImage}
        onMouseMove={onMouseMoveImage}
        onMouseOut={onMouseOutImage}
        onMouseDown={onMouseDownImage}
        onMouseUp={onMouseUpImage}
        onClick={onClickImage}
        onDoubleClick={onDoubleClickImage} />
    </Fragment>
  );
}