import React from 'react'

const ExperienceForm = ({data, onnChange}) => {
  return (
    <div className='space-y-6'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Summary</h3>
                <p className='text-sm text-gray-500'>Add summary for your resume here</p>
            </div>
            <button className='flex items-center gap-2 px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition-colors disabled:opacity-50'>
                <Sparkles className='size-4'/>
                AI Enhance
            </button>
        </div>
    </div>
  )
}

export default ExperienceForm