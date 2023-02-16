function getEle(id) {
    return document.getElementById(id);
}

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        getEle("headerFixed").style.transform = "translate(-50%, 0%)";
    } else {
        getEle("headerFixed").style.transform = "translate(-50%, -100%)";        
    }
}