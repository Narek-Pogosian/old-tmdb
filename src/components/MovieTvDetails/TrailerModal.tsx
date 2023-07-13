import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Video } from "../../types/type";
import Trailer from "./Trailer";

const TrailerModal = ({ trailer }: { trailer: Video }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-shadow rounded outline-none bg-secondary focus:ring-4 focus:ring-secondary/50"
        onClick={openModal}
      >
        <img src="/play.svg" alt="" />
        <span>Play Trailer</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative max-w-4xl py-10 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl">
                  <button
                    className="absolute text-xl top-1 right-2"
                    aria-label="close"
                    onClick={closeModal}
                  >
                    &#x2715;
                  </button>
                  <Trailer trailer={trailer} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TrailerModal;
