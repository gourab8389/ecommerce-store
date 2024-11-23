import { LocationDialog } from "../landing/location-dialog";

const Navbar = () => {
  return (
    <section className='w-full max-w-screen-2xl px-5 md:px-14 flex gap-5 items-center justify-center fixed top-0 left-0 right-0 mx-auto shadow-sm h-[5rem]'>
        <div className="w-[30%] flex items-center justify-between">
            <div className="flex items-center justify-center">
            <h1 className='text-sky-950 font-extrabold text-4xl'>Logo</h1>
            </div>
            <LocationDialog/>
        </div>
        <div className="w-[20%] hidden md:flex gap-5">

        </div>
        <div className="w-[50%]"></div>
    </section>
  )
}

export default Navbar;
