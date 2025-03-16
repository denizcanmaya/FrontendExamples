const testimonial = [
    {
        name: "Cherise G.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores sunt esse alias cumque repudiandae ullam ad nisi est molestias?"
        
    },

    {
        name: "Carl P.",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores sunt esse alias cumque repudiandae ullam ad nisi est molestias?"
        
    },

    {
        name: "Luna T.",
        photoUrl: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores sunt esse alias cumque repudiandae ullam ad nisi est molestias?"
        
    },
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".user-name");

let index = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl,text} = testimonial[index];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    nameEl.innerText = name;
    index++
    if (index === testimonial.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 6000);
}
