 $("div.story1").click(function(){
   $("id#stori1body").fadeIn();
    var stori1body = document.createElement("div");
    stori1body.style.width = "100%";
    stori1body.style.height = "720px";
    stori1body.style.backgroundColor = "rgba(0,0,0,0.3)";
    stori1body.style.display = "flex";
    stori1body.style.justifyContent = "center";
    stori1body.style.alignItems = "center";
    stori1body.style.position = "absolute";
    stori1body.style.top = "0%";
    stori1body.style.opacity = "1";
    stori1body.setAttribute("id","stori1body");
    document.body.appendChild(stori1body);

    var storybox1 = document.createElement("div");
    storybox1.style.width = "400px";
    storybox1.style.height = "700px";
    storybox1.style.position = "relative";
    stori1body.appendChild(storybox1);   

    var x = document.createElement("div");
    x.style.width = "22px";
    x.style.height = "22px";
    x.style.backgroundImage = "url('images/x.png')";
    x.style.backgroundRepeat = "no-repeat";
    x.style.backgroundSize = "100% 100%";
    x.style.position = "absolute";
    x.style.left = "98%";
    x.style.top = "1%";
    x.setAttribute("id","x");
    stori1body.appendChild(x);


  
    var story1 = document.createElement("video");
    story1.style.width = "400px";
    story1.style.height = "700px";
    story1.setAttribute("id","st1");
    storybox1.appendChild(story1);  

     times = setTimeout(mytimes1,15000);

    function mytimes1(){
      var out = document.getElementById("st1");
      var xout = document.getElementById("x");
      var heartout = document.getElementById("heart1");
      var playout = document.getElementById("play1");
      var storiout = document.getElementById("stori1body");
      storiout.remove();
      playout.remove();
      heartout.remove();
      xout.remove();
      out.remove();
    }

   var play = document.createElement("div");
    play.style.width = "20px";
    play.style.height = "20px";
    play.style.backgroundImage = "url('images/play.png')";
    play.style.backgroundRepeat = "no-repeat";
    play.style.backgroundSize = "100% 100%";
    play.style.position = "absolute";
    play.style.left = "93%";
    play.style.top = "2%";
    play.setAttribute("id","play1");
    storybox1.appendChild(play);


    var source1 = document.createElement("source");
    source1.setAttribute("src","video/story1.mp4");
    source1.setAttribute("id","so1");
    story1.appendChild(source1);

 var st1 = document.getElementById("st1");
        st1.play();
        play.remove();
        var pause = document.createElement("div");
        pause.style.width = "20px";
        pause.style.height = "20px";
        pause.style.backgroundImage = "url('images/pause.png')";
        pause.style.backgroundRepeat = "no-repeat";
        pause.style.backgroundSize = "100% 100%";
        pause.style.position = "absolute";
        pause.style.left = "93%";
        pause.style.top = "2%";
        pause.setAttribute("id","pouse1");
        storybox1.appendChild(pause);   

        var hr1 = setTimeout(myhr1,2000);

        function myhr1() {
       var heart1 = document.createElement("div");
        heart1.style.width = "30px";
        heart1.style.height = "30px";
        heart1.style.backgroundImage = "url('images/heart.png')";
        heart1.style.backgroundRepeat = "no-repeat";
        heart1.style.backgroundSize = "100% 100%";
        heart1.style.position = "absolute";
        heart1.setAttribute("id","s1");
        storybox1.appendChild(heart1);
        }

       var hr2 = setTimeout(myhr2,4000);

       function myhr2() {
       var heart1 = document.createElement("div");
        heart1.style.width = "30px";
        heart1.style.height = "30px";
        heart1.style.backgroundImage = "url('images/heart.png')";
        heart1.style.backgroundRepeat = "no-repeat";
        heart1.style.backgroundSize = "100% 100%";
        heart1.style.position = "absolute";
        heart1.setAttribute("id","s2");
        storybox1.appendChild(heart1);
       }

       

        var tm1 = setTimeout(tm11,1000);

        function tm11() {
           var tm1 = document.createElement("div");
           tm1.style.width = "1%";
           tm1.style.height = "1px";
           tm1.style.backgroundColor = "white";
           tm1.style.position = "absolute";
           tm1.style.top = "1%";
           tm1.style.left = "1%";
           tm1.setAttribute("id","tm1");
           storybox1.appendChild(tm1);
        }
        $("div#x").click(function(){
         $("div#stori1body").fadeOut(1000);
         $("div#tm1").fadeOut();
         $("video#st1").remove();
      })
})



