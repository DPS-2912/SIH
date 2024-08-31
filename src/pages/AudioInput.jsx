import React, { useState, useRef } from 'react';

const AudioInput = () => {
    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState('');
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);
  
    const startRecording = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
  
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };
  
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        audioChunks.current = []; // Clear the chunks after stopping
      };
  
      mediaRecorderRef.current.start();
      setRecording(true);
    };
  
    const stopRecording = () => {
      mediaRecorderRef.current.stop();
      setRecording(false);
    };
  
    return (
      <div className='mx-[2vw] max-sm:mx-[3vw] max-sm:pb-[100px] mt-[20px] pt-[20px] flex flex-wrap justify-center gap-x-[20vw] gap-y-[30px]'>
         <div className="input flex flex-col h-[70vh] gap-y-[30px] py-[30px] border-2 border-[rgba(51,50,50)] px-[30px] rounded-[25px] items-center justify-center ">
         {(recording) ? (
        <img src="./text_recording.avif" alt="" className='w-[300px] rounded-[50%] '/>) : 
        (
          <img src="./text_rec_stop.avif" alt="" className='w-[300px] rounded-[50%]'/>)}
        <div className='flex justify-center items-center gap-x-[15px]'>
        <button onClick={startRecording} disabled={recording} className='border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white duration-700'>
          Start Recording
        </button>
        <button onClick={stopRecording} disabled={!recording} className='border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white duration-700'>
          Stop Recording
        </button>
        </div>
        
        {audioUrl && (
          <div className='flex justify-center items-center'>
            <audio controls src={audioUrl} />
          </div>
        )}
  </div>
  
         <div className="output h-[70vh] flex flex-col gap-y-[30px] py-[30px] border-2 border-[rgba(51,50,50)] px-[40px] rounded-[25px] items-center justify-center cursor-none">
         <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/b737a51d-b890-4fa9-9598-28539ae76163/DallEGeneratedImages/dalle-517e97a0-93bc-4032-9ce0-a646a22d5d240251677177379429544800.jpg&dcHint=KoreaCentral&fileToken=2b35f345-8e91-4c11-8736-e5f02d83c157" alt="" className='w-[300px]  h-[50vh] rounded-[20px]'/>
         <h1 className='text-bold text-[25px]'>Generating Results</h1>
          </div>    
      </div>
    );
  }

export default AudioInput