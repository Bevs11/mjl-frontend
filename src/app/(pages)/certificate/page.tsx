"use client";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { jsPDF } from "jspdf";

const data = {
    name: "Juan Dela Cruz",
    date: "June 1, 2021",
    course: "Web Development",
};

export default function Certification() {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handlegeneratePdf = async () => {
        const inputData = certificateRef.current;
        if (!inputData) return;
        try {
            const canvas = await html2canvas(inputData);
            const imgData = canvas.toDataURL("image/png");

            const doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: [8, 11],
            });

            const width = doc.internal.pageSize.getWidth();
            const height = doc.internal.pageSize.getHeight();

            doc.addImage(imgData, "PNG", 0, 0, width, height);
            doc.save("certificate.pdf");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            {/* certificate */}
            <div>
                <div className="p-5" ref={certificateRef}>
                    <div className="h-[800px] border-solid border-black border-2 flex flex-col items-center justify-center gap-10">
                        <div className="text-5xl">CERTIFICATION</div>
                        <div className="text-2xl">
                            Title:{" "}
                            <span className="underline">{data.course}</span>
                        </div>
                        <div className="text-2xl">
                            Name: <span className="underline">{data.name}</span>
                        </div>
                        <div className="text-2xl">
                            Date:{" "}
                            <span className="underline"> {data.date}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* button */}
            <button className="btn-sky-blue" onClick={handlegeneratePdf}>
                Download PDF
            </button>
        </div>
    );
}
