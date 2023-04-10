import { useNavigate } from 'react-router-dom';

export default function TopNav(username) {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="bg-white w-full h-auto border-b border-zinc-200 text-center font-sans font-semibold py-2 fixed l-0 z-40">
        <span className="inline-block   absolute left-4 top-2.5 -rotate-90 hover:cursor-pointer" onClick={handleGoBack}>
          <svg aria-label="Back" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>Back</title>
            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z">
            </path>
          </svg>
        </span>
        <h1>{username ? username.user : ''}</h1>
      </div>

    </>
  )
}