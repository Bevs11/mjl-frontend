"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import ImageCropper from "./components/ImageCropper";
import "react-image-crop/dist/ReactCrop.css";

export default function Home() {
    return <main></main>;
}

// const InputImage = () => {
//     const avatarURL = useRef(
//         "https://ami.animecharactersdatabase.com/uploads/chars/67712-371300562.png"
//     );
//     const [modalOpen, setModalOpen] = useState(false);

//     const handleCloseModal = () => {
//         setModalOpen(false);
//     };

//     const updateAvatar = (imageSrc: string) => {
//         avatarURL.current = imageSrc;
//         setModalOpen(false);
//     };
//     return (
//         <div className="flex flex-col mt-20 gap-10 items-center">
//             <div className="font-bold">INPUT IMAGE HERE</div>
//             {/* Display Image */}
//             <div>
//                 <img
//                     src={avatarURL.current}
//                     alt="avatar"
//                     className="w-[300px] h-[300px]"
//                 />
//             </div>
//             <button
//                 title="change photo"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 onClick={(e) => setModalOpen((prev) => !prev)}
//             >
//                 Edit Image
//             </button>
//             {modalOpen && (
//                 <ImageEditingModal
//                     handleCloseModal={handleCloseModal}
//                     updateAvatar={updateAvatar}
//                 />
//             )}
//         </div>
//     );
// };

// const ImageEditingModal = ({
//     handleCloseModal,
//     updateAvatar,
// }: {
//     handleCloseModal: any;
//     updateAvatar: any;
// }) => {
//     return (
//         <div
//             className="relative z-10"
//             aria-labelledby="crop-image-dialog"
//             role="dialog"
//             aria-modal="true"
//         >
//             <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
//             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                 <div className="flex min-h-full justify-center px-2 py-12 text-center ">
//                     <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-gray-800 text-slate-100 text-left shadow-xl transition-all">
//                         <div className="px-5 py-4 bg-none">
//                             <button
//                                 type="button"
//                                 className="border border-2 border-solid border-black px-4 py-2 rounded-md bg-red-500 text-white"
//                                 onClick={handleCloseModal}
//                             >
//                                 Close Modal
//                             </button>
//                             <ImageCropper
//                                 updateAvatar={updateAvatar}
//                                 handleCloseModal={handleCloseModal}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
