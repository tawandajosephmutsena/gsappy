'use client'
import { useEffect, useRef, useState } from "react";


const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const stickyHeader = (): void => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  useEffect(() => {
    const setHeaderHeight = headerRef.current?.offsetHeight;

    if (setHeaderHeight) {
      const headerElements = document.querySelectorAll<HTMLDivElement>('.tp-header-height');
      headerElements.forEach(element => {
        console.log('setHeaderHeight', setHeaderHeight,element);
        element.style.height = `${setHeaderHeight}px`;
      });
    }
  }, []);

  function headerFullWidth () {
    const menuElements = document.querySelectorAll(".tp-menu-fullwidth");
    menuElements.forEach((element: Element) => {
      const previousDiv = element.parentElement?.parentElement;
      if (previousDiv) {
        previousDiv.classList.add("has-homemenu");
      }
    });
  };

  const adjustMenuBackground = () => {
    const headerArea = document.querySelector('.tp-header-3-area');
    if (headerArea) {
      const menuBox = document.querySelector('.tp-header-3-menu-box') as HTMLElement;
      if (menuBox) {
        const menuBg = document.querySelector('.menu-bg') as HTMLElement;
        if (menuBg) {
          menuBg.style.width = `${menuBox.offsetWidth + 46}px`;
          menuBg.style.height = `${menuBox.offsetHeight}px`;
          menuBg.style.left = `${menuBox.offsetLeft}px`;
        }
      }
    }
  };
  


  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
    headerRef,
    headerFullWidth,
    adjustMenuBackground,
  };
};

export default useSticky;
