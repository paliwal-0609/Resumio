import { Plus, Trash2 } from 'lucide-react';
import React from 'react'

const SkillForm = ({data = [], onChange}) => {

    const addSkill = () =>{
        onChange([...data, ""])
    }

    const removeSkill = (index) =>{
        const updated = data.filter((_, i)=> i !== index);
        onChange(updated);
    }

    const updateSkill = (index, value) =>{
        const updated = [...data];
        updated[index] = value;
        onChange(updated);
    }


  return (
    <div>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Skills</h3>
                <p className='text-sm text-gray-500'>Add your skills</p>
            </div>
            <button onClick={addSkill} className='flex items-center gap-2 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors'>
                <Plus className='size-4'/>
                Add Skill
            </button>
        </div>

        <div className='space-y-4 mt-6'>
            {data.map((skill, index)=>(
                <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
                    <div className='flex justify-between items-start'>
                        <h4>Skill #{index+1}</h4>
                        <button onClick={()=> removeSkill(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                            <Trash2 className='size-4'/>
                        </button>
                    </div>

                    <div className='grid gap-3'>
                        <input value={skill || ""} onChange={(e)=>updateSkill(index, e.target.value)} type="text" placeholder='Skill Name' className='px-3 py-2 text-sm rounded-lg'/>

                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default SkillForm