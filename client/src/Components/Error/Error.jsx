// eslint-disable-next-line react/prop-types
const Error = ({errMessage}) => {
  return <div className="flex justify-center items-center h-full w-full">
    <h3 className="text-red-500 text-[20px] leading-[30px] font-semibold">{errMessage}</h3>
  </div>
}

export default Error