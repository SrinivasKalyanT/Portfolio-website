import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Srinivas Kalyan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
            <p>I’m a Machine Learning Engineer specializing in AI-powered solutions across healthcare, speech, and multimodal technologies. My work focuses on leveraging machine learning, computer vision, and natural language processing to build impactful systems that enhance decision-making and deliver real-world value.

At Onward Assist, I contributed to advancing AI for cancer detection and medical image analysis, developing deep learning models for disease classification, tumor detection, and histopathology image analysis. Collaborating closely with healthcare professionals, I worked to ensure that AI systems align with clinical needs, driving innovation in medical diagnostics to improve accuracy and patient outcomes.

Currently, at Nabeh, I work as an AI Engineer, contributing to the development and deployment of our proprietary Speech-to-Text (STT) product. My work involves real-time transcription, speaker diarization, audio enhancement, and LLM-powered analytics such as summarization and automated call evaluation. I also led the design and deployment of an enterprise-grade STT pipeline for the Strategic Management Office, integrating LLMs and scalable speech technologies to deliver intelligent, production-ready solutions.

I hold a B.Tech in Electronics and Communication Engineering from IIIT Sri City, where I built a strong foundation in AI, computer vision, and deep learning. I’m passionate about using AI for good—exploring ways to apply emerging technologies like LLMs and vision transformers to create scalable, meaningful, and socially impactful innovations. Thanks for stopping by — feel free to explore my work!</p></div>
          </div>
      </div>
    </div>
  );
};

export default About;
