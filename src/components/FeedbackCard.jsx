import {quotes} from '../assets';

// eslint-disable-next-line react/prop-types
const FeedbackCard = ({ content, name, title, img}) => {
  return (
    <div className="flex justify-between flex-col 
    px-10 py-12 rounded-[20px] max-w-[370px] 
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
      <img src={quotes} alt="quotes" className='w-[42px] h-[42px] object-contain' />
      <p className={`text-white font-poppins font-normal text-[18px] leading-[32px] my-10`}>{ content }</p>
      <div className='flex flex-'>
        <img src={img} className='w-[48px] h-[48px] rounded-full' alt={`image of ${name}`} />
        <div className='flex flex-col ml-4'>
          <h4 className={`text-white font-poppins font-semibold text-[18px] leading-[32px] my-10}`}>{name}</h4>
          <p className={`text-slate-400 font-poppins text-[16px] leading-[24px] my-10}`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard