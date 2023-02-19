import ImageData from './ImageData'
import {AiOutlineSwapLeft} from 'react-icons/ai'
import {AiOutlineSwapRight} from 'react-icons/ai'
import { useState } from 'react'
const ImageSlider = () => {
    // console.log(ImageData);
    const [current,setCurrent] = useState(0)
    const length = ImageData.length
    console.log(length);
    const prevSlide =() =>{
        current === 0 ? setCurrent(length-1) : setCurrent(current-1)
    }
    const nextSlide = () => {
        current === (length -1) ? setCurrent(0) : setCurrent(current+1) 
    }
  return (
    <section className='slider'>
    <AiOutlineSwapLeft className='leftArrow' onClick={prevSlide}/>
    <AiOutlineSwapRight className='rightArrow' onClick={nextSlide}/>
        {ImageData.map((data,index)=>{
            return (
                <div className={index === current ? "slide active": "slide"} key={index}>
                    {index === current && 
                    (
                    <div>
                        <img src={data.image} alt={data.title} className="image" />
                        <p>{data.title}</p>
                    </div>
                    )}
                </div>
            )
        })}
    </section>
  )
}

export default ImageSlider
