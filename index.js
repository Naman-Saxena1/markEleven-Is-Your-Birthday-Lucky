const dob=document.querySelector("#dob")
const luckyNumber=document.querySelector("#lucky-number")
const checkBtn=document.querySelector("#btn-check")
const message=document.querySelector("#result")

function buttonClickHandler()
{
    let luckyNbr = Number(luckyNumber.value)
    if(dob.value&&luckyNbr)
    {
        let date=dob.value
        let resultDate=""
        for(let index in date)
        {
            if(date[index]=="-")
            {
                continue; 
            }
            resultDate=resultDate+date[index]
        }
        resultDate=Number(resultDate)
        let sum=0
        while(resultDate>0)
        {
            sum=sum+(resultDate%10)
            resultDate=Math.trunc(resultDate/10)
        }
        if(sum%luckyNbr==0)
        {
            message.innerText="Hooray! Your Birthday is Lucky! 🥳"
        }
        else
        {
            message.innerText="Ooh No! Your Birthday is not Lucky! 😔"
        }
    }
    else
    {
        message.innerText="Enter input in both fields!  😤"
    }
}

checkBtn.addEventListener("click",()=>buttonClickHandler())