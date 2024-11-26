import HashLoader from "react-spinners/HashLoader"

const Loading = () => {
  return <div className="flex items-center justify-center w-full h-full">
    <HashLoader color="#0067FF" size={100} />
  </div>
}

export default Loading