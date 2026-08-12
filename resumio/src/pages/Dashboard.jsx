import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets';

const Dashboard = () => {

    const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a'];

    const [allResumes, setAllResumes] = useState([]);

    const [showCreateResume, setShowCreateResume] = useState(false);
    const [showUploadResume, setShowUploadResume] = useState(false);

    const loadAllResumes = async() =>{
        setAllResumes(dummyResumeData)
    }

    useEffect(()=>{
        loadAllResumes()
    }, []);


  return (
    <div>
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <p className='text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>

            <div className='flex gap-4'>
                <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                    <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-red-500 to-orange-300 text-white rounded-full'/>
                    <p className='text-sm group-hover:text-red-600 transition-all duration-300'>Create Resume</p>
                </button>

                <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                    <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-yellow-300 to-red-500 text-white rounded-full'/>
                    <p className='text-sm group-hover:text-red-600 transition-all duration-300'>Upload Existing</p>
                </button>
            </div>

            <hr className='border-slate-300 my-6 sm:w-[305px]'/>

            <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
                {allResumes.map((resume, idx)=>{
                    const baseColor = colors[idx % colors.length];

                    return (
                        <button key={idx} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40) `, borderColor:baseColor+'40'}}>
                            <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{color: baseColor}}/>

                            <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' style={{color: baseColor}}>{resume.title}</p>

                            <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{color: baseColor + '90'}}>
                                Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                            </p>

                            <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                                <TrashIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' style={{color: baseColor}}/>

                                <PencilIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' style={{color: baseColor}}/>
                            </div>
                        </button>
                    )
                })}
            </div>

            {showCreateResume && (
                <form className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                    <div>
                        <h2>Create a Resume</h2>
                        <input type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-red-600 ring-red-600'/>
                        <button className='w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'>Create Resume</button>

                        <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{
                            setShowCreateResume(false);
                        }}/>
                    </div>

                </form>
            )}

        </div>
    </div>
  )
}

export default Dashboard