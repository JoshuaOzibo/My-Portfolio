import React, { useContext } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";
import { LiaGithub } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { AppContext } from "../context/ContextContainer";

const Navbar = () => {
  const { darkMood, handleDarkmoodButton } = useContext(AppContext);

  return (
    <div className=" w-full z-20 fixed flex border-b-[0.1px] border-gray-200 h-16 justify-center items-center ">
      <div className="w-[85%] h-full items-center flex justify-between">
        {/* Header */}
        <h1 className="text-2xl font-bold uppercase">Portfolio</h1>

        {/* Logos and Menu */}
        <div className=" flex justify-between w-[40%] rounded-full px-16 py-2 border border-black">
          <h1 className="">Home</h1>
          <h1>Skill</h1>
          <h1>Project</h1>
        </div>

        <div className="flex items-center space-x-5">
          {/* light mood Icon */}
          {!darkMood && (
            <MdOutlineLightMode
              onClick={handleDarkmoodButton}
              className="cursor-pointer"
              size={22}
            />
          )}
          {darkMood && (
            <MdOutlineNightlightRound
              onClick={handleDarkmoodButton}
              className="cursor-pointer"
              size={22}
              color="#fff"
            />
          )}
          {
            <LiaGithub
              className="cursor-pointer"
              color={!darkMood ? "" : "#fff"}
              size={25}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;









/**
 * const animateNavbar = () => {
		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		tl.fromTo(logoRef.current, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
			.fromTo(titleRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.3")
			.fromTo(navItemsRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
			.fromTo(loginButtonRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.3")
			.fromTo(signUpButtonRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.3")
			.fromTo(harmburgerRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 }, "-=1.2");
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 200;

			if (isVisible && !visible) {
				setVisible(true);
				// Delay the animation slightly to allow the navbar to become visible
				setTimeout(animateNavbar, 50);
			} else if (!isVisible && visible) {
				setVisible(false);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible]);

	// Initial animation
	useGSAP(() => {
		animateNavbar();
	}, []);
 */
