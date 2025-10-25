import fb from '../assets/Post/fb.png'
import git from '../assets/Post/github.png'
import linkedin from '../assets/Post/linkedin.png'

import pici1 from '../assets/Home/Ecommerce/signup.png'
import pici3 from '../assets/Home/Ecommerce/admindashboard.png'
import pici4 from '../assets/Home/Ecommerce/adminPrevileges.png'
import pici5 from '../assets/Home/Ecommerce/userprevileges.png'
import pici7 from '../assets/Home/Ecommerce/userdashboard.png'
import pici8 from '../assets/Home/Ecommerce/userdashboard2.png'
import pici9 from '../assets/Home/Unihelp/s1.png'
import pici10 from '../assets/Home/Unihelp/logout.png'

const Ecommerce = () => {

    return (

        <div class='flex flex-col gap-20 items-center py-10 w-full'>

            <p class='w-[80%] sm:text-2xl text-sm'>

                This project focuses on secure and user-friendly Role-Based eCommerce Admin Dashboard for
                managing backend operations of an online store. It includes features such as authentication,
                role-based access control, and customizable pages to provide administrators with efficient control over users,
                products, and orders.The system ensures that each user role has appropriate permissions,
                maintaining data security and operational efficiency. It also supports flexible dashboard customization and
                clear data visualization, helping administrators monitor and manage the eCommerce platform effectively.

            </p>

            <img src={pici1} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='w-[75%] sm:text-2xl text-sm' >

                Above is the login from i have created.

            </p>

            <img src={pici3} class='w-[75%] shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <p class='w-[75%] sm:text-2xl text-sm' >

                The Admin Dashboard provides a secure interface for administrators to manage the eCommerce platform. Admins can view system summaries like total users, products, orders, and categories. They have full control over resources adding, editing, or deleting users, products, categories, orders, order items, and settings. Access is role-based, ensuring that only admins can perform sensitive actions.

            </p>

            <img src={pici4} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <p class='w-[75%] sm:text-2xl text-sm'>

                As you can see in above view, admin can View, Edit, Delete and Create perform on Category table. But user role's access limited. You can see that below, users can only View the Category table.

            </p>

            <img src={pici5} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <p class='w-[75%] sm:text-2xl text-sm'>

                Below View is the user dashboard
                Regular users can log in and access a limited dashboard that shows their personal info, recent orders, products, and categories.
                They cannot see or modify Users or Settings tables. Role-based visibility and access are handled in AdminJS so users see only the data relevant to them.

            </p>

            <img src={pici7} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />
            <img src={pici8} class='w-[75%]  shadow-2xl shadow-gray-300 border-[100%] p-5' />

            <ul class='flex sm:w-[40%] w-[25%] justify-center p-3 sm:gap-10 border-t-1 border-gray-200 sm:p-7'>
                <li><a href='https://github.com/mr-chamika/UniHelp.git'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={git} /></a></li>
                <li><a href='https://web.facebook.com/last.hista'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={fb} /></a></li>
                <li><a href='https://www.linkedin.com/in/hasith-wijesinghe-3394062a2'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={linkedin} /></a></li>
            </ul>

        </div>
    )

}

export default Ecommerce;