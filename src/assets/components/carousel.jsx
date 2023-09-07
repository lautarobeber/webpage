import { useState, useEffect, useRef } from "react";
import img1 from "../../img/perfume.jpg";
import img2 from "../../img/zapas1.jpg";
import img3 from "../../img/zapas2.jpg";
import img4 from '../../img/window.jpg';
import flechaizq from "../../img/izquierda.svg";
import flechader from "../../img/derecha.svg";
import "../../App.css";

function Carousel() {
    const slide = useRef(null);
    
  
    const next = () =>{
      
      //comprobamos si existen slides
     
  
        //obtenemos el primer slide
          const firstElement = slide.current.children[0]
          //defino el tamaño del slide para moverlo exacto
          const size =slide.current.children[0].offsetWidth;
          //defino la transicion
          slide.current.style.transition = `2000ms ease-out all`
          //muevo el slide
          slide.current.style.transform = `translateX(-${size}px)`
  
          const reset = () => {
  
            //mandar el primer elemento al final
            slide.current.appendChild(firstElement)
            //reiniciar la posicion del slide;
            slide.current.style.transition = `none`;
            //lo movuevo al inicio
            slide.current.style.transform = `translateX(0)`
            
            slide.current.removeEventListener('transitionend', reset);
  
          }
  
          slide.current.addEventListener('transitionend', reset)
      
    }
  
      const back = () =>{
  
        if(slide.current.children.length > 0){
          //obtenemos el ultimo slide
          const lastIndex = slide.current.children.length - 1;
          const lastElement = slide.current.children[lastIndex];
        const size = slide.current.children[0].offsetWidth;
        
        slide.current.insertBefore(lastElement, slide.current.firstChild)
        
        //defino la transicion
        slide.current.style.transition = `none`
        
        //muevo el ultimo slide al principio sin que el usuario lo note
        slide.current.style.transform = `translateX(-${size}px)` 
        
        setTimeout(() => {
          //muevo el slider hacia el principio
          slide.current.style.transition = `2000ms ease-out all`  
          slide.current.style.transform = `translateX(0)`  
        },30)
  
  
        }
        
        }
  //parar/seguir el girar automatico 
        useEffect(()=>{
  
          const interval = setInterval(()=>{
            next();
          },3000)
  
          slide.current.addEventListener('mouseenter', () => {
    
            clearInterval(interval)
          })
  
          
  
           
        },[])
      
    
    
    return (
      <section className="w-full h-full bg-blue-500 h-screen bg-cover bg-center" style={{
        backgroundImage: `url(${img4})`,
      }}>

      <div className=" containter overflow-hidden relative my-auto mx-auto w-96  ">
        <div className="flex flex-nowrap z-10 pt-10 " ref={slide}>
          <div className="min-w-full relative transition-all duration-300 ease-in-out z-9 max-h-300">
            <a href="/products">
              <img
                className="object-cover w-full h-full "
                src={img1}
                alt=""
                ></img>
            </a>
            <div className="">
              <p className=" absolute bottom-0 w-full h-11 pt-2 text-lg text-white font-bold text-center bg-black opacity-30">
                Productos
              </p>
            </div>
          </div>
          <div className="min-w-full relative transition-all duration-300 ease-in-out z-9 max-h-300">
            <a href="/products">
              <img className="object-cover w-full h-full" src={img2} alt=""></img>
            </a>
            <div>
              <p className=" absolute bottom-0 w-full h-11 pt-2 text-lg text-white font-bold text-center bg-black opacity-30">Productos</p>
            </div>
          </div>
          <div className="min-w-full relative transition-all duration-300 ease-in-out z-9 max-h-300">
            <a href="/products">
              <img className="object-cover w-full h-full" src={img3} alt=""></img>
            </a>
            <div>
              <p className=" absolute bottom-0 w-full h-11 pt-2 text-lg text-white font-bold text-center bg-black opacity-30">Productos</p>
            </div>
          </div>
        </div>
        <div className="">
          <button onClick={back} className="absolute h-full top-0 left-0 z-10 hover:text-gray-900">
            <svg
              className="w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              >
              <image className="" href={flechaizq} />
            </svg>
          </button>
          
          <button onClick={next} className="absolute h-full top-0 right-0 z-10 hover:text-gray-900">
            <svg
              className="w-6 text-gray-500 "
              xmlns="http://www.w3.org/2000/svg"
              >
              <image className="" href={flechader} />
            </svg>
          </button>
        </div>
      </div>
              </section>
    );
  }

  export default Carousel