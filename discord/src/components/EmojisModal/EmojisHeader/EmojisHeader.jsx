import './EmojisHeader.css';

function EmojisHeader({ mode, setMode }) {
  const renderButtons = (type) => (
    <button
      className={`select-button ${mode === type ? 'active' : ''}`}
      onClick={() => setMode((prevMode) => type)}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );

  return (
    <div className="header-wrapper">
      {renderButtons('gif')}
      {renderButtons('sticker')}
      {renderButtons('emoji')}
      <input className="search-input" type="text" />
    </div>
  );
}

export default EmojisHeader;
