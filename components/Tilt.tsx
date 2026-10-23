"use client";
import {motion,useMotionValue,useReducedMotion,useSpring} from "motion/react";
// Subtle 3D tilt that follows the pointer, like a physical screen.
export default function Tilt({children,className}:{children:React.ReactNode;className?:string}){
 const r=useReducedMotion();const rx=useMotionValue(0),ry=useMotionValue(0);
 const cfg={stiffness:150,damping:18};const srx=useSpring(rx,cfg),sry=useSpring(ry,cfg);
 return <motion.div className={className} style={r?undefined:{rotateX:srx,rotateY:sry,transformPerspective:900}}
  onPointerMove={e=>{if(r||e.pointerType!=="mouse")return;const b=e.currentTarget.getBoundingClientRect();
   ry.set(((e.clientX-b.left)/b.width-.5)*7);rx.set(-((e.clientY-b.top)/b.height-.5)*7)}}
  onPointerLeave={()=>{rx.set(0);ry.set(0)}}>{children}</motion.div>}