$("div.story2").click(function(){
    var stori2body = document.createElement("div");
    stori2body.style.width = "100%";
    stori2body.style.height = "720px";
    stori2body.style.backgroundColor = "rgba(0,0,0,0.3)";
    stori2body.style.display = "flex";
    stori2body.style.justifyContent = "center";
    stori2body.style.alignItems = "center";
    stori2body.style.position = "absolute";
    stori2body.style.top = "0%";
    stori2body.style.opacity = "1";
    stori2body.setAttribute("id","stori2body");
    document.body.appendChild(stori2body);   
    


    var storybox1 = document.createElement("div");
    storybox1.style.width = "400px";
    storybox1.style.height = "700px";
    storybox1.style.position = "relative";
    stori2body.appendChild(storybox1);   
  
    times = setTimeout(mytimes,16000);

    function mytimes(){
      var out = document.getElementById("st2");
      var xout = document.getElementById("x");
      var heartout = document.getElementById("heart2");
      var playout = document.getElementById("play1");
      var storiout = document.getElementById("stori2body");
      storiout.remove();
      playout.remove();
      heartout.remove();
      xout.remove();
      out.remove();
    }
    var story1 = document.createElement("video");
    story1.style.width = "400px";
    story1.style.height = "700px";
    story1.setAttribute("id","st2");
    storybox1.appendChild(story1);

    var x = document.createElement("div");
    x.style.width = "22px";
    x.style.height = "22px";
    x.style.backgroundImage = "url('images/x.png')";
    x.style.backgroundRepeat = "no-repeat";
    x.style.backgroundSize = "100% 100%";
    x.style.position = "absolute";
    x.style.left = "98%";
    x.style.top = "1%";
    x.setAttribute("id","x");
    stori2body.appendChild(x);



   var play = document.createElement("div");
    play.style.width = "20px";
    play.style.height = "20px";
    play.style.backgroundImage = "url('images/play.png')";
    play.style.backgroundRepeat = "no-repeat";
    play.style.backgroundSize = "100% 100%";
    play.style.position = "absolute";
    play.style.left = "93%";
    play.style.top = "2%";
    play.setAttribute("id","play1");
    storybox1.appendChild(play); 
    
    var heart = document.createElement("i");
        heart.style.position = "absolute";
        heart.style.left = "90%";
        heart.style.top = "95%";
        heart.style.color = "white";
        heart.style.fontSize = "20px";
        heart.setAttribute("id","heart1");
        heart.setAttribute("class","fa-regular fa-heart");
        storybox1.appendChild(heart);

        $("#heart1").click(function(){
            $("#heart1").css("display", "none")
            var heart = document.createElement("i");
            heart.style.position = "absolute";
            heart.style.left = "90%";
            heart.style.top = "95%";
            heart.style.color = "red";
            heart.style.fontSize = "20px";
            heart.setAttribute("id","heartRed");
            heart.setAttribute("class","fa-solid fa-heart");
            storybox1.appendChild(heart);

        })
        
    var source1 = document.createElement("source");
    source1.setAttribute("src","video/story2.mp4");
    story1.appendChild(source1);

     var st2 = document.getElementById("st2");
        st2.play();
        play.remove();
        var pause = document.createElement("div");
        pause.style.width = "20px";
        pause.style.height = "20px";
        pause.style.backgroundImage = "url('images/pause.png')";
        pause.style.backgroundRepeat = "no-repeat";
        pause.style.backgroundSize = "100% 100%";
        pause.style.position = "absolute";
        pause.style.left = "93%";
        pause.style.top = "2%";
        pause.setAttribute("id","pouse1");
        storybox1.appendChild(pause);  

        var tm2 = setTimeout(tm22,1000);

        function tm22() {
           var tm2 = document.createElement("div");
           tm2.style.width = "1%";
           tm2.style.height = "1px";
           tm2.style.backgroundColor = "white";
           tm2.style.position = "absolute";
           tm2.style.top = "1%";
           tm2.style.left = "1%";
           tm2.setAttribute("id","tm2");
           storybox1.appendChild(tm2);
        }

        $("div#x").click(function(){
         $("div#stori2body").fadeOut(1000);
         $("div#tm2").fadeOut();
         $("video#st2").remove();
      })
})



