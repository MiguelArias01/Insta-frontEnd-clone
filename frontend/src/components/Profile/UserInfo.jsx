export default function UserInfo({ user, avatar, first, last, bio, posts }) {
  return (
    <>

      <div className="h-auto bg-white w-full border-b border-zinc-200 pt-[65px] pb-4 px-3 relative">
        <div className="w-full relative" >
          <span className="inline-block">
            <img src={avatar} alt="Avatar" className=" rounded-full w-[80px] h-[80px] border border-slate-200" />
          </span>
          <h1 id="username" className="absolute font-sans font-normal left-[102px] top-[2px] text-xl leading-6 ">
            {user}
          </h1>
          <button className="bg-[#0095F6] text-white hover:bg-[#1877F2] font-sans font-semibold text-sm leading-4 rounded-lg h-8  ml-5 w-[250px] relative bottom-[14px]">Follow</button>
          {/* <button className="bg-slate-100 font-sans font-semibold text-sm leading-4 rounded-lg h-8 bg-slate-300 mx-4 px-4 relative bottom-[11px]">Message</button> */}
        </div>
        <div className="w-full relative py-2" >
          <h2 className="font-sans font-semibold text-sm">
            {first ? first : ""} {last ? last : ""}
          </h2>
          <p className="font-sans font-normal text-sm">{bio ? bio : ""}</p>
        </div>

      </div>
      <div className="h-auto bg-white w-full border-b border-zinc-200 py-3 px-2 relative">
        <div className="flex place-content-around font-sans font-normal text-sm leading">
          <div className="text-center inline-block">
            {posts ? posts : "0"}
            <br />
            <span className="text-[#7D7D7D]">posts</span>
          </div>
          <div className="text-center inline-block">
            1.1M
            <br />
            <span className="text-[#7D7D7D]">followers</span>
          </div>
          <div className="text-center inline-block">
            0
            <br />
            <span className="text-[#7D7D7D]">following</span>
          </div>
        </div>
      </div>

    </>
  )
}