import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, VFC } from 'react';

const gradientStartX = 50;
const gradientStartY = 129;
const gradientWidth = 130;
const gradientHeight = 326.23;

export const Logo: VFC<{ animated?: boolean }> = ({ animated = false }) => {
  const controls = useAnimation();
  const isRunningRef = useRef<boolean>(false);

  useEffect(() => {
    if (!animated) {
      isRunningRef.current = false;
      return;
    }

    if (isRunningRef.current) {
      return;
    }

    const anim = async () => {
      isRunningRef.current = true;
      while (isRunningRef.current) {
        await controls.start('flash');
        await controls.start('initial', { duration: 0 });
      }
      isRunningRef.current = false;
      controls.stop();
    };

    anim();
  }, [animated, controls]);

  return (
    <svg
      style={{ height: '100%', width: '100%' }}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M339.111 129H377.038C379.906 129 382.231 131.325 382.231 134.193C382.231 134.195 382.231 134.198 382.231 134.2C382.231 137.066 379.906 139.393 377.038 139.393C370.402 139.393 358.638 139.393 349.131 139.393C340.096 139.393 331.883 144.643 328.094 152.847C300.677 212.195 191.893 447.661 191.893 447.661C189.781 452.232 184.665 455.231 178.978 455.231C178.976 455.231 178.976 455.231 178.974 455.231C173.287 455.231 168.171 452.232 166.057 447.661C166.057 447.661 48.8686 193.999 27.0994 146.877C24.992 142.314 20.4229 139.393 15.3966 139.393C12.0069 139.393 8.18286 139.393 5.19314 139.393C3.81714 139.393 2.496 138.845 1.52229 137.871C0.548571 136.897 0 135.576 0 134.2C0 134.198 0 134.195 0 134.193C0 131.325 2.32686 129 5.19314 129C25.3851 129 98.5349 129 118.725 129C121.593 129 123.918 131.325 123.918 134.193C123.918 134.195 123.918 134.198 123.918 134.2C123.918 135.576 123.371 136.897 122.398 137.871C121.424 138.845 120.103 139.393 118.725 139.393C115.847 139.393 112.176 139.393 108.782 139.393C106.647 139.393 104.661 140.481 103.511 142.278C102.361 144.074 102.206 146.335 103.102 148.271C122.208 189.629 201.545 361.359 201.545 361.359C202.475 363.373 204.729 364.694 207.234 364.694C209.742 364.694 211.993 363.373 212.926 361.359C212.926 361.359 289.685 195.208 310.382 150.408C311.493 148.006 311.301 145.201 309.874 142.973C308.448 140.742 305.984 139.393 303.337 139.393C290.994 139.393 272.453 139.393 263.506 139.393C260.638 139.393 258.313 137.066 258.313 134.2C258.313 134.198 258.313 134.195 258.313 134.193C258.313 131.325 260.638 129 263.506 129H339.111Z"
        fill="url(#logoGradient)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M468.342 129H506.269C509.137 129 511.462 131.325 511.462 134.193C511.462 134.195 511.462 134.198 511.462 134.2C511.462 137.066 509.137 139.393 506.269 139.393C499.633 139.393 487.869 139.393 478.36 139.393C469.327 139.393 461.114 144.643 457.325 152.847C429.907 212.195 321.123 447.661 321.123 447.661C319.011 452.232 313.896 455.231 308.207 455.231C308.207 455.231 308.207 455.231 308.205 455.231C302.515 455.231 297.402 452.232 295.288 447.661C295.288 447.661 178.099 193.999 156.33 146.877C154.221 142.314 149.654 139.393 144.627 139.393C141.235 139.393 137.414 139.393 134.424 139.393C133.048 139.393 131.727 138.845 130.753 137.871C129.779 136.897 129.231 135.576 129.231 134.2C129.231 134.198 129.231 134.195 129.231 134.193C129.231 131.325 131.555 129 134.424 129C154.614 129 227.766 129 247.955 129C250.824 129 253.149 131.325 253.149 134.193C253.149 134.195 253.149 134.198 253.149 134.2C253.149 135.576 252.602 136.897 251.629 137.871C250.655 138.845 249.334 139.393 247.955 139.393C245.078 139.393 241.405 139.393 238.01 139.393C235.878 139.393 233.891 140.481 232.742 142.278C231.592 144.074 231.437 146.335 232.333 148.271C251.439 189.629 330.776 361.359 330.776 361.359C331.706 363.373 333.96 364.694 336.465 364.694C338.97 364.694 341.224 363.373 342.154 361.359C342.154 361.359 418.915 195.208 439.613 150.408C440.723 148.006 440.531 145.201 439.105 142.973C437.679 140.742 435.215 139.393 432.566 139.393C420.225 139.393 401.683 139.393 392.737 139.393C389.869 139.393 387.544 137.066 387.544 134.2C387.544 134.198 387.544 134.195 387.544 134.193C387.544 131.325 389.869 129 392.737 129H468.342Z"
        fill="currentcolor"
      />
      <defs>
        <motion.linearGradient
          id="logoGradient"
          initial={{
            x1: gradientStartX,
            y1: gradientStartY,
            x2: gradientStartX + gradientWidth * 6,
            y2: gradientStartY + gradientHeight * 6,
          }}
          variants={{
            flash: {
              x1: gradientStartX - gradientWidth * 5,
              y1: gradientStartY - gradientHeight * 5,
              x2: gradientStartX + gradientWidth,
              y2: gradientStartY + gradientHeight,
            },
            initial: {
              x1: gradientStartX,
              y1: gradientStartY,
              x2: gradientStartX + gradientWidth * 6,
              y2: gradientStartY + gradientHeight * 6,
            },
          }}
          transition={{ ease: 'linear', duration: 2 }}
          animate={controls}
          gradientUnits="userSpaceOnUse"
        >
          {[0.08, 0.28, 0.58, 0.28, 0.08, 0.28].map((value, index, self) => (
            <stop
              key={index}
              offset={index / (self.length - 1)}
              stopColor="currentcolor"
              stopOpacity={value}
            />
          ))}
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
