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
              <p>Kalyan is a Machine Learning Engineer at Onward Assist, focusing on developing AI solutions for cancer detection and medical image analysis. He is passionate about leveraging machine learning and computer vision techniques to enhance healthcare, particularly in improving medical imaging for more accurate disease identification and classification. At Onward Assist, Kalyan works on developing deep learning models for medical imaging applications, collaborating with healthcare professionals to ensure AI solutions align with clinical needs. His work aims to advance AI-powered diagnostic tools that improve disease detection and patient outcomes, with a strong commitment to exploring new techniques and methodologies in the field.
                Kalyan holds a B.Tech degree from IIIT Sri City, where he built a solid foundation in Machine Learning and Computer Vision. With hands-on experience in healthcare AI, Kalyan is dedicated to using innovative technologies to transform healthcare and make a meaningful contribution to the growing field of Artificial Intelligence.
              </p>  
              <p>I am a Machine Learning Engineer at Onward Assist, specializing in AI solutions for cancer detection and medical image analysis. I develop deep learning models for medical imaging, working closely with healthcare professionals to ensure AI-driven diagnostics align with clinical needs. My goal is to enhance disease detection and improve patient outcomes through advanced machine learning techniques.
              I hold a B.Tech degree from IIIT Sri City, where I built a strong foundation in Machine Learning and Computer Vision. I am passionate about leveraging AI in healthcare and constantly explore new techniques to advance medical imaging and diagnostics.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
