gsap.to(".box",{
    x:600,
    y:600,
    duration:2,
    delay:2,
    backgroundColor:"red",
    rotate:20,
    repeat:-1,
    yoyo:true
})
gsap.from(".box1",{
    x:800,
    duration:2,
    delay:2,
    repeat:-1,
    yoyo:true
})
gsap.to(".box2",{
    x:800,
    duration:2,
    delay:2,
    repeat:-1,
    yoyo:true
})
let tl=gsap.timeline()
tl.to(".box3",{
    x:800,
    duration:1
})
tl.to(".box4",{
    x:800,
    duration:1
})

let tl1=gsap.timeline()
tl1.from("nav ul li",{
    y:-100,
    duration:1,
    stagger:-1,
    repeat:-1
})

gsap.from(".boxx",{
    x:800,
    duration:1,
    scrollTrigger:{
        trigger:".boxx",
        scroller:"body",
        scrub:1
    }
})
gsap.from(".boxy",{
    x:800,
    duration:1,
    scrollTrigger:{
        trigger:".boxy",
        scroller:"body",
        scrub:1,
        markers:true,
        start:"0% 50%",
        end:"50% 30%"
    }
})
gsap.from(".boxz",{
    x:800,
    duration:1,
    scrollTrigger:{
        trigger:".boxz",
        scroller:"body",
        scrub:1
    }
})