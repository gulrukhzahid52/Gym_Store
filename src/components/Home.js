import React from 'react'

import img from "./assets/Group 4.png"
import img2 from './assets/Weighing.png'
import img3 from './assets/Edit Pie Chart Report.png'
import img4 from './assets/Rectangle 26.png'
import image1 from './assets/Group 26.png'
import image2 from './assets/Group 25.png'
import image3 from './assets/WhatsApp Image 2024-05-07 at 12.09.29_f0c2849a.jpg'
import image11 from './assets/Rectangle 43.png'
import profile1 from './assets/Ellipse 7.png'
import profile2 from './assets/Group 23.png'
import pic1 from './assets/Rectangle 52.png'
import pic2 from './assets/Rectangle 54.png'
import pic3 from './assets/Rectangle 57.png'
import  pic4 from './assets/Rectangle 59.png'
import logo from './assets/Group 27.png'

const Home = () => (
    <div>
        {/* project by gulrukh */}
        <div className='Back m-60 space-y-20 font-serif '>
 {/* section 1 */}
            <div className='-space-y-24'>
            <div className='text-8xl text-center text-[#FEE715] font-black opacity-70'>CHANGE</div>
           
            </div>
            <div className='text-7xl text-center text-white'>YOUR LIFESTYE</div>
        </div>
        <div className='-space-y-14'>
{/* section 2 */}
            <div className='font-serif   h-28  rounded-lg flex justify-center opacity-80 '>
                <div className='part1 bg-[#707070] flex content-center items-center rounded-l-lg   w-1/4'>
                    <img className=' h-14 ' src={img} alt='' />
                    <div className='text-white  font-bold text-2xl my-8'>Quality Equipments</div>

                </div>
                <div className='part2 bg-[#707070] flex content-center items-center border border-x-[#FEE715] border-y-[#707070] w-1/4  '>
                    <img className=' h-14 ' src={img2} alt='' />
                    <div className='text-white font-bold text-2xl my-8'>Weight Loss</div>

                </div>
                <div className='part1 bg-[#707070] flex content-center items-center rounded-r-lg    w-1/4'>
                    <img className=' h-14 ' src={img3} alt='' />
                    <div className='text-white font-bold text-2xl my-8'>Diet Chart</div>

                </div>

            </div>
{/* Section 3 */}
            <div className='bg-[#373737] pt-44 px-24 flex space-x-10'>
                <div className='pic flex justify-center -space-x-24'>
                    <img className='size-96 mix-blend-mutiply' src={img4} alt='' />
                    <button className='bg-[#FFFFFF] px-5  mt-60  rounded-3xl w-44 h-14  mix-blend-mutiply '>
                        Best Workout Machine
                    </button>
                </div>

                <div className='text w-1/2 space-y-10  text-[#FFFFFF]'>
                    <div className='font-bold text-3xl font-serif'>
                        Get Ready to Reach
                        Your Fitness Goals

                    </div>
                    <div>
                        Combining aerobic exercise with other kinds of exercises like strength training with weights and stretching keeps muscles, ligaments, joints, and tendons healthy, flexible, and strong, so when one becomes older,
                        He is stronger and has less risk of being out of balance and falling causing fractures or other injuries
                    </div>
                    <div>
                        <button className='text-black bg-[#FEE715] px-5 py-1 rounded-full '>Buy Now</button>
                    </div>

                </div>
            </div>
            <div>



            </div>
        </div>
{/* section 4 */}
        <div className='h-2/4 space-y-20 bg-[#373737] flex flex-col items-center '>
            <div className=' pt-40 text-3xl text-white font-serif '>
                Latest Product
            </div>
            <div className='flex flex-col items-center -space-y-10 '>
                <div className='flex space-x-20 justify-around  '>
                    <img className='size-60' src={image1} alt='' />
                    <img className='size-60' src={image1} alt='' />
                    <img className='size-60' src={image1} alt='' />

                </div>
                <div className='text-9xl text-[#808080] justify-center items-center '>
                    ....
                </div>
            </div>
        </div>
{/* section 5 */}
        <div className='bg-[#373737] text-center text-5xl text-white pt-10 font-serif'> Calculate Your BMI</div>

        <div className='flex bg-[#373737]  justify-center  text-white'>
            <div className='image  item-center p-20 pl-40 w-1/2 '>
                <img className='rounded-lg item-center  size-96 ' src={image11} alt='' />

            </div>
            <div className='form w-1/2 p-10'>
                <form className='space-y-8'>
                    <div>
                        <h3 className='font-serif text-3xl'>Advanced Calculator </h3>

                    </div>
                    <div>
                        <p>Gender</p><input className='w-40 px-5 border rounded-lg border-[#FEE715]' type='text' placeholder='Male' />
                    </div>
                    <div className='flex space-x-5'>
                        <div> <p>age</p> <input className='w-40 px-5 border rounded-lg border-[#FEE715]' type='number' placeholder="20" /></div>
                        <div> <p>Weight</p> <input className='w-40 px-5 border rounded-lg border-[#FEE715]' type='number' placeholder="42" /></div>
                    </div>
                    <div className='flex space-x-4'>
                        <div><p>Height</p> <input className='w-40 px-5 border rounded-lg border-[#FEE715]' type='number' placeholder="6" /></div>
                        <button className='w-40 bg-[#FEE715] border rounded-lg w-30 px-5 text-black h-7 mt-5 '> Calculate</button>

                    </div>

                </form>
                <div className='mt-20  bg-[#808080] w-2/3 px-5 py-8 border rounded-lg border-[#FEE715]'>
                    <button>Result is<span className='text-[#FEE715] font-extrabold'>___________________________________</span></button>
                </div>

            </div>

        </div>
{/* section 6 */}
        <div className='bg-[#373737] text-center text-white '>
            <div className='text-4xl font-serif'>Client's Feedback</div>
            <div className='text-[#FEE715] font-extrabold'>_________________________</div>
            <div className='text-center flex justify-center pt-10 -space-x-40'>
                <div className='img  '>
                    <img className='mix-blend-overlay size-40 border-8 border-[#FEE715] rounded-full' src={profile1} alt=''/></div>
                <div className='text pl-24 bg-[#808080] w-3/5 py-9  rounded-full border-[#FEE715] border-8'>
                    <div className='head '> Mr John</div>
                    <div className='detail'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</div>
                    <div className='star flex justify-center text-[#FEE715]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>


                    </div>
                </div>

            </div>
            <div className='text-center flex justify-center pt-10 -space-x-40'>
                
                <div className='text pr-24 bg-[#808080] w-3/5 py-8  rounded-full border-[#FEE715] border-8'>
                    <div className='head '>MR JACK</div>
                    <div className='detail'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</div>
                    <div className='star flex justify-center text-[#FEE715]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>


                    </div>
                </div>
                <div className='img  '>
                    <img className='mix-blend-overlay size-40 border-8 border-[#FEE715] rounded-full' src={profile2} alt=''/></div>

            </div>
            <div className='text-center flex justify-center pt-10 -space-x-40'>
                <div className='img  '>
                    <img className='mix-blend-overlay size-40 border-8 border-[#FEE715] rounded-full' src={profile1} alt=''/></div>
                <div className='text pl-24 bg-[#808080] w-3/5 py-8  rounded-full border-[#FEE715] border-8'>
                    <div className='head '> Mr John</div>
                    <div className='detail'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</div>
                    <div className='star flex justify-center text-[#FEE715]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>


                    </div>
                </div>

            </div>
  {/* section-7  */}
            <div className='text-7xl'>..<span className='text-[#FEE715]'>.</span>...</div>
        </div>
         <div className='bg-[#373737]  text-center'>
         <div className='head -space-y-7'>
                <div className='text-4xl text-white pt-10 font-serif '>Best Blogs</div>
                <div className='text-4xl  text-[#FEE715] ' >________</div>
         </div>
         <div className='imgs pt-20'>
            <div className='grid grid-cols-4'>
                 <div><img src={pic1} alt=''/></div>
                 <div className=' bg-[#808080] px-4 py-7 space-y-5 space-x-5 text-left'>
                    <div className='font-bold pl-6 font-serif '>Gym Equipments </div>
                    <div className='text-white'>Weight loss is really important for our health</div>
                    <div><button className='font-bold py-1 font-serif  rounded-full  px-5 items-center text-center bg-[#FEE715] hover:bg-[#808080] border-black'>Read More</button></div>
                 </div>
                 <div><img src={pic2} alt=''/></div>
                 <div className=' bg-[#808080] px-4 py-7 space-y-5 space-x-5 text-left'>
                    <div className='font-bold pl-6 font-serif'>Yoga </div>
                    <div className='text-white'>Weight loss is really important for our health</div>
                    <div><button className='font-bold py-1 font-serif rounded-full  px-5 items-center text-center bg-[#FEE715] hover:bg-[#808080] border-black'>Read More</button></div>
                 </div>
                 <div className=' bg-[#808080] px-4 py-7 font-serif space-y-5 space-x-5 text-left'>
                    <div className='font-bold pl-6 '>Weight Loss </div>
                    <div className='text-white'>Weight loss is really important for our health</div>
                    <div><button className='font-bold py-1 font-serif rounded-full  px-5 items-center text-center bg-[#FEE715] hover:bg-[#808080] border-black'>Read More</button></div>
                 </div>
                <div><img src={pic3} alt=''/></div>
                <div className=' bg-[#808080] px-4 py-7 space-y-5 space-x-5 text-left font-serif'>
                    <div className='font-bold pl-6 '>Healthy LifeStyle </div>
                    <div className='text-white'>Weight loss is really important for our health</div>
                    <div><button className='font-bold py-1  rounded-full  px-5 items-center font-serif text-center bg-[#FEE715] hover:bg-[#808080] border-black'>Read More</button></div>
                 </div>
                <div><img src={pic4} alt=''/></div>
               

            </div>
         </div>


         </div>
{/* last section */}
         <div className=' bg-[#373737] pt-20'>
            <div className='bg-[#808080]'>
            <div className='bg-[#FEE715] h-1'></div> 

                <div className='flex justify-evenly font-serif'>
                <div className='w-1/5 p-10 space-y-4'>
                    <div><img src={logo } alt=''/></div>
                    <div className='text-white'>Exercise and fit yourself
                      This is Best Store For you
                  </div>
                </div>
                <div className='justify-center flex space-x-14' >
                    <div className=' text-white flex-col w-1/5 p-10 space-y-2 font-serif  '>
                        <h className='font-bold'>INFORMATION</h>
                    <div>Home</div>
                    <div>  About Us</div>
                    <div>  Store</div>
                    </div>
                    <div className='flex text-white flex-col w-1/5 p-10 space-y-2 '>
                        <h className='font-bold font-[Averia Serif Libre]'>INFORMATION</h>
                    <div>Home</div>
                    <div>  About Us</div>
                    <div>  Store</div>
                    </div>
                </div>
                <div  className=' text-white flex-col w-1/5 p-10 space-y-4 font-serif'>
                    <h>NEWSLETTER</h>
                    <div className='font-thin'> Subscribe to our newsletter and amazing new updates</div>
                   <div className='flex -space-x-28'>
                   <input type='text' className='rounded-full py-3 pr-20 pl-3 ' placeholder='Your email address ' />
                    <button className='px-5  bg-[#FEE715] rounded-full m-1 text-black'> Subscribe </button>
                   </div>
                    
                </div>
                </div>
                
            <div className='bg-[#FEE715] h-1 '></div> 
            </div>
            <div className='bg-[#808080] h-10 text-white text-center py-2'>@2023 GymMiniStore</div>
            
         </div>


    </div>
  
)

export default Home