$("div.story3").click(function(){
    var stori3body = document.createElement("div");
    stori3body.style.width = "100%";
    stori3body.style.height = "720px";
    stori3body.style.backgroundColor = "rgba(0,0,0,0.3)";
    stori3body.style.display = "flex";
    stori3body.style.justifyContent = "center";
    stori3body.style.alignItems = "center";
    stori3body.style.position = "absolute";
    stori3body.style.top = "0%";
    stori3body.style.opacity = "1";
    stori3body.setAttribute("id","stori3body");
    document.body.appendChild(stori3body);

    var storybox1 = document.createElement("div");
    storybox1.style.width = "400px";
    storybox1.style.height = "700px";
    storybox1.style.position = "relative";
    stori3body.appendChild(storybox1);   

     times = setTimeout(mytimes3,10000);

    function mytimes3(){
      var out = document.getElementById("st3");
      var xout = document.getElementById("x");
      var heartout = document.getElementById("heart3");
      var playout = document.getElementById("play1");
      var storiout = document.getElementById("stori3body");
      storiout.remove();
      playout.remove();
      heartout.remove();
      xout.remove();
      out.remove();
    }

    var x = document.createElement("div");
    x.style.width = "22px";
    x.style.height = "22px";
    x.style.backgroundImage = "url('images/x.png')";
    x.style.backgroundRepeat = "no-repeat";
    x.style.backgroundSize = "100% 100%";
    x.style.position = "absolute";
    x.style.left = "98%";
    x.style.top = "1%";
    x.setAttribute("id","x");
    stori3body.appendChild(x);
  
    var story1 = document.createElement("video");
    story1.style.width = "400px";
    story1.style.height = "700px";
    story1.setAttribute("id","st3");
    storybox1.appendChild(story1);

   
      
   var play = document.createElement("div");
    play.style.width = "20px";
    play.style.height = "20px";
    play.style.backgroundImage = "url('images/play.png')";
    play.style.backgroundRepeat = "no-repeat";
    play.style.backgroundSize = "100% 100%";
    play.style.position = "absolute";
    play.style.left = "93%";
    play.style.top = "2%";
    play.setAttribute("id","play1");
    storybox1.appendChild(play);

        var heart = document.createElement("i");
        heart.style.position = "absolute";
        heart.style.left = "90%";
        heart.style.top = "95%";
        heart.style.color = "white";
        heart.style.fontSize = "20px";
        heart.setAttribute("id","heart1");
        heart.setAttribute("class","fa-regular fa-heart");
        storybox1.appendChild(heart);

        $("#heart1").click(function(){
            $("#heart1").css("display", "none")
            var heart = document.createElement("i");
            heart.style.position = "absolute";
            heart.style.left = "90%";
            heart.style.top = "95%";
            heart.style.color = "red";
            heart.style.fontSize = "20px";
            heart.setAttribute("id","heartRed");
            heart.setAttribute("class","fa-solid fa-heart");
            storybox1.appendChild(heart);

        })

    var source1 = document.createElement("source");
    source1.setAttribute("src","video/story3.mp4");
    story1.appendChild(source1);


    var st3 = document.getElementById("st3");
    st3.play();
    play.remove();
    var pause = document.createElement("div");
    pause.style.width = "20px";
    pause.style.height = "20px";
    pause.style.backgroundImage = "url('images/pause.png')";
    pause.style.backgroundRepeat = "no-repeat";
    pause.style.backgroundSize = "100% 100%";
    pause.style.position = "absolute";
    pause.style.left = "93%";
    pause.style.top = "2%";
    pause.setAttribute("id","pouse1");
    storybox1.appendChild(pause); 
    
    var tm3 = setTimeout(tm33,1000);

function tm33() {
   var tm3 = document.createElement("div");
   tm3.style.width = "1%";
   tm3.style.height = "1px";
   tm3.style.backgroundColor = "white";
   tm3.style.position = "absolute";
   tm3.style.top = "1%";
   tm3.style.left = "1%";
   tm3.setAttribute("id","tm3");
   storybox1.appendChild(tm3);
}
$("div#x").click(function(){
   $("div#stori3body").fadeOut(1000);
   $("div#tm3").fadeOut();
   $("video#st3").remove();
})
})




$("div.i2").click(function(){  
    $("div#ms").fadeIn();
   var messege = document.createElement("div");
   messege.style.width = "80%";
   messege.style.height = "650px";
   messege.style.backgroundImage = "url('images/message.png')";
   messege.style.backgroundRepeat = "no-repeat";
   messege.style.backgroundSize = "100% 100%";
   messege.style.position = "absolute";
   messege.style.top = "7%";
   messege.style.left = "6%";
   messege.setAttribute("id","ms");
   document.body.appendChild(messege);
})

$("div.i1").click(function(){
   $("div#ms").fadeOut();
})

$("div.iu").click(function(){
   var page = document.createElement("div");
   page.style.width = "80%";
   page.style.height = "650px";
   page.style.backgroundImage = "url('images/mypage.png')";
   page.style.backgroundRepeat = "no-repeat";
   page.style.backgroundSize = "100% 100%";
   page.style.position = "absolute";
   page.style.top = "7%";
   page.style.left = "6%";
   page.setAttribute("id","pg");
   document.body.appendChild(page);
})

$("div.i1").click(function(){
   $("div#pg").fadeOut();
})

