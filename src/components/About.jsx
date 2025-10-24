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
            <p>I’m a AI Engineer with experience in developing AI-powered solutions across healthcare, speech, and multimodal technologies. I’m passionate about leveraging machine learning, computer vision, and natural language processing to build systems that enhance decision-making, improve efficiency, and create meaningful impact.At Onward Assist, I focused on advancing AI solutions for cancer detection and medical image analysis. My work involved developing deep learning models for disease classification, tumor detection, and histopathology image analysis. I collaborated closely with healthcare professionals to ensure AI systems aligned with real-world clinical needs, helping to improve diagnostic accuracy and patient outcomes.Currently, at Nabeh, I work as an AI Engineer, contributing to the development and deployment of the company’s proprietary Speech-to-Text (STT) product. My responsibilities include real-time transcription, speaker diarization, audio enhancement, and LLM-powered analytics such as summarization and automated call evaluation. I also led the design and deployment of an enterprise-grade STT pipeline for the Strategic Management Office, integrating advanced speech models and large language models (LLMs) to deliver scalable, production-ready solutions for enterprise clients.I hold a B.Tech in Electronics and Communication Engineering from IIIT Sri City, where I developed a strong foundation in AI, computer vision, and deep learning. I’m particularly interested in LLM fine-tuning, RAG systems, and multimodal AI, and continuously explore ways to integrate speech, text, and vision to create intelligent, context-aware applications.Driven by curiosity and a commitment to innovation, I aim to contribute to the next generation of AI systems that are not only powerful but also practical, explainable, and socially impactful. Thanks for stopping by — feel free to explore my work!</p></div>
        </div>
      </div>
    </div>
  );
};

export default About;
