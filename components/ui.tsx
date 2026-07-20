"use client";
import {motion} from "motion/react";
import {ReactNode} from "react";
export function Reveal({children,className=""}:{children:ReactNode,className?:string}){return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.65,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>}
export function SectionTitle({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}){return <div className="mb-12 max-w-3xl"><p className="eyebrow mb-3">{eyebrow}</p><h2 className="text-3xl md:text-5xl font-semibold tracking-[-.04em]">{title}</h2>{copy&&<p className="mt-5 text-[var(--muted)] text-lg leading-8">{copy}</p>}</div>}
export function Pill({children}:{children:ReactNode}){return <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{children}</span>}
