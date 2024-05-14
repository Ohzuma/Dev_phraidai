export const Button = ({ text }) => {
  return (
    <div className="relative -z-10 ">
      <button className="text-[15px]  font-ligt capitalize flex nav-btn static  z-10 bg-black text-[rgba(243,243,242)]   h-11 px-5 w-40 items-center justify-center py-1">
        {text}
      </button>
      <div className="bg-[rgba(243,243,242)] border-2 -z-20 absolute top-2 left-2  border-black text-[rgba(243,243,242)]   h-11  w-40"></div>
    </div>
  );
};
