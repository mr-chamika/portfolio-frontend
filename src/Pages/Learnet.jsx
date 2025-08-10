import fb from '../assets/Post/fb.png'
import git from '../assets/Post/github.png'
import linkedin from '../assets/Post/linkedin.png'

import pici1 from '../assets/Home/Learnet/forum.png'
import pici2 from '../assets/Home/Learnet/ss1.png'
import pici3 from '../assets/Home/Learnet/ss2.png'
import pici4 from '../assets/Home/Learnet/ss3.png'
import pici5 from '../assets/Home/Learnet/ss4.png'

const Post = () => {

    return (

        <div class='flex flex-col gap-20 items-center py-10 w-full'>

            <p class='w-[80%] sm:text-2xl text-sm'>

                Learnet is an educational platform we developed during
                our second year at university, designed to facilitate
                learning among students. The platform serves as a hub for
                sharing academic resources such as lecture notes, presentations, and study guides. One of
                its key features is the integrated forum, which I personally
                developed. This forum allows users to post questions, share
                answers, and engage in meaningful discussions on various
                academic topics. It supports threaded conversations,
                notifications, and basic moderation tools to ensure a
                constructive learning environment. The idea behind Learnet
                was to create a digital space that fosters peer-to-peer
                interaction and knowledge exchange, especially helpful
                during exam periods and group projects. By encouraging
                students to contribute and support each other, Learnet
                enhances the overall academic experience. The project
                was built using web tec

            </p>

            <img src={pici1} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='w-[75%] sm:text-2xl text-sm' >

                Above is the forum we created in our system.
                And these are the questions posted by the users
                in our system.

            </p>

            <img src={pici2} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <p class='w-[75%] sm:text-2xl text-sm'>

                Above is the view we created in our system
                to questions display which are created
                by the logged user in our system. Also
                you can see more views of the forum that how
                create a question, comment, answer a question

            </p>

            <img src={pici3} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <img src={pici4} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <img src={pici5} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <ul class='flex sm:w-[40%] w-[25%] justify-center p-3 sm:gap-10 border-t-1 border-gray-200 sm:p-7'>
                <li><a href='https://github.com/mr-chamika/Learnet.git'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={git} /></a></li>
                <li><a href='https://web.facebook.com/last.hista'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={fb} /></a></li>
                <li><a href='https://www.linkedin.com/in/hasith-wijesinghe-3394062a2'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={linkedin} /></a></li>
            </ul>

        </div>


    );

}

export default Post;