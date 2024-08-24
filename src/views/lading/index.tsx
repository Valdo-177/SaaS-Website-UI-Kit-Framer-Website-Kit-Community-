import Image from 'next/image'
import React from 'react'
import img1 from '@/src/assets/lading/imgHero1.svg'
import img2 from '@/src/assets/lading/imgHero2.svg'
import img3 from '@/src/assets/lading/imgHero3.svg'
import acme from '@/src/assets/lading/acme.svg'
import apex from '@/src/assets/lading/apex.svg'
import celestial from '@/src/assets/lading/celestia.svg'
import echo from '@/src/assets/lading/echo.svg'
import quantum from '@/src/assets/lading/quantum.svg'
import pulse from '@/src/assets/lading/pulse.svg'
import ProductImage from '@/src/assets/lading/ProductImage.svg'
import pyramid from '@/src/assets/lading/pyramid.svg'
import torus from '@/src/assets/lading/torus.svg'
import Icons1 from '@/src/assets/lading/Icons1.svg'
import Icons2 from '@/src/assets/lading/Icons2.svg'
import Icons3 from '@/src/assets/lading/Icons3.svg'
import Icons4 from '@/src/assets/lading/Icons4.svg'
import row from '@/src/assets/lading/row.svg'
import cubeHelix from '@/src/assets/lading/cube-helix.svg'
import cubeHelix1 from '@/src/assets/lading/cube-helix1.svg'
import prices from '@/src/assets/lading/prices.svg'
import emojistar from '@/src/assets/lading/emojistar.svg'
import helix2 from '@/src/assets/lading/helix2.svg'
import redes from '@/src/assets/lading/redes.svg'

