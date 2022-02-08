window.scrollTo(300)=function(){

let number = document.querySelector('#number');
        let counter = 0;

        setInterval(() => {
            if(counter == 85){
                clearInterval();
            }else{
                counter += 1;
                number.innerHTML = counter + "%";
            }
        }, 30);
  

    }