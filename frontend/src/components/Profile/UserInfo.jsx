export default function UserInfo({ user, avatar, first, last, bio, posts }) {
  return (
    <>

      <div className="h-auto bg-white w-full border-b border-zinc-200 py-5 px-3 relative">
        <div className="w-full relative" >
          <span className="inline-block">
            <img src={avatar} alt="Avatar" className=" rounded-full w-[77px] h-[77px] border border-slate-200" />
          </span>
          <h1 id="username" className="absolute font-sans font-normal left-[98px] top-[2px] text-xl leading-6 ">
            {user}
          </h1>
          <button className="bg-[#0095F6] text-white hover:bg-[#1877F2] font-sans font-semibold text-sm leading-4 rounded-lg h-8  ml-5 w-[250px] relative bottom-[11px]">Follow</button>
          {/* <button className="bg-slate-100 font-sans font-semibold text-sm leading-4 rounded-lg h-8 bg-slate-300 mx-4 px-4 relative bottom-[11px]">Message</button> */}
        </div>
        <div className="w-full relative py-2" >
          <h2 className="font-sans font-semibold text-sm">
            {first ? first : ""} {last ? last : ""}
          </h2>
          <p className="font-sans font-normal text-sm">{bio ? bio : ""}</p>
        </div>

      </div>
      <div className="h-auto bg-white w-full border-b border-zinc-200 py-5 px-2 relative">
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
      <div className="h-auto bg-white w-full relative">
        <div className="flex font-sans font-normal text-sm leading">
          <div className="w-1/2 py-2 border-t border-black flex justify-center hover:cursor-pointer">
            <svg aria-label="Posts" class="_ab6-" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect>
              <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
            </svg>
          </div>
          <div className="w-1/2 py-2 flex justify-center hover:cursor-pointer">
            <svg aria-label="Tagged" class="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
          </div>
        </div>
      </div>
    </>
  )
}