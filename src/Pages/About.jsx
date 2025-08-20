import { useState } from "react";

import myPdf from '../assets/Hasith-Wijesinghe-CV.pdf';
import dp from '../assets/dp.jpg'

const About = () => {

    const [show, setShow] = useState(false)

    return (

        <div class='flex w-full justify-center items-center mt-6 gap-5'>
            <title>About</title>

            <div class=' hidden gap-10 items-center w-[40%]  lg:text-9xl text-5xl font-bold sm:flex flex-col pl-5'>

                <h1 class='text-blue-800 italic lg:pr-40' >About</h1>
                <h1 class='text-blue-800 italic lg:pl-70' >Me</h1>

            </div>

            <div class='sm:border-l-8 rounded-bl-lg rounded-t-lg border-indigo-600 rounde min-w-[60%] flex flex-col gap-5 px-6 pb-5'>

                <div class="flex justify-end">
                    <div onClick={() => setShow(true)} class="bg-black text-white px-3 py-1 rounded-lg hover:opacity-70 hover:cursor-pointer">
                        View Resume
                    </div>
                </div>

                <div class='flex flex-row gap-2'>
                    <img class="rounded-full w-28 h-28" src={dp} />
                    <div class="flex flex-col justify-between py-1">
                        <h1 class='sm:text-5xl text-2xl text-gray-800 font-semibold'> Hello I'm Hasith Wijesinghe</h1>
                        <h1 class='lg:text-2xl text-3sm'>Undergraduate at UCSC | Computer Science</h1>
                    </div>
                </div>
                <p class='w-[91%] flex text-green-700'>

                    Passionate full-stack developer with a
                    strong foundation in web development
                    and a keen interest in software engineering.
                    I am currently pursuing my undergraduate degree
                    at the University of Colombo School of Computing
                    , where I am honing my skills in programming,
                    problem-solving, and working hard.
                    I have experience in various programming
                    languages and frameworks, and I am always
                    eager to learn new technologies and
                    improve my skills.

                </p>

                <p>

                    My goal is to create
                    innovative and efficient software solutions
                    that make a positive impact on people's lives.

                </p>

                <div class='flex flex-col lg:flex-row gap-5'>
                    <div class='flex flex-col gap-5'>
                        <div class=' rounded-3xl bg-blue-50 items-center pt-3 pb-8 px-6 flex gap-2 flex-col'>
                            <h1 class='underline font-bold italic'>Experience</h1>
                            <p>
                                Third year
                                Computer
                                Science
                                Undergraduate</p>
                        </div>
                        <div class=' rounded-3xl bg-blue-50 items-center pt-3 pb-8 px-10 flex gap-2 flex-col'>

                            <h1 class='underline font-bold italic'>Education</h1>
                            <p>Bachelor of Science in Computer Science (BSc. in CS)</p>

                        </div>
                    </div>

                    <div class='flex flex-col gap-5'>
                        <div class=' rounded-3xl bg-blue-50 items-center pt-3 pb-8 px-10 flex gap-2 flex-col'>

                            <h1 class='underline font-bold italic'>Projects</h1>
                            <p>Experience in react, node, java <a class='text-blue-400' href="/home">projects</a></p>

                        </div>
                        <div class=' rounded-3xl bg-blue-50 items-center pt-3 pb-8 sm:px-3 px-7 flex gap-2 flex-col'>

                            <h1 class='underline font-bold italic'>Location</h1>
                            <p class='text-sm'>'WIJAYAWASA',
                                HATHTHAKA,
                                PITIGALA.
                            </p>

                        </div>
                    </div>

                </div>

            </div>
            {show &&
                <div class='fixed z-50 top-0 w-full h-full bg-white'>
                    <div class="flex justify-end">

                        <button

                            class="bg-red-400 text-white rounded-full m-2 px-2 py-0.5 border-2 hover:cursor-pointer hover:bg-red-500"
                            onClick={() => setShow(false)}
                        >
                            X
                        </button>

                    </div>
                    <iframe
                        src={myPdf}
                        className="w-full flex-grow h-screen"
                        title="Hasith Wijesinghe CV"
                    >
                    </iframe>
                </div>
            }

        </div>

    );

}

export default About;