const Lading = () => {
    return (
        <main className='overflow-hidden'>
            <section className='sm:px-8 p-10 px-5 min-h-screen flex justify-center bg-gradient-to-b from-[#EAEEFE] to-[#183EC2]'>
                <div className='flex flex-col sm:flex-row items-center w-full md:max-w-[80rem]'>
                    <div className='w-full sm:w-[37rem] h-full flex justify-center gap-3 flex-col'>
                        <div className='border w-40 px-2 py-1 rounded-xl border-[#ffffff57]'>
                            <span>Version 2.0 is here</span>
                        </div>
                        <h1 className='text-6xl xl:text-8xl font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text'>Pathway to <br /> productivity</h1>
                        <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                        <div className='flex items-center gap-3'>
                            <div className='cursor-pointer bg-black text-white px-3 py-1 rounded-xl w-[7rem]'>
                                <span>Get for free</span>
                            </div>
                            <div className='cursor-pointer flex items-center gap-1'>
                                <span>Learn more</span>
                                <Image className='' src={row} width={20} height={100} alt='img' />
                            </div>
                        </div>
                    </div>
                    <div className='relative sm:w-full w-[90%]'>
                        <Image className='hidden sm:block absolute -top-[12rem] left-0 animation1' src={img1} width={200} height={200} alt='img' />
                        <Image className='animation3' src={img2} width={500} height={500} alt='img' />
                        <Image className='hidden sm:block absolute -bottom-[12rem] right-0 animation2' src={img3} width={200} height={200} alt='img' />
                    </div>
                </div>
            </section>
            <section className='items-center flex-wrap sm:flex-row flex justify-center gap-10 sm:my-20 py-14 bg-[#FFFFFF]'>
                <Image className='cursor-pointer' src={acme} width={150} height={200} alt='img' />
                <Image className='cursor-pointer' src={quantum} width={150} height={200} alt='img' />
                <Image className='cursor-pointer' src={echo} width={150} height={200} alt='img' />
                <Image className='cursor-pointer' src={celestial} width={150} height={200} alt='img' />
                <Image className='cursor-pointer' src={pulse} width={115} height={200} alt='img' />
                <Image className='cursor-pointer' src={apex} width={115} height={100} alt='img' />
            </section>
            <section className='sm:py-10 p-10 px-5 min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]'>
                <div className='sm:my-20 w-full sm:max-w-[80rem] mx-auto flex-col items-center flex gap-10'>
                    <p className='py-2 px-5 border rounded-2xl h-10 border-gray-300'>Boost your productivity</p>
                    <h2 className='sm:py-3 text-6xl xl:text-8xl font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text text-center'>A more effective way <br /> to track progress</h2>
                    <p className='text-[#010D3E] text-xl sm:w-[50rem] text-center'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
                    <div className='relative w-full flex items-center justify-center'>
                        <Image className='cursor-pointer -left-20 absolute top-5 w-[7rem]' src={torus} width={200} height={100} alt='img' />
                        <Image className='cursor-pointer' src={ProductImage} width={1200} height={1200} alt='img' />
                        <Image className='cursor-pointer -right-20 absolute bottom-0 w-[7rem]' src={pyramid} width={200} height={100} alt='img' />
                    </div>
                    <div className='flex items-center gap-10 sm:gap-2 sm:w-[70rem] w-full flex-col sm:flex-row'>
                        <div>
                            <Image className='' src={Icons1} width={20} height={100} alt='img' />
                            <h3 className='font-bold text-lg'>Integration ecosystem</h3>
                            <p>Track your progress and motivate your efforts everyday.</p>
                            <div className='flex items-center gap-1'>
                                <span>Learn more</span>
                                <Image className='' src={row} width={20} height={100} alt='img' />
                            </div>
                        </div>
                        <div>
                            <Image className='' src={Icons2} width={20} height={100} alt='img' />
                            <h3 className='font-bold text-lg'>Goal setting and tracking</h3>
                            <p>Set and track goals withmanageable task breakdowns.</p>
                            <div className='flex items-center gap-1'>
                                <span>Learn more</span>
                                <Image className='' src={row} width={20} height={100} alt='img' />
                            </div>
                        </div>
                        <div>
                            <Image className='' src={Icons3} width={20} height={100} alt='img' />
                            <h3 className='font-bold text-lg'>Secure data encryption</h3>
                            <p>Ensure your datas safety with top-tier encryption.</p>
                            <div className='flex items-center gap-1'>
                                <span>Learn more</span>
                                <Image className='' src={row} width={20} height={100} alt='img' />
                            </div>
                        </div>
                        <div>
                            <Image className='' src={Icons4} width={20} height={100} alt='img' />
                            <h3 className='font-bold text-lg'>Customizable notifications</h3>
                            <p>Get alerts on tasks and deadlines that matter most.</p>
                            <div className='flex items-center gap-1'>
                                <span>Learn more</span>
                                <Image className='' src={row} width={20} height={100} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10 min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]'>
                <div className='sm:my-20 w-full p-10 px-10 sm:max-w-[80rem] mx-auto flex-col items-center flex gap-10'>
                    <p className='py-2 px-5 border rounded-2xl h-10 border-gray-300'>Everything you need</p>
                    <h2 className='py-3 text-5xl xl:text-8xl font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text text-center'>Streamlined for easy <br /> management</h2>
                    <p className='text-[#010D3E] text-xl sm:w-[50rem] text-center'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
                    <div className='w-full flex justify-between gap-20 my-20 flex-col sm:flex-row'>
                        <div className='px-5 sm:w-[28rem] flex flex-col bg-slate-100 shadow-xl rounded-xl hover:shadow-md gap-2 items-center justify-center py-[7rem]'>
                            <Image className='cursor-pointer' src={cubeHelix} width={200} height={100} alt='img' />
                            <h3 className='text-2xl font-bold text-center'>Integration ecosystem</h3>
                            <p className='text-center'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                        </div>
                        <div className='px-5 sm:w-[28rem] flex flex-col bg-slate-100 shadow-xl rounded-xl hover:shadow-md gap-2 items-center justify-center py-[7rem]'>
                            <Image className='cursor-pointer' src={cubeHelix1} width={200} height={100} alt='img' />
                            <h3 className='text-2xl font-bold text-center'>Goal setting and tracking</h3>
                            <p className='text-center'>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
                        </div>
                    </div>
                    <p className='py-2 px-5 border rounded-2xl h-10 border-gray-300'>Boost your productivity</p>
                    <h2 className='py-3 text-6xl xl:text-8xl font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text text-center'>A more effective way <br /> to track progress</h2>
                    <p className='text-[#010D3E] text-xl sm:w-[50rem] text-center'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
                    <Image className='cursor-pointer' src={prices} width={1200} height={100} alt='img' />
                    <div className='flex items-center flex-col gap-5 w-full h-[34rem] justify-center relative'>
                        <Image className='cursor-pointer absolute bottom-0 -right-[8rem] w-[9rem] sm:w-auto' src={helix2} width={250} height={100} alt='img' />
                        <Image className='cursor-pointer absolute top-0 -left-[8rem] w-[9rem] sm:w-auto' src={emojistar} width={250} height={100} alt='img' />
                        <h2 className='py-3 text-6xl xl:text-8xl font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text text-center'>Sign up for free today</h2>
                        <p className='text-[#010D3E] text-xl sm:w-[50rem] text-center'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                        <div className='flex items-center gap-3'>
                            <div className='cursor-pointer bg-black text-white px-3 py-1 rounded-xl w-[7rem]'>
                                <span>Get for free</span>
                            </div>
                            <div className='cursor-pointer flex items-center gap-1'>
                                <span>Learn more</span>
                                <Image className='' src={row} width={20} height={100} alt='img' />
                            </div>
                        </div>
                    </div>
                </div >
            </section>
            <section className='bg-[#111] sm:h-[20rem] text-white py-5'>
                <div className='flex flex-col sm:flex-row items-center gap-5 justify-between max-w-[70rem] mx-auto h-full'>
                    <div className='flex flex-col justify-between sm:h-[16rem] h-[8rem]'>
                        <p className='w-[20rem]'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
                        <Image className='' src={redes} width={200} height={100} alt='img' />
                    </div>
                    <div className='sm:h-[80%] flex items-center justify-between w-[20rem] sm:flex-row flex-wrap gap-14 cursor-pointer'>
                        <div className='flex flex-col justify-between h-full'>
                            <h3 className='font-bold text-lg'>Product</h3>
                            <p className='text-gray-500'>Features</p>
                            <p className='text-gray-500'>Integrations</p>
                            <p className='text-gray-500'>Updates</p>
                            <p className='text-gray-500'>FAQ</p>
                            <p className='text-gray-500'>Pricing</p>
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            <h3 className='font-bold text-lg'>Company</h3>
                            <p className='text-gray-500'>About</p>
                            <p className='text-gray-500'>Blog</p>
                            <p className='text-gray-500'>Careers</p>
                            <p className='text-gray-500'>Manifesto</p>
                            <p className='text-gray-500'>Press</p>
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            <h3 className='font-bold text-lg'>Resources</h3>
                            <p className='text-gray-500'>Examples</p>
                            <p className='text-gray-500'>Integrations</p>
                            <p className='text-gray-500'>Updates</p>
                            <p className='text-gray-500'>FAQ</p>
                            <p className='text-gray-500'>Pricing</p>
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            <h3 className='font-bold text-lg'>Legal</h3>
                            <p className='text-gray-500'>Privacy</p>
                            <p className='text-gray-500'>Terms</p>
                            <p className='text-gray-500'>Security</p>
                            <p className='text-gray-500'>FAQ</p>
                            <p className='text-gray-500'>Pricing</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Lading