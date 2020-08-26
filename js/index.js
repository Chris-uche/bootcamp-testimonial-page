const btn = document.querySelector('.slider-icons')
let num = 0


const testimonial = [{
    main: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    authorname: `Tanya Sinclair`,
    designation: `UX Engineer`,
    image: `./images/image-tanya.jpg`
},
{
    main: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    authorname: `John Tarkpor`,
    designation: `Junior Front-end Developer`,
    image: `./images/image-john.jpg`
}]

const pageChanger=(num)=>{

    document.querySelector('.content-section p:first-of-type').innerHTML=testimonial[num].main;
    document.querySelector('.author-name').innerHTML=testimonial[num].authorname;
    document.querySelector('.author-role').innerHTML=testimonial[num].designation;
    document.querySelector('.attestant-image img').setAttribute('src', testimonial[num].image)
}

btn.addEventListener('click', ()=>{
    if(num == 0){
        pageChanger(1);
        num = 1;
    }
    else{
        pageChanger(0)
        num = 0;
    }
})
