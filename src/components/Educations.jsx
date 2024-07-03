export default function Educations(props) {
  return (
    <div className="mt-5 w-11/12">
        <div className="flex flex-row w-11/12" style={{border: props.education.border}} id='educationLine'></div>
        <div className='w-full flex flex-row'>
          <div className="w-5/12">
            <p className="font-Mont text-[14px] md:text-[20px]">{props.education.data}</p>
          </div>
            <div className='ml-5 w-7/12'>
                <p className="font-Mont font-semibold text-[14px] md:text-[20px] md:font-semibold">{props.education.header}</p>
                <p className="font-Mont text-[14px] md:text-[20px]">{props.education.subHeader}</p>
            </div>
        </div>
    </div>
  )
}
