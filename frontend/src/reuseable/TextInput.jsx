import React from 'react';

const TextInput = ({ type = 'text', value, setValue, color, label, icon, name }) => {
  return (
    <section>
      <div className='flex flex-col gap-1'>
        <label htmlFor={name} className='text-white font-bold'>{label}</label>
        <div className={`w-full rounded-lg p-2 flex items-center gap-2 ${color ? color : "focus:outline-white"}`}>
          <i className={`ri-${icon}-line text-white`}></i>
          <input
            placeholder=''
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={(e) => setValue(e)}
            className='bg-transparent outline-none text-white w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default TextInput;
