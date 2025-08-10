import fb from '../assets/Post/fb.png'
import git from '../assets/Post/github.png'
import linkedin from '../assets/Post/linkedin.png'

import pici1 from '../assets/Home/Unihelp/signup.png'
import pici2 from '../assets/Home/Unihelp/login.png'
import pici3 from '../assets/Home/Unihelp/dashboard.png'
import pici4 from '../assets/Home/Unihelp/schedule.png'
import pici5 from '../assets/Home/Unihelp/timetable1.png'
import pici6 from '../assets/Home/Unihelp/timetable2.png'
import pici7 from '../assets/Home/Unihelp/scal.png'
import pici8 from '../assets/Home/Unihelp/gcal.png'
import pici9 from '../assets/Home/Unihelp/s1.png'
import pici10 from '../assets/Home/Unihelp/logout.png'

const Post = () => {

    return (

        <div class='flex flex-col gap-20 items-center py-10 w-full'>

            <p class='w-[80%] sm:text-2xl text-sm'>

                UniHelp is a comprehensive, all-in-one application I developed to simplify university life for individual students.

                It features secure user authentication with signup and login functionality.
                There is a sidebar and  that provides access to all essential tools,
                including a schedule calendar for managing classes and deadlines, and a dedicated
                storage for uploading and saving important notes and files. To support academic needs,
                UniHelp also includes two specialized calculators and those ara scientific calculator
                and a GPA calculator for students ease.
            </p>

            <img src={pici1} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='w-[75%] sm:text-2xl text-sm' >

                Above is the signup from i have created.

            </p>

            <img src={pici2} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='w-[75%] sm:text-2xl text-sm' >

                Above is the login from i have created.

            </p>

            <img src={pici3} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='w-[75%] sm:text-2xl text-sm' >

                This is the dashboard i have implemented and it shows the schedule of the relevant day,
                and upcomming events.

            </p>

            <img src={pici4} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <p class='w-[75%] sm:text-2xl text-sm'>

                Above is the schedule created in the system
                to schedule the events students have . Also
                you can add daily time table using below view

            </p>

            <img src={pici5} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <img src={pici6} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <p class='w-[75%] sm:text-2xl text-sm'>

                Below one is the scientific calculator i created and next one is GPA calculator

            </p>

            <img src={pici7} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <img src={pici8} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <p class='w-[75%] sm:text-2xl text-sm'>

                As you can see, below one is the storage i have created to store files and folders
                for save notes and other files(pdf,images). Also you can upload and create files
                using top right buttons to the file strorage.

            </p>
            <img src={pici9} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <img src={pici10} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <ul class='flex sm:w-[40%] w-[25%] justify-center p-3 sm:gap-10 border-t-1 border-gray-200 sm:p-7'>
                <li><a href='https://github.com/mr-chamika/UniHelp.git'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={git} /></a></li>
                <li><a href='https://web.facebook.com/last.hista'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={fb} /></a></li>
                <li><a href='https://www.linkedin.com/in/hasith-wijesinghe-3394062a2'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={linkedin} /></a></li>
            </ul>

        </div>


    );

}

export default Post;