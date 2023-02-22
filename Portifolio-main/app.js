 const allsections = document.querySelectorAll('.main-content');
 const sections = document.querySelectorAll('.section');
 const sectBtns = document.querySelectorAll('.controlls');
 const sectBtn= document.querySelectorAll('.controll');

sectBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        document.querySelector('.active-btn').classList.remove('active-btn');
        this.classList.add('active-btn');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(btn.dataset.id).classList.add('active');

    })
})

const themeBtn=document.querySelector('.theme-btn');
themeBtn.addEventListener('click',function(){
    let element=document.body;
    element.classList.toggle('light-mode')
})
//     allsections.addEventListener('click',function(e){
// const id=e.target.dataset.id
// if(id){
//     sectBtns.forEach((btn)=>{
//         btn.classList.add('active')
//     })
//     e.target.classList.add('active')

//     //hide other sections
//     sections.forEach((section)=>{
//         section.classList.remove('active');
//     })
//     const element=document.querySelector(id);
//     element.classList.add('active')
// }
    // })