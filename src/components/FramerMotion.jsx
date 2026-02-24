import { motion } from "framer-motion";

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

/**
 * Fade in from bottom animation - for section-level elements
 */
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth feel
    }
  }
};

/**
 * Staggered children animation - for lists/cards
 * Use with containerVariants on parent and childVariants on children
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
      delayChildren: 0.1    // Initial delay before first child
    }
  }
};

/**
 * Individual item variant for staggered animations
 */
export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// =============================================================================
// REUSABLE MOTION COMPONENTS
// =============================================================================

/**
 * MotionDiv - Wrapper for scroll-triggered animations
 * @param {boolean} once - Whether animation should only trigger once (default: true)
 * @param {number} delay - Delay in seconds before animation starts
 * @param {string} className - Additional CSS classes
 */
export const MotionDiv = ({ 
  children, 
  className = "", 
  once = true, 
  delay = 0,
  variants = fadeInUp 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once, 
        margin: "0px 0px -50px 0px" // Trigger when element is 50px from bottom
      }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * MotionSection - Section container with scroll animations
 * Use for section headers and main content wrappers
 */
export const MotionSection = ({ 
  children, 
  className = "", 
  once = true 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

/**
 * MotionCard - Card component with hover and scroll animations
 */
export const MotionCard = ({ 
  children, 
  className = "", 
  delay = 0,
  hoverScale = true 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={staggerItem}
      whileHover={hoverScale ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggeredGrid - Grid container for animated card lists
 * @param {React.ReactNode} children - Grid items
 * @param {string} className - Grid classes
 * @param {number} delay - Base delay multiplier
 */
export const StaggeredGrid = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggeredItem - Individual item in a staggered grid
 */
export const StaggeredItem = ({ 
  children, 
  className = "",
  hoverEffect = false
}) => {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
};
