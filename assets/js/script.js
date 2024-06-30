const input =document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let String="";

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        const value=e.target.innerHTML;

        if (value === '='){
            String=eval(String);

        }
        else if(value  =='AC'){
            String="";
        }
        else if (value =="DEL"){
            String=String.slice(0,-1);
            }
            else{
                String +=value;
                }
                input.value=String;
                })
                })

