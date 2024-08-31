import React, { useRef, useState } from 'react';

const VideoCapture = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();

    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      chunks.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
      chunks.current = [];
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
        muted
        style={{ border: '1px solid black' }}
      />
      <div>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </div>
      {videoUrl && (
        <div>
          <video width="640" height="480" controls>
            <source src={videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <a href={videoUrl} download="recorded-video.webm">
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoCapture;