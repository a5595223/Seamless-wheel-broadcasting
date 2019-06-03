$('.images > img:nth-Child(1)').addClass('current')
$('.images > img:nth-Child(2)').addClass('enter')
$('.images > img:nth-Child(3)').addClass('enter')
let n = 1


setInterval(function(){
  $(`.images > img:nth-Child(${x(n)})`).removeClass('current').addClass('leave')
  .one('transitionend',(e)=>{
  $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $(`.images > img:nth-Child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},2000)

function x(n){
  if(n > 3){
    n = n%3
    if(n === 0){
      n =3
    }
  }
  return n
}