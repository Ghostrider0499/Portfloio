// about me

var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-content");
    function opentab(tabname){
       for(tablink of tablinks){
        tablink.classList.remove("active-link");
    } 
       for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
       event.currentTarget.classList.add("active-link");
       document.getElementById(tabname).classList.add("active-tab");
    }


// contact form

 const scriptURL = 'https://script.google.com/macros/s/AKfycbwuWpZJXeXTM1TElpBRZRCGzm3Ac9b8nMD_nfKD5EiucdVzL3bp8M9mVPDPAyLvXX2kiw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="I'll get back to you"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
