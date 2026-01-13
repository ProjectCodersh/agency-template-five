import { useState, useEffect } from 'react';

const loadingMessages = [
  'Preparing your sections...',
  'Loading premium components...',
  'Almost there...',
  'Setting up your content...',
  'Just a moment...',
];

function InteractiveSectionLoader() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Rotate through messages every 2 seconds
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    // Animate dots every 500ms
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div
      style={{
        padding: '100px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        gap: '30px',
      }}
    >
      {/* Animated Spinner */}
      <div
        style={{
          position: 'relative',
          width: '80px',
          height: '80px',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            border: '4px solid #e0e0e0',
            borderTop: '4px solid #6a47ed',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
          }}
        />
        <style>
          {`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>

      {/* Loading Message with Animation */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '400px',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#333',
            margin: '0 0 10px 0',
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          {loadingMessages[currentMessageIndex]}
        </p>
        <p
          style={{
            fontSize: '14px',
            color: '#666',
            margin: 0,
            minHeight: '20px',
          }}
        >
          {dots}
        </p>
      </div>

      {/* Progress Indicator */}
      <div
        style={{
          width: '200px',
          height: '4px',
          backgroundColor: '#e0e0e0',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '30%',
            height: '100%',
            backgroundColor: '#6a47ed',
            borderRadius: '2px',
            animation: 'progress 2s ease-in-out infinite',
          }}
        />
        <style>
          {`
            @keyframes progress {
              0% {
                transform: translateX(-100%);
              }
              50% {
                transform: translateX(200%);
              }
              100% {
                transform: translateX(400%);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default InteractiveSectionLoader;
