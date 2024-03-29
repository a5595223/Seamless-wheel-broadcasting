let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let current = 0
let $images = $('.images').children()

makeFakeSlides($images)
$slides.css({transform:'translateX(-400px)'})
bindEvents()
$('#next').on('click',function(){
  goToSlide(current + 1)
})
$('#previous').on('click',function(){
  goToSlide(current - 1)
})

let timer = setInterval(function(){
  bindEvents(current + 1)
  
  
},2000)

$('#container').on('mouseenter',function(){
  window.clearInterval(timer)
}).on('mouseleave',function(){
  timer =setInterval(function(){
    goToSlide(current + 1)
    
  },2000)
})


function makeFakeSlides(){
  let $firstimage = $images.eq(0).clone(true)
  let $lastimage = $images.eq($images.length-1).clone(true)

  $slides.append($firstimage)
  $slides.prepend($lastimage)
}



function bindEvents(){

   $('#buttonWrapper').on('click','button',function(e){
    let $button = $(e.currentTarget) 
    let index = $button.index()
    $button.addClass('special').siblings().removeClass('special')
    
    goToSlide(index)
  })
  
  

// $buttons.eq(0).on('click',function(){
//   if(current == 2){
    
//     $slides.css({
//       transform:'translateX(-1600px)'})
//       .one('transitionend',function(){
//       $slides.hide()
//       .offset()
//       $slides.css({transform:'translateX(-400px)'})
//       .show()
//       })
//   }else{
    
//     $slides.css({
//      transform:'translateX(-400px)'
//     })
//   }
  
//   current = 0
// })
// $buttons.eq(1).on('click',function(){
  
//   $slides.css({
//    transform:'translateX(-800px)'
//   })
//   current = 1
// })
// $buttons.eq(2).on('click',function(){
//   if(current == 0){
//     $slides.css({
//       transform:'translateX(0px)'})
//       .one('transitionend',function(){
//       $slides.hide()
//       .offset()
//       $slides.css({transform:'translateX(-1200px)'})
//       .show()
//       })
//   }else{
//     $slides.css({
//       transform:'translateX(-1200px)'
//      })
//   }
  
//   current = 2
// })
}

function goToSlide (index){
  if(index > $buttons.length - 1){
    index = 0
    
  }else if(index < 0){
    index = $buttons.length - 1
    
  }

  if(current === $buttons.length - 1 && index === 0){
    $slides.css({
      transform:`translateX(${-($buttons.length + 1) * 400}px)`})
      .one('transitionend',function(){
      $slides.hide()
      .offset()
      $slides.css({transform:`translateX(${-(index + 1) * 400}px)`})
      .show()
      })
      

  }else if(current === 0 && index === $buttons.length - 1){
    $slides.css({
      transform:'translateX(0px)'})
      .one('transitionend',function(){
      $slides.hide()
      .offset()
      $slides.css({transform:`translateX(${-(index + 1) * 400}px)`})
      .show()
      })
      
      
  }else{
    $slides.css({transform:`translateX(${-(index + 1) * 400}px)`})
    
  }
  current = index
}