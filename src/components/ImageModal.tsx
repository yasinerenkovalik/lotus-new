import '../styles/ImageModal.css';

interface MediaModalProps {
  imageUrl: string;
  onClose: () => void;
}

function ImageModal({ imageUrl, onClose }: MediaModalProps) {
  const isVideo = imageUrl.endsWith('.mp4') || imageUrl.endsWith('.mov');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {isVideo ? (
          <video 
            src={imageUrl} 
            controls 
            autoPlay 
            className="modal-video"
          />
        ) : (
          <img src={imageUrl} alt="Büyütülmüş görsel" />
        )}
      </div>
    </div>
  );
}

export default ImageModal; 