import fb from '../assets/Post/fb.png'
import git from '../assets/Post/github.png'
import linkedin from '../assets/Post/linkedin.png'
import pic1 from '../assets/Home/BookWorm/bw1.png'
import pic2 from '../assets/Home/BookWorm/bw2.png'
import pic3 from '../assets/Home/BookWorm/bw3.png'
import pic4 from '../assets/Home/BookWorm/bw4.png'
import pic5 from '../assets/Home/BookWorm/bw5.png'
import pic6 from '../assets/Home/BookWorm/bw6.png'
import pic7 from '../assets/Home/BookWorm/bw7.png'


const Post = () => {

    return (

        <div class='flex flex-col gap-20 items-center py-10 w-full'>

            <p class='text-justify w-[80%] sm:text-2xl text-sm'>

                Bookworm is a library management
                system designed to streamline the administration
                of books and users within a library environment.
                Built with a user-friendly interface, Bookworm
                allows librarians to efficiently manage book
                inventories, track availability, and
                The system also supports user management,
                enabling the registration, authentication, and
                role assignment of members such as students,
                staff, and administrators. Through features
                like book lending, return tracking, overdue
                alerts, and search functionality, Bookworm
                enhances the overall efficiency and organization
                of library operations, making it an essential
                tool for modern educational and institutional
                libraries.

            </p>

            <img src={pic1} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='text-justify w-[75%] sm:text-2xl text-sm' >

                Above is the Catalog in our system.
                And admin can view the information about
                borrowed and overdue books

            </p>

            <img src={pic2} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='text-justify w-[75%] sm:text-2xl text-sm' >

                Above is the Books section in our system.
                And admin can edit the information
                of books within system. Also remove
                and add books in the system.

            </p>

            <div class=' flex-col flex md:flex-row justify-center items-center'>

                <img src={pic3} class='md:w-[30%] w-[60%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
                <img src={pic4} class='md:w-[30%] w-[60%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
                <img src={pic5} class='md:w-[30%] w-[60%] shadow-2xl shadow-gray-300 border-[100%] p-5' />

            </div>

            <img src={pic6} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='text-justify w-[75%] sm:text-2xl text-sm' >

                This is the user management section in our system.
                And admin can edit, view the information
                of users within system. Also remove
                and add users in the system.

            </p>

            <img src={pic7} class='w-[55%] shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <ul class='flex sm:w-[40%] w-[25%] justify-center p-3 sm:gap-10 border-t-1 border-gray-200 sm:p-7'>
                <li><a href='https://github.com/nadunhasalanka/libry-ms.git'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={git} /></a></li>
                <li><a href='https://web.facebook.com/last.hista'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={fb} /></a></li>
                <li><a href='https://www.linkedin.com/in/hasith-wijesinghe-3394062a2'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={linkedin} /></a></li>
            </ul>


        </div>


    );

}

export default Post;