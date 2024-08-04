let score =JSON.parse(localStorage.getItem('score'));

if(score===null){
 score = {
  wins: 0,
  loses: 0,
  ties: 0
 };
}

update();

  function playgame(playermove) {
    const computermove= pcomputermove();
    let result='';
    if(playermove==='rock'){
  if(computermove==='rock'){
    result='TEI';
  }else if(computermove==='paper'){
    result='YOU LOSE';
  }else if(computermove==='Scissors'){
    result='YOU WIN';
  }
}else if(playermove==='paper'){
  if(computermove==='rock'){
    result='YOU WIN';
  }else if(computermove==='paper'){
    result='TEI';
  }else if(computermove==='Scissors'){
    result='YOU LOSE';
  }

}else if(playermove==='Scissors'){
  if(computermove==='rock'){
    result='YOU WIN';
  }else if(computermove==='paper'){
    result='YOU LOSE';
  }else if(computermove==='Scissors'){
    result='TEI';
  }
}
  if(result==='YOU WIN'){
    score.wins+=1;

  }else if(result==='YOU LOSE'){
    score.loses+=1;
  }else if(result==='TEI'){
    score.ties+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  
  update();

  document.querySelector('.js-result').innerHTML= result;

  document.querySelector('.js-moves').innerHTML=
  `YOU <img src="images/${playermove}-emoji.png" class="move-icon">
    <img src="images/${computermove}-emoji.png" class="move-icon">
    computer`
  
  
  
  }
  function update(){
    document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins},losses: ${score.loses},ties: ${score.ties}`;
  }
 



    let computermove='';
function pcomputermove(){
  const random=Math.random();

  if(random>=0 && random<1/3){
    computermove='rock';
  }else if (random>=1/3 && random<2/3) {
    computermove='paper';
  }else{
  computermove='Scissors';
  }
  return computermove;
}