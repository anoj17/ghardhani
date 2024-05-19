import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

// Define the addVariablesForColors function
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// Define the plugin function
function plugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-dot-thick": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}

const FlipWords = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const startAnimation = () => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i === words.length) {
          i = 0;
        }
        const word = words[i];
        setCurrentWord(word);
      }, duration);
      
      return () => {
        clearInterval(interval);
      };
    };

    startAnimation();
  }, [words, duration]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export { FlipWords, addVariablesForColors, plugin };
