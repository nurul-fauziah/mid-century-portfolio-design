"use client";
import {motion} from "motion/react";
import {ease} from "@/lib/motion";
const vp={once:true,margin:"-80px"};
export default function Reveal({children,className,delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={vp} transition={{duration:1.1,ease,delay}}>{children}</motion.div>}
// Headline rises out of a mask instead of fading in.
export function Mask({children,className}:{children:React.ReactNode;className?:string}){
 return <div className={`overflow-hidden ${className??""}`}><motion.div initial={{y:"110%"}} whileInView={{y:0}} viewport={vp} transition={{duration:1.1,ease}}>{children}</motion.div></div>}
export function Stagger({children,className,gap=.1}:{children:React.ReactNode;className?:string;gap?:number}){
 return <motion.div className={className} initial="h" whileInView="v" viewport={vp} transition={{staggerChildren:gap}}>{children}</motion.div>}
export function Item({children,className,as="div"}:{children?:React.ReactNode;className?:string;as?:"div"|"li"|"p"}){
 const M=motion[as];return <M className={className} variants={{h:{opacity:0,y:18},v:{opacity:1,y:0,transition:{duration:.9,ease}}}}>{children}</M>}
