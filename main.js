function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/riA8iOLGD/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}


function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);
      random_number_r=Math.floor(Math.random()*255)+1;
      random_number_g=Math.floor(Math.random()*255)+1;
      random_number_b=Math.floor(Math.random()*255)+1;

      document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;
      document.getElementById("result_confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+"%";

      document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

      img1=document.getElementById('cat1');
      img2=document.getElementById('dog2');
      img2=document.getElementById('lion3');
      img2=document.getElementById('cow4');
      

      if (results[0].label=="Meowing"){
        img1.src='cat1.gif';
        img2.src='dog2.png';
        img3.src='lion3.png';
        img4.src='cow4.png';

    }
    else if(results[0].label=="Barking"){
        img1.src='cat1.png';
        img2.src='dog2.gif';
        img3.src='lion3.png';
        img4.src='cow4.png';
    }

    else if(results[0].label=="Roar"){
        img1.src='cat1.png';
        img2.src='dog2.png';
        img3.src='lion3.gif';
        img4.src='cow4.png';
    }

    else{
        img1.src='cat1.png';
        img2.src='dog2.png';
        img3.src='lion3.png';
        img4.src='cow4.gif';
    }



}

}