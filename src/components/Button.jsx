// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <button type='button' className={`${styles} px-6 py-4 bg-blue-gradient font-poppins font-medium text-[18px] outline-none text-primary rounded-[10px] `}>
      Get Started
    </button>
  )
}

export default Button