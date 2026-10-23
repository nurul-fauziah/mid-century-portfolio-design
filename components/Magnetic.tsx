"use client";
import {motion,useMotionValue,useReducedMotion,useSpring} from "motion/react";
// Pulls its child slightly toward the mouse, then springs back. Mouse only; off for reduced motion.
export default function Magnetic({children,className="inline-block",strength=.3}:{children:React.ReactNode;className?:string;strength?:number}){
 const r=useReducedMotion();const x=useMotionValue(0),y=useMotionValue(0);
 const cfg={stiffness:220,damping:14,mass:.4};const sx=useSpring(x,cfg),sy=useSpring(y,cfg);
 if(r)return <div className={className}>{children}</div>;
 return <motion.div className={className} style={{x:sx,y:sy}}
  onPointerMove={e=>{if(e.pointerType!=="mouse")return;const b=e.currentTarget.getBoundingClientRect();x.set((e.clientX-b.left-b.width/2)*strength);y.set((e.clientY-b.top-b.height/2)*strength)}}
  onPointerLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
