"use client"
import {useChat} from 'ai/react'
import { PiArrowFatLinesDownBold,PiPaperPlaneRightFill } from "react-icons/pi";
import {BiSolidUser} from 'react-icons/bi'
import {VscHubot} from 'react-icons/vsc'
import Textarea from 'react-textarea-autosize'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';



export default function Home() {
  const {messages, input, handleInputChange, handleSubmit} = useChat({
    api:"/api",
  });
  const messageEndRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    scrollToBottom()
  },[messages]
  )
  
  return (
    <div className=" min-h-screen bg-site bg-cover bg-center bg-blend-darken">{
      messages.length !== 0 ? (
        <div className='pb-32 pt-5 space-y-5 w-[75%] mx-auto relative'>
        {
          messages.map((message) => (
            <div key={message.id} className='w-full' >
            {message.role === 'user' ? (
              <motion.div variants={fadeIn("right", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden" className='flex gap-x-2 '>
              <div className='bg-gray-600 h-12 w-12 rounded-lg flex items-center justify-center'>
              <BiSolidUser className='text-4xl'/>
              </div>
              <p className='rounded-lg p-3 w-full bg-[rgb(17,17,17)] border-gray-800 border-2 text-sm'>{message.content}</p>
              </motion.div>
              ):(
                <motion.div variants={fadeIn("left", 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden" className='flex gap-x-2 '>
                <div className='bg-[#17BBC6] h-12 w-12 rounded-lg flex items-center justify-center'>
                <VscHubot className='text-4xl'/>
                </div>
                <p className='rounded-lg p-3 w-full bg-[rgb(17,17,17)] border-blue-900 border-2 text-sm'>{message.content}</p>
                </motion.div>
                )
              }
              
              </div>
              ))}
              </div>
              
              ):(
                <div className='w-full flex justify-center pt-32 p-4'>
                <motion.h1 variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden" className='font-bold text-3xl flex gap-x-4 justify-center items-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg z-10'>
                Pergunte o que quizer para o Codex.<PiArrowFatLinesDownBold className='text-2xl fill-[#17BBC6] animate-bounce transition-all delay-100'/>
                </motion.h1>
                </div>
                )
              }
              <div ref={messageEndRef}></div>
              <form onSubmit={handleSubmit} className='p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-transparent'>
              <motion.div variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden" className='relative flex items-center'>
              <Textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Digite aqui sua pergunta"
              className='rounded-lg resize-none focus:outline-none shadow-gray-600 shadow-md placeholder:text-gray-300 text-sm p bg-neutral-800 text-neutral-200 p-5 pr-16 w-full'
              rows={1}
              spellCheck={false}
              tabIndex={0}
              autoFocus
              required
              />
              <button type='submit' title='enviar' className='absolute bg-[#17BBC6] p-2 rounded-lg right-0 mr-5 hover:bg-[#5be4ee] hover:text-black'><PiPaperPlaneRightFill className='text-1xl'/></button>
              </motion.div>
              </form>
              </div>
              )
            }
            