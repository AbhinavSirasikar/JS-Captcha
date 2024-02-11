document.addEventListener("DOMContentLoaded",function(){
    var canvas = document.getElementById("captcha");
    var ctx = canvas.getContext("2d");
    var captchaText = generateCaptchaText(6);
    const captchaStatus = document.getElementById("captcha-status");
    drawCaptcha(captchaText);

    function verifyCaptcha(){
        var inputText = document.getElementById("captcha-input").value.toLowerCase()

        if(inputText === captchaText.toLowerCase()){
            captchaStatus.textContent = 'Captcha Correct!';
            captchaStatus.style.color = "green";
        }else if(inputText.length < 6){
            captchaStatus.textContent = "Enter all characters!";
            captchaStatus.style.color = "red";

        }
        else{
            captchaStatus.textContent = "Captcha incorrect!";
            captchaStatus.style.color = "red";
        }
        setTimeout(()=>{
            captchaStatus.textContent = 'Status : IDLE';
            captchaStatus.style.color = 'black';
        },3000)
        inputText.value = "";
        captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);

    }

    // Add event listener for check button
    document.getElementById("check-captcha").addEventListener("click",verifyCaptcha)

    // Add event listener for reload button
    document.getElementById("reload-captcha").addEventListener("click",function(){
        captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);
        inputText.value = "";
        captchaStatus.textContent = "Status : IDLE";
    })

    function generateCaptchaText(length){
        const result = "";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charsLength = chars.length;

        for(let i=0;i<charsLength;i++){
            result += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    }

    function drawCaptcha(text){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#f3f3f3";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        addNoise(ctx);
        ctx.fillStyle = "#06108c";
        ctx.font = "24px Arial";

        // Calculate the width of text and stqrt position
        const textWidth = ctx.measureText(text).width;
        const startX = (canvas.width - textWidth)/3;

        // Adding rotation and distortion
        


    }
})