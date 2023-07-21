"use client"
import {useChat} from 'ai/react'
import { PiArrowFatLinesDownBold,PiPaperPlaneRightFill } from "react-icons/pi";
import {BiSolidUser} from 'react-icons/bi'
import {VscHubot} from 'react-icons/vsc'
import Textarea from 'react-textarea-autosize'
import { useEffect, useRef } from 'react';



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
    <div className=" min-h-screen bg-[rgb(17,17,17)]">{
      messages.length !== 0 ? (
        <div className='pb-32 pt-5 space-y-5 w-[75%] mx-auto relative'>
        {
          messages.map((message) => (
            <div key={message.id} className='w-full' >
            {message.role === 'user' ? (
              <div className='flex gap-x-2 '>
              <div className='bg-gray-600 h-12 w-12 rounded-lg flex items-center justify-center'>
              <BiSolidUser className='text-4xl'/>
              </div>
              <p className='rounded-lg p-3 w-full border-gray-800 border-2 text-sm'>{message.content}</p>
              </div>
              ):(
                <div className='flex gap-x-2 '>
              <div className='bg-blue-900 h-12 w-12 rounded-lg flex items-center justify-center'>
              <VscHubot className='text-4xl'/>
              </div>
              <p className='rounded-lg p-3 w-full border-blue-900 border-2 text-sm'>{message.content}</p>
              </div>
                )
              }
              
              </div>
              ))}
            </div>
            
            ):(
              <div className='w-full flex justify-center pt-32'>
              <h1 className='{h1Page.className}font-bold text-3xl flex gap-x-4 justify-center items-center'>
              Pergunte o que quizer para a IA <PiArrowFatLinesDownBold className='text-2xl'/>
              </h1>
              </div>
              )
            }
            <div ref={messageEndRef}></div>
            <form onSubmit={handleSubmit} className='p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-[rgb(17,17,17)]'>
            <div className='relative flex items-center'>
            <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Digite aqui sua pergunta"
            className='rounded-lg focus:outline-none shadow-gray-600 shadow-md placeholder:text-gray-200 text-sm p bg-neutral-800 text-neutral-200 p-5 pr-16 w-full'
            rows={1}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            tabIndex={0}
            autoFocus
            required
            />
            <button type='submit' className='absolute bg-blue-800 p-2 rounded-lg right-0 mr-5 hover:bg-blue-400 hover:text-black'><PiPaperPlaneRightFill className='text-1xl'/></button>
            </div>
            </form>
            </div>
            )
          }
          