import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver != undefined
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        //console.log(element.current);
        //Con el InsertectionObserver sabemos si esta en el viewport
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(element.current);
      });
    },
    [element]
  );

  return [show, element];
}
