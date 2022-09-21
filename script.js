function clickMe(x) {
    const card = document.getElementById('outside').style.transform

    console.log(card)
    if (card === "rotateY(0deg)") {
        document.getElementById("outside").style.transform = "rotateY(-160deg)"
        // document.getElementById("outside").style.left = "0%"
        document.getElementById("outside").style.opacity = "1"
        document.getElementById("outside").style.width = "80%"

        var mq = window.matchMedia("(max-width:700px)")
        if (mq.matches) {
            document.getElementsByClassName('inside')[0].style.width = "50%"
            document.getElementsByClassName('inside2')[0].style.width = "50%"
        } else {
            document.getElementsByClassName('inside')[0].style.width = "100%"
            document.getElementsByClassName('inside2')[0].style.width = "100%"
        }

        document.getElementsByClassName('inside')[0].style.height = "100%"
        document.getElementsByClassName('inside2')[0].style.
            height = "100%"
        document.getElementsByClassName('inside2')[0].style.display = "block"
        document.getElementsByClassName('ten')[0].style.visibility = "visible"
        document.getElementsByTagName('video')[0].style.height = "500px"
        document.getElementsByClassName('card')[0].style.height = '85%'
        document.getElementsByTagName('iframe').style.display = "block"


    } else {
        document.getElementById('outside').style.transform = "rotateY(0deg)"
        document.getElementById("outside").style.opacity = "1"
        document.getElementById("outside").style.width = "50%"
        document.getElementsByClassName('inside')[0].style.width = "50%"
        document.getElementsByClassName('inside')[0].style.left = "5%"
        document.getElementsByClassName('inside2')[0].style.width = "50%"
        document.getElementsByClassName('inside2')[0].style.left = "5%"
        document.getElementsByClassName('inside2')[0].style.display = "none"
        document.getElementsByClassName('card')[0].style.height = "400px"
        document.getElementsByClassName('card')[0].style.width = '640px'
        document.getElementById("outside").style.left = "5%"
        document.getElementsByClassName('ten')[0].style.visibility = 'hidden'
        document.getElementsByTagName('iframe').style.display = "none"



        // const replyBtn = document.getElementsByClassName('.card')[0]
        // replyBtn.addEventListener
    }
}


console.log(window.matchMedia)