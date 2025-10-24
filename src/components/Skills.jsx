import GitHub from '../assets/Git_skill.png';
import Transformers from '../assets/Transformer_img.png';
import Fastapi from '../assets/Fastapi.png';
import Docker from '../assets/docker.jpeg';
import STT from '../assets/STT.png';
import TTS from '../assets/TTS.png';
import langchain from '../assets/langchain.png';
import langgraph from '../assets/langgraph.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4  text-2xl' >These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={STT} alt="HTML icon" />
                  <p className='my-4'>Speech to Text</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={TTS} alt="HTML icon" />
                  <p className='my-4'>Text to Speech</p>
              </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={langgraph} alt="HTML icon" />
                  <p className='my-4'>LangGraph</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={langchain} alt="HTML icon" />
                  <p className='my-4'>LangChain</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>git</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Transformers} alt="HTML icon" />
                  <p className='my-4'>Transformers</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Fastapi} alt="HTML icon" />
                  <p className='my-4'>FastAPI</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4'>Docker</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
