//Users Names--------------------------------------------------------------------

var xhrUser = new XMLHttpRequest()
var myJsUsers;
var names = []
xhrUser.onloadend = function () {
    myJsUsers = JSON.parse(xhrUser.responseText)

    for (var i = 0; i < myJsUsers.length; i++) {
        names.push(myJsUsers[i].name)
    }

}


xhrUser.open("GET", "https://jsonplaceholder.typicode.com/users", true)
xhrUser.send();


function setName(uId) {
    for (var i = 1; i < names.length + 1; i++) {
        if (uId == i) {
            return names[i - 1]

        }
    }
}


//Add Post-------------------------------------------------------------------------


function addPost(pdata, uid, profileid) {
    var postdiv1 = document.createElement("div");
    postdiv1.className = "divPostDesign"
    var postdiv2 = document.createElement("div")
    postdiv2.style.textAlign = "left"
    postdiv1.appendChild(postdiv2)
    var postTable = document.createElement("table")
    postTable.style.textAlign = "left"
    postdiv2.appendChild(postTable)
    var postTr = document.createElement("tr")
    postTable.appendChild(postTr)
    var postTd1 = document.createElement("td")
    postTr.appendChild(postTd1)
    var postImg = document.createElement("img")
    postImg.className = "postimg"
    var imgSrc = getImg(uid)
    postImg.src = imgSrc
    postTd1.appendChild(postImg)

    var postTd2 = document.createElement("td")
    postTd2.style.paddingTop = "15px"
    postTr.appendChild(postTd2)
    var posth3 = document.createElement("h3")
    posth3.style.display = "inline"
    var nam = setName(uid)
    posth3.innerText = nam
    postTd2.appendChild(posth3)
    var postp = document.createElement("p")
    var d = getDate()
    postp.innerText = "Published: " + d
    postTd2.appendChild(postp)

    var postdiv3 = document.createElement("div")
    postdiv1.appendChild(postdiv3)
    // var postImg2 = document.createElement("img")
    // postImg2.className = "pupimg"
    // postImg2.src = "images/post2.jpg"
    // postdiv3.appendChild(postImg2)
    var postp2 = document.createElement("p")
    postp2.innerText = pdata;
    postp2.className = "textPost"
    postdiv3.appendChild(postp2)

    var postdiv4 = document.createElement("div")
    postdiv4.className = "react"
    postdiv4.style.textAlign = "left"
    postdiv1.appendChild(postdiv4)

    postdiv4.innerText = "30"
    var icon1 = document.createElement("i")
    icon1.className = "fas fa-heart"
    postdiv4.appendChild(icon1)

    postdiv4.append("15")
    var icon2 = document.createElement("i")
    icon2.className = "fas fa-comment-dots"
    postdiv4.appendChild(icon2)

    postdiv4.append("0")
    var icon3 = document.createElement("i")
    icon3.className = "fas fa-share-alt"
    postdiv4.appendChild(icon3)

    var di = profileid
    document.getElementById(di).appendChild(postdiv1)
}

//Post Time-----------------------------------------------------------------------------

function getDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + "    " + time;
    return dateTime;
}

//Users Images---------------------------------------------------------------------------

function getImg(id) {
    var uimg;
    switch (id) {
        case 1:
            uimg = "images/avatar1.png"
            break;
        case 2:
            uimg = "images/avatar2.png"
            break;
        case 3:
            uimg = "images/avatar3.png"
            break;
        case 4:
            uimg = "images/avatar4.png"
            break;
        case 5:
            uimg = "images/avatar5.png"
            break;
        case 6:
            uimg = "images/avatar6.png"
            break;
        case 7:
            uimg = "images/avatar7.png"
            break;
        case 8:
            uimg = "images/avatar8.png"
            break;
        case 9:
            uimg = "images/avatar9.png"
            break;
        case 10:
            uimg = "images/avatar10.png"
            break;
        default:
            uimg = "not found"
            break;
    }
    return uimg
}




//Home Posts-----------------------------------------------------------------

function homePosts() {
    var newXhr = new XMLHttpRequest();
    var myJsData;

    newXhr.onloadend = function () {
        myJsData = JSON.parse(newXhr.responseText)
        for (var i = 0; i < myJsData.length; i += 10) {
            addPost(myJsData[i].body, myJsData[i].userId, "leftDivHome")
        }
    }


    newXhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    newXhr.send();
}


function userHomePost(){
    var text = document.getElementById('postTxt')
    if (text.value != "") {
        addPost(text.value, 1,"leftDivHome")
        alert("Posted")
        text.value = ""
    } else {
        alert("Sorry, Empty Post")
    }
}



//Profile Posts---------------------------------------------------------------------

function profilePosts() {
    var xhrProfile = new XMLHttpRequest();
    var myJsProfile;

    xhrProfile.onloadend = function () {
        myJsProfile = JSON.parse(xhrProfile.responseText)
        for (var i = 0; i < myJsProfile.length; i++) {
            if (myJsProfile[i].userId == 1) {
                addPost(myJsProfile[i].body, myJsProfile[i].userId, "leftDivProfile")
            }
        }
    }


    xhrProfile.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    xhrProfile.send();
}


function userProfilePost(){
    var text = document.getElementById('postTxt')
    if (text.value != "") {
        addPost(text.value, 1,"leftDivProfile")
        alert("Posted")
        text.value = ""
    } else {
        alert("Sorry, Empty Post")
    }
}






//Get File Name
function openAttachment() {
    document.getElementById('attachment').click();
  }
  
  function fileSelected(input){
    document.getElementById('postTxt').value = "File: " + input.files[0].name
  }

  function logout(){
    window.open('login.html')
    window.close('home.html')
    window.close('profile.html')
  }
  