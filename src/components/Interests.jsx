export default function Interests(props) {
  return (
    <div className='flex flex-row mt-5'>
        <img src={props.interest.img} alt=''/>
        <div className='ml-5'>
            <h4 className='font-Mont font-semibold md:text-[20px]'>{props.interest.header}</h4>
            <p className='font-Mont text-base md:text-[20px]'>{props.interest.text}</p>
        </div>
    </div>
  )
}
