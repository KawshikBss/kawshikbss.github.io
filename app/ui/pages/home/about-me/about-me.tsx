import Drops from "@/app/ui/components/drops";
import Image from "next/image";
import React from "react";

type Props = {};

function AboutMe({}: Props) {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20">
            <span className="text-[#14e956] font-black text-4xl py-3 px-7 border-4 border-[#0c8c34] rounded-xl bg-[#12141d] uppercase">
                About Me
            </span>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-1/5 h-[50vh] relative">
                    <Image
                        src={"/profile.png"}
                        className="transition-all duration-300 ease-in-out w-48 md:w-80 border-2 border-[#14e956] cursor-pointer rounded-lg absolute top-10 left-40 hover:z-50 rotate-12 hover:scale-110 hover:rotate-0"
                        alt="about"
                        width={200}
                        height={300}
                    />
                    <Image
                        src={"/profile.png"}
                        className="transition-all duration-300 ease-in-out w-48 md:w-80 border-2 border-[#14e956] cursor-pointer rounded-lg absolute top-20 left-10 hover:z-50 -rotate-12 hover:scale-110 hover:rotate-0"
                        alt="about"
                        width={200}
                        height={300}
                    />
                    <Image
                        src={"/profile.png"}
                        className="transition-all duration-300 ease-in-out w-48 md:w-80 border-2 border-[#14e956] cursor-pointer rounded-lg absolute inset-0 left-20 hover:z-50 hover:scale-110 hover:rotate-0"
                        alt="about"
                        width={200}
                        height={300}
                    />
                </div>
                <div className="w-full md:w-3/5 flex flex-col items-start justify-between gap-10 p-5 md:pr-12">
                    <h3>Curious about me?</h3>
                    <p>
                        Exercitation ut enim ad velit aute nulla. Velit
                        adipisicing minim dolore esse sit consequat pariatur
                        dolore in mollit. Lorem veniam id sit mollit voluptate
                        aliquip tempor in ipsum. Exercitation Lorem ad
                        incididunt deserunt laboris ullamco sint deserunt
                        consectetur qui ex consectetur. Et velit consectetur
                        aute ea qui cillum ex in. Magna elit tempor dolore
                        adipisicing anim adipisicing voluptate ipsum cupidatat
                        dolore. Duis nostrud pariatur qui aliquip tempor amet in
                        cupidatat. Exercitation ut enim ad velit aute nulla.
                        Velit adipisicing minim dolore esse sit consequat
                        pariatur dolore in mollit. Lorem veniam id sit mollit
                        voluptate aliquip tempor in ipsum. Exercitation Lorem ad
                        incididunt deserunt laboris ullamco sint deserunt
                        consectetur qui ex consectetur. Et velit consectetur
                        aute ea qui cillum ex in. Magna elit tempor dolore
                        adipisicing anim adipisicing voluptate ipsum cupidatat
                        dolore. Duis nostrud pariatur qui aliquip tempor amet in
                        cupidatat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
