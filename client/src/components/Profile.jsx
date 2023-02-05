import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_FRIEND, REMOVE_FRIEND} from '../utils/mutations'
import { QUERY_ME } from '../utils/queries'

export default function Profile() {
  const [open, setOpen] = useState(true)
  const [data:user]=useQuery(QUERY_ME)
  const [addfriend,{data: addfriendData}] = useMutation(ADD_FRIEND)
  const [removeFriend,{data: removeFriendData}] = useMutation(REMOVE_FRIEND)

  // const [friends, setFriends] = useState([
  //   {
  //     username: 'Friend 1',
  //     bio: 'Bio 1'
  //   },
  //   {
  //     username: 'Friend 2',
  //     bio: 'Bio 2'
  //   },
  //   // add more friends here
  // ]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Profile Panel */}
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#040F16] py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="font-Roboto Mono py-2 text-2xl font-thin text-center border-2 border-[#9c7bd181] text-white">
                        PROFILE
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full border-2 border-[#9c7bd181]" aria-hidden="true">
                          <div className='font-Comfortaa text-xl font-medium  text-[#A288E3] py-3 ml-5'>
                            USERNAME
                          </div>
                          <div className='font-Comfortaa text-xl font-medium  text-[#A288E3] py-3 ml-5'>
                            BIO
                          </div>
                          <div>
                            <h2 className="font-Comfortaa text-xl font-medium  text-[#A288E3] py-3 ml-5"> Friends </h2>
                            <ul className='bg-[#8d8a8821] mx-2'>
                              <li className="sidebarFriend flex items-center justify-between" >
                                <span className="sidebarFriendName py-3 ml-9 border-width-2px border-[#A288E3] text-[#A288E3] font-Comfortaa hover:text-white hover:cursor-pointer"> User 1 </span>
                                <span className='text-white'>
                                  <button id="removeFriend" className='text-[#A288E3] font-Comfortaa mr-4 hover:bg-[#A288E3] hover:text-white gradient-[#A288E3]-[#FBFBFF] hover:cursor-pointer text-sm'>Remove </button>
                                </span>
                              </li>
                              <li className="sidebarFriend flex items-center justify-between" >
                                <span className="sidebarFriendName py-3 ml-9 border-width-2px border-[#A288E3] font-Comfortaa text-[#A288E3] hover:text-white hover:cursor-pointer"> User 2 </span>
                                <span className='text-white'>
                                  <button id="removeFriend" className='text-[#A288E3] font-Comfortaa mr-4 hover:bg-[#A288E3] hover:text-white gradient-[#A288E3]-[#FBFBFF] hover:cursor-pointer text-sm'>Remove </button>
                                </span>
                              </li>

                            </ul>
                            <div>
                              <button id="addfriend"> </button>
                            </div>
                          </div>
                          <div className='bg-#F79764 py-2 rounded-lg text-center border-1 bg-[hsla(20,66%,31%,5)] border-white hover:bg-[#A288E3] px-3 mx-5'>
                            <button className='text-white hover:cursor-pointer hover:translate-y-1 hover:text-white px-3'>
                              Add More Friends
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}