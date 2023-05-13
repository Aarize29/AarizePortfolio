// import React from 'react'
// import './Contact.css'
// const Contact = () => {
//   return (
//     <div className='flex flex-col '>
//       <div className='flex flex-col items-center justify-center'>
//         <h1 className='text-4xl font-bold text-[purple] underline decoration-gray-700 mt-10'>Contact Me</h1>
//         <p className='text-xl text-gray-300 text-center mt-5'>I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!</p>
//         </div>

//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react';
import './Contact.css';
import { addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { collection } from 'firebase/firestore';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');

    addDoc(collection(db, 'contacts'), {
      name: name,
      email: email,
      message: message,
      time: new Date(),
    })
      .then(() => {
        alert('Message has been submitted');
      }
      )
  };
 
  return (
    <div className="text-gray-200  mt-8 mb-16 border-solid border-gray-700 border-4 rounded-2xl  overflow-y-scroll hide-scrollbar">
      <h1 className="text-center text-3xl font-bold mt-2 mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[purple] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Submit
        </button>
      </form>

       <div className="flex justify-between items-center text-xl font-bold underline decoration-white text-[purple] m-4 mb-0">
         <div>+91 6203995489</div>
         <div>shamsaarize@gmail.com</div>
         <div>heymann955@gmail.com</div>
       </div>
    </div>
  );
};

export default Contact;

