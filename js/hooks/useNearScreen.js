import { useEffect, useState, useRef } from "react";
export function useNearScreen() {
    var element = useRef(null);
    var _a = useState(false), show = _a[0], setShow = _a[1];
    useEffect(function () {
        Promise.resolve(typeof window.IntersectionObserver != undefined
            ? window.IntersectionObserver
            : import("intersection-observer")).then(function () {
            //console.log(element.current);
            //Con el InsertectionObserver sabemos si esta en el viewport
            var observer = new window.IntersectionObserver(function (entries) {
                var isIntersecting = entries[0].isIntersecting;
                if (isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            });
            observer.observe(element.current);
        });
    }, [element]);
    return [show, element];
}
