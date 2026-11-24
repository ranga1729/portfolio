'use client'

import { motion, Variants } from "motion/react"
import DecryptedText from "./animated-texts/DecryptedText"

interface Props {
  subtitle?: string,
  title: string
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SectionHeader(props: Props) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-3">
      {props.subtitle ? 
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {props.subtitle}
      </p> : null }

      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        <DecryptedText
          text={props.title}
          animateOn="inViewHover"
          effect="scramble"
          sequential
          revealDirection="start"
          speed={50}
          maxIterations={8}
          scrambleColor="#888888"
          className="text-foreground"
          encryptedClassName="text-muted-foreground"
        />
      </h2>
    </motion.div>
  )
}