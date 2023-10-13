import { useState } from 'react';
import EmojisHeader from './EmojisHeader/EmojisHeader';
import './EmojisModal.css';

const EmojisModal = ({ isModalActive, setIsModalActive, setAddEmoji, initialMode }) => {
  const [mode, setMode] = useState(initialMode);

  const gifs = ['237', '238', '239', '240', '241', '242'];

  const stickers = ['243', '244', '247', '248', '249', '250'];

  const emojis = [
    '😀',
    '😁',
    '😆',
    '😅',
    '🤣',
    '😂',
    '🙂',
    '😉',
    '😢',
    '😊',
    '🥰',
    '😍',
    '😘',
    '🤑',
    '🤔',
    '🤤',
    '🥵',
    '🥶',
    '🥳',
    '😎',
    '☹️',
    '😲',
    '🥺',
    '😭',
    '😱',
    '😈',
    '🤡',
    '🤖',
  ];

  const closeHandle = (event) => {
    event.stopPropagation();
    setIsModalActive((prevIsModalActive) => false);
  };

  const selectHandle = (event) => {
    if (mode === 'emoji') {
      setAddEmoji({ content: event.target.innerText, type: 'emoji' });
    } else {
      setAddEmoji({ content: event.target.src, type: 'image' });
    }
  };

  const renderImages = (array) =>
    array.map((e, i) => (
      <img
        onClick={selectHandle}
        key={i}
        src={`https://picsum.photos/id/${e}/200`}
        className="image-elements"
      ></img>
    ));

  const renderEmojis = (array) =>
    array.map((e, i) => (
      <button onClick={selectHandle} key={i} className="emoji-elements">
        {e}
      </button>
    ));

  if (!isModalActive) {
    return null;
  }

  return (
    <>
      <div className="backdrop" onClick={closeHandle}></div>
      <div className="modal">
        <EmojisHeader mode={mode} setMode={setMode} />
        <div className="image-wrapper">{mode === 'gif' && renderImages(gifs)}</div>
        <div className="image-wrapper">{mode === 'sticker' && renderImages(stickers)}</div>
        <div>{mode === 'emoji' && renderEmojis(emojis)}</div>
      </div>
    </>
  );
};

export default EmojisModal;
