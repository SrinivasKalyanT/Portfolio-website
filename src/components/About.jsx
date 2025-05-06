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
            <p>I am a Machine Learning Engineer at Onward Assist, where I develop cutting-edge AI solutions for cancer detection and medical image analysis. My work centers on designing deep learning pipelines using CNNs, UNet-based architectures, and instance segmentation models such as NuClick, StarDist, and InstanSeg. These models are crafted to detect and classify cells in histopathological images with high accuracy, significantly reducing annotation time and enhancing diagnostic precision. I also lead research initiatives on tumor vs. non-tumor classification and tumor cluster detection, contributing to clinically impactful AI-powered diagnostic tools.</p> <p>Beyond medical imaging, I actively work in Natural Language Processing (NLP) to solve practical challenges. I have built automated text classification systems using transformer models like BERT, RoBERTa, and T5, and developed Retrieval-Augmented Generation (RAG) pipelines for intelligent document search and extraction. With a B.Tech degree from IIIT Sri City and hands-on experience across both computer vision and NLP domains, I’m passionate about leveraging AI to transform healthcare and drive meaningful outcomes. Thanks for stopping by — feel free to explore my work!</p></div>
          </div>
      </div>
    </div>
  );
};

export default About;
