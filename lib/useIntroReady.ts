"use client";
import {useEffect,useState} from "react";
// True once the intro starts lifting (or was skipped). Falls back after 4.5s (longer than the intro) so content never stays hidden.
export function useIntroReady(){
 const [r,setR]=useState(false);
 useEffect(()=>{
  if(document.documentElement.dataset.intro==="done"){setR(true);return}
  const f=()=>setR(true);window.addEventListener("intro-done",f);const t=setTimeout(f,4500);
  return()=>{window.removeEventListener("intro-done",f);clearTimeout(t)}},[]);
 return r}
