import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Srinivas Kalyan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Machine Learning Engineer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I have expertise in Machine Learning, Deep Learning, NLP, and Computer Vision, with proficiency in C, C++, and Python.  
Skilled in frameworks like PyTorch, TensorFlow, and Keras, and tools such as Jupyter Notebook and Google Colab.  
Experienced in developing ML and DL models, including Retrieval-Augmented Generation (RAG), LLM Fine-Tuning, and PEFT (LoRa, QLoRA).  
Strong background in OpenCV for image processing, classification, object detection, and segmentation.  
Hands-on experience with NLP tasks like text classification, question answering, and summarization.  
Proficient in libraries like NumPy, SciPy, scikit-learn, pandas, matplotlib, and Hugging Face Transformers.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
