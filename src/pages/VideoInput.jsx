import React, { useState, useRef } from 'react';


const VideoInput = () => {

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
    <div className='mx-[2vw] max-sm:mx-[3vw] max-sm:pb-[100px] mt-[20px] pt-[20px] flex flex-wrap justify-center gap-x-[20vw] gap-y-[30px]'>
         <div className="input">
         <div className='flex flex-col h-[70vh] gap-y-[30px] py-[30px] border-2 border-[rgba(51,50,50)] px-[30px] rounded-[25px] items-center justify-center '>
      <video
        ref={videoRef}
        className='w-[300px] h-[25%]'
        autoPlay
        muted
      />
      <div className='flex w-[100%] justify-center'>
        {isRecording ? (
          <button onClick={stopRecording} className='border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white duration-700'>Stop Recording</button>
        ) : (
          <button onClick={startRecording} className='border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white duration-700'>Start Recording</button>
        )}
      </div>
      {videoUrl && (
        <div className='h-[30%]'>
          <video className='w-[300px] h-[75%]' controls>
            <source src={videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
        </div>
      )}
    </div></div>
  
         <div className="output h-[70vh] flex flex-col gap-y-[30px] py-[30px] border-2 border-[rgba(51,50,50)] px-[40px] rounded-[25px] items-center justify-center cursor-none">
         <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/b737a51d-b890-4fa9-9598-28539ae76163/DallEGeneratedImages/dalle-517e97a0-93bc-4032-9ce0-a646a22d5d240251677177379429544800.jpg&dcHint=KoreaCentral&fileToken=2b35f345-8e91-4c11-8736-e5f02d83c157" alt="" className='w-[300px]  h-[50vh] rounded-[20px]'/>
         <h1 className='text-bold text-[25px]'>Generating Results</h1>
        </div>    
    </div>
    );
  
}

export default VideoInput