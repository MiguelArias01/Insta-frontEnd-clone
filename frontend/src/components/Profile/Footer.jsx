import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import createPost from '../../api/newPost.js'

export default function Footer(avatar) {
  let [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  function handleCaptionChange(e) {
    const captionContent = e.target.value;
    setCaption(captionContent);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await createPost(file, caption)
    if (res) {
      closeModal()
      navigate("/")

    }
  }

  function handleLogout() {
    localStorage.clear()
    window.location.href = '/';
    window.location.reload(true);
  }

  return (
    <>
      <div className="w-full border-t border-slate-200 flex justify-between fixed left-0 bottom-0 z-50 px-10 bg-white">
        <div className="inline-block h-12 p-3 hover:cursor-pointer hover:scale-110">
          <Link to="/">
            <svg aria-label="Home" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          </Link>
        </div>
        <div className="inline-block h-12 p-3 hover:cursor-pointer hover:scale-110">
          <svg aria-label="Explore" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
        </div>
        <div className="inline-block h-12 p-3 hover:cursor-pointer hover:scale-110">
          <svg aria-label="Reels" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>
        </div>
        <div className="inline-block h-12 p-3 hover:cursor-pointer hover:scale-110" onClick={openModal} >
          <svg aria-label="New post" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
        </div>
        <div className="inline-block h-12 p-3 hover:cursor-pointer hover:scale-110">
          <svg aria-label="Messenger" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messenger</title><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path></svg>
        </div>
        <div className="inline-block h-12 p-3 ">
          <Menu>
            <Menu.Button>
              <img src={avatar.avatar} alt="Avatar" className=" rounded-full w-[24px] h-[24px] border border-slate-200 hover:scale-110 hover:cursor-pointer" />
            </Menu.Button>
            <Menu.Items className="-top-2 transform -translate-y-full absolute right-14 w-56 origin-top-right bg-white divide-y divide-slate-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="block">
                <span className="px-2 py-1 hover:cursor-pointer hover:bg-slate-100 font-sans text-base rounded-t-md">Edit Profile</span>
              </Menu.Item>
              <Menu.Item className="block">
                <span className="px-2 py-1 hover:cursor-pointer hover:bg-slate-100 font-sans text-base rounded-b-md" onClick={handleLogout}>Logout</span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>

      </div >
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all border border-slate-200 shadow-md">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-5 text-gray-900 border-b border-slate-200 px-2 py-3 text-center"
                  >
                    Create new post
                  </Dialog.Title>
                  <div>
                    <form className="px-5 py-4" onSubmit={handleSubmit}>
                      <input type="file" id="image-upload" name="image-input" accept="image/*" className="w-full mb-3 font-sans font-base text-sm focus:outline-none " onChange={handleFileChange} required />
                      <textarea id="caption" name="caption-input" placeholder="Write a caption..." className="px-2 py-1 w-full font-sans font-base text-sm rounded-sm resize-none border border-slate-400" value={caption} onChange={handleCaptionChange}></textarea>
                      <input type="submit" value="Upload" className="bg-[#0095F6] text-white hover:bg-[#1877F2] font-sans font-semibold text-sm leading-4 rounded-lg h-8 w-[250px] mt-2 outline-0 hover:cursor-pointer" />
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition >
    </>
  )
}