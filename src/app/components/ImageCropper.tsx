import setCanvasPreview from "@/lib/setCanvasPreview";
import React, { useRef, useState } from "react";
import ReactCrop, {
    makeAspectCrop,
    type Crop,
    centerCrop,
    convertToPixelCrop,
} from "react-image-crop";

const MIN_Dimensions = 150; // edit this
const ASPECT_RATIO = 1; // edit this

const ImageCropper = ({
    updateAvatar,
    handleCloseModal,
}: {
    updateAvatar: any;
    handleCloseModal: any;
}) => {
    const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>("");
    const [crop, setCrop] = useState<Crop>();
    const [error, setError] = useState<string>("");
    const imgRef = useRef<any>(null);
    const previewCanvasRef = useRef<any>(null);

    const onSelectFile = (e: any) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
            const imageElement = new Image();
            const imageURL = reader.result?.toString() || "";
            imageElement.src = imageURL;

            imageElement.addEventListener("load", (e) => {
                if (error) setError("");
                const { naturalWidth, naturalHeight } =
                    e.currentTarget as HTMLImageElement;
                if (
                    naturalWidth < MIN_Dimensions ||
                    naturalHeight < MIN_Dimensions
                ) {
                    setError("image must be atleast 150 x 150 px");
                    setImgSrc("");
                    return;
                }
            });
            setImgSrc(imageURL);
        });
        reader.readAsDataURL(file);
    };
    const onImageLoad = (e: any) => {
        const { width, height } = e.currentTarget;
        const cropWidthInPercent = (MIN_Dimensions / width) * 100;

        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    };
    return (
        <div className="py-10">
            <label className="block mb-3 w-fit">
                <span className="text-white font-bold">
                    Choose Profile Photo
                </span>

                <input
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
                />
            </label>
            {error && <div className="text-red-500">{error}</div>}
            {imgSrc && (
                <div className="flex flex-col items-center">
                    <ReactCrop
                        crop={crop}
                        onChange={(pixelCrop, percentCrop) =>
                            setCrop(percentCrop)
                        }
                        keepSelection
                        aspect={ASPECT_RATIO}
                        minWidth={MIN_Dimensions}
                    >
                        <img
                            ref={imgRef}
                            src={imgSrc.toString()}
                            alt="avatar"
                            style={{ maxHeight: "800px" }}
                            onLoad={onImageLoad}
                        />
                    </ReactCrop>
                    <button
                        className="text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600"
                        onClick={() => {
                            if (crop) {
                                setCanvasPreview(
                                    imgRef.current, // HTMLImageElement
                                    previewCanvasRef.current, // HTMLCanvasElement
                                    convertToPixelCrop(
                                        crop,
                                        imgRef.current.width,
                                        imgRef.current.height
                                    )
                                );
                                const dataUrl =
                                    previewCanvasRef.current.toDataURL();
                                updateAvatar(dataUrl);
                                handleCloseModal();
                            }
                        }}
                    >
                        Crop Image
                    </button>
                </div>
            )}
            {crop && (
                <canvas
                    ref={previewCanvasRef}
                    className="mt-4"
                    style={{
                        display: "none", // hidden canvas
                        border: "1px solid black",
                        objectFit: "contain",
                        width: 150,
                        height: 150,
                    }}
                />
            )}
        </div>
    );
};

export default ImageCropper;
