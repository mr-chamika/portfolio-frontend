import Background from '../assets/Landing Page/background-dark.jpg'

const Landing = () => {

    return (

        <div class='relative w-screen h-screen overflow-hidden'>
            <title>Welcome</title>


            <img class='absolute w-screen h-screen object-cover' src={Background} />
            <div class="absolute inset-0 flex flex-col gap-15 items-center justify-center">
                <p class='mask-b-from-neutral-400 text-3xl sm:text-7xl  text-green-200'>HASITH WIJESINGHE</p>
                <nav class='flex flex-col sm:gap-25 gap-5 w-[75%] sm:h-17 h-50 justify-center sm:flex-row'>

                    <a class='text-center py-4 min-w-60 sm:min-w-55 sm:text-2xl text-1xl border-1 rounded-2xl text-gray-100 transtion hover:font-bold, hover:border-3 duration-200 ease-in' href='/about'>About</a>
                    <a class='text-center py-4 min-w-60 sm:min-w-55 sm:text-2xl text-1xl border-1 rounded-2xl text-gray-100 transtion hover:font-bold, hover:border-3 duration-200 ease-in' href='/contact'>Contact</a>
                    <a class='text-center py-4 min-w-60 sm:min-w-55 sm:text-2xl text-1xl border-1 rounded-2xl text-gray-100 transtion hover:font-bold, hover:border-3 duration-200 ease-in' href='/home'>Home</a>

                </nav>
            </div>
        </div>



    );

}

export default Landing;