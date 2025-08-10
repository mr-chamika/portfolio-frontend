import pic1 from '../assets/Home/Learnet Logo.png'
import pic2 from '../assets/Home/Bookworm Logo.png';
import pic3 from '../assets/Home/Unihelp/logo.png'

const Home = () => {

    return (
        <>
            <title>Home</title>

            <h1 class='flex w-[90%] mx-auto text-3xl sm:text-6xl mt-5 font-[Montserrat]'>My Projects</h1>
            <div class='flex flex-col gap-30 items-center pt-10 pb-20 w-full'>


                <div class='shadow-[1px_1px_9px] shadow-gray-300 mx-5 rounded-2xl pb-15 w-[90%]'>
                    <img src={pic1} width='750px' height='250px' class='mx-auto' />
                    <p class='w-[90%] sm:w-[85%] mx-auto sm:text-2xl text-sm'>

                        Learnet is an educational platform developed during our
                        second year at university. We used <i class='text-blue-300'>HTML</i> to build
                        User Interfaces. It enables students to share
                        study materials, and access academic resources in one place.
                        I created the forum  feature, allowing users to post questions, engage in
                        discussions, and support peer learning. The project
                        promotes interactive, community-based education
                        and resource sharing <a class='text-blue-600' href='/home/learnet'>Visit Project (JS + Node)</a>

                    </p>

                </div>

                <div class='shadow-[1px_1px_9px] shadow-gray-300 mx-5 rounded-2xl pb-15 w-[90%]'>
                    <img src={pic2} width='600px' class='mx-auto my-5' />
                    <p class='w-[90%] sm:w-[85%] mx-auto sm:text-2xl text-sm'>

                        BookWorm is a library management system developed during our
                        second year at university. We used <i class='text-blue-300'>React</i> to build
                        User Interfaces. It can manage a library like manage overdue books, borrowed books.
                        I created the Catalog, Books and Users components that allowing manage books and
                        users within the system.<a class='text-blue-600' href='/home/bookworm'>Visit Project (React + Java)</a>

                    </p>

                </div>

                <div class='shadow-[1px_1px_9px] shadow-gray-300 mx-5 rounded-2xl pb-15 w-[90%]'>
                    <img src={pic3} width='300px' class='mx-auto my-5' />
                    <p class='w-[90%] sm:w-[85%] mx-auto sm:text-2xl text-sm'>

                        UniHelp is a solely developed project by myself to manage my university life
                        . I used <i class='text-blue-300'>React</i> to build
                        User Interfaces. It can create schedules, calculate your gpa and also store some notes.
                        I created the signup, login system, user friendly dashboard, scientific and gpa calculator and a file
                        storage within the system.<a class='text-blue-600' href='/home/unihelp'>Visit Project (React + Node)</a>

                    </p>

                </div>

            </div>
        </>
    );

}

export default Home;