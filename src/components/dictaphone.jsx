import React, { Component } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = (props) => {
    
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleStopRecording = (e) => {
    SpeechRecognition.stopListening(e);
    props.handler(transcript);
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <span>
        <button className="dictaphone start-recording" onClick={SpeechRecognition.startListening} placeholder="Start Recording"></button>
        <button className="dictaphone stop-recording" onClick={handleStopRecording} placeholder="Stop Recording"></button>
    </span>
      
  );
};
export default Dictaphone;