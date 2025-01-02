import { Component } from 'react';
import "./Popup.css";

interface PopupProps {
  message: string;
  onClose: () => void;
}

class Popup extends Component<PopupProps> {
  render() {
    const { message, onClose } = this.props;

    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Đóng</button>
        </div>
      </div>
    );
  }
}

export default Popup;
