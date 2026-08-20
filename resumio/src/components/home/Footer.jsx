import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-14 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-linear-to-r from-white via-red-200/60 to-white mt-40">
            <div className="flex flex-wrap items-start gap-10 md:gap-15 xl:gap-35">
                <a href="#">
                    <img src="/logo2.svg" alt="logo" className='h-7 w-auto'/>
                </a>
            </div>
            <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://www.linkedin.com/in/dev-paliwal-08b2b81a3/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-red-500" aria-hidden="true">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
                <p className="mt-3 text-center">© 2026 <a href="/">Resumio</a></p>
            </div>
        </footer>

        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>
    </>
  )
}

export default Footer