

  let Sunzineloged_in_user = JSON.parse(localStorage.getItem("Sunzineloged_in_user"))
  // console.log(Sunzineloged_in_user);

  function checkifwehaveuser() {
    if (Sunzineloged_in_user == null) {

      document.getElementById("login").style.display = "block"
      document.getElementById("logout").style.display = "none"

    } else {
      document.getElementById("login").style.display = "none"
      document.getElementById("logout").style.display = "block"
    }
  }
  checkifwehaveuser()

  function login() {
    window.location.href = "login.html"


  }
  function logout() {
    Sunzineloged_in_user = null
    localStorage.setItem('Sunzineloged_in_user', JSON.stringify(Sunzineloged_in_user))
    checkifwehaveuser()
    window.location.href = "index.html"
  }

  let Sunzinebolgarray = JSON.parse(localStorage.getItem("Sunzinebolgarray"))
  // console.log(Sunzinebolgarray)
  if (Sunzinebolgarray == null) {
    Sunzinebolgarray = [
      {
        title: "MindTalk ",
        content: "You are cordially invited to a special edition of the MindTalk event on Monday, 1st of May | 10am Tagged: The Merger: Skillsets and Certificates. Join us live from all our campuses and invite as many people as you can, parents, students, and anyone to benefit from this event.",
        image: "./images/FvBwVVDXwAIYSFw.jpeg",
        author: "SQI",
        date: "Default",
        likedarray: [],
        comments: []
      },
      {
        title: "MindTalk ",
        content: "You are cordially invited to a special edition of the MindTalk event on Monday, 1st of May | 10am Tagged: The Merger: Skillsets and Certificates. Join us live from all our campuses and invite as many people as you can, parents, students, and anyone to benefit from this event.",
        image: "./images/FvBwVVDXwAIYSFw.jpeg",
        author: "SQI",
        date: "Default",
        likedarray: [],
        comments: []
      },
      {
        title: "MindTalk ",
        content: "You are cordially invited to a special edition of the MindTalk event on Monday, 1st of May | 10am Tagged: The Merger: Skillsets and Certificates. Join us live from all our campuses and invite as many people as you can, parents, students, and anyone to benefit from this event.",
        image: "./images/FvBwVVDXwAIYSFw.jpeg",
        author: "SQI",
        date: "Default",
        likedarray: [],
        comments: []
      },
      {
        title: "MindTalk ",
        content: "You are cordially invited to a special edition of the MindTalk event on Monday, 1st of May | 10am Tagged: The Merger: Skillsets and Certificates. Join us live from all our campuses and invite as many people as you can, parents, students, and anyone to benefit from this event.",
        image: "./images/FvBwVVDXwAIYSFw.jpeg",
        author: "SQI",
        date: "Default",
        likedarray: [],
        comments: []
      },
      {
        title: "MindTalk ",
        content: "You are cordially invited to a special edition of the MindTalk event on Monday, 1st of May | 10am Tagged: The Merger: Skillsets and Certificates. Join us live from all our campuses and invite as many people as you can, parents, students, and anyone to benefit from this event.",
        image: "./images/FvBwVVDXwAIYSFw.jpeg",
        author: "SQI",
        date: "Default",
        likedarray: [],
        comments: []
      },
      
      ]

    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))

  }

  // console.log(Sunzinebolgarray);

  function home() {
    document.getElementById("firstbuttonontop").style.display = "block"
    document.getElementById("firstblog").innerHTML = ""

    for (let index = 0; index < Sunzinebolgarray.length; index++) {
      const element = Sunzinebolgarray[index];

      document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2" style="max-width: 1040px;">
      <div class="row  g-0">
        <div class="col-md-4 imgfocard2" style="background-image: url(${element.image});" id="" >
         
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p class="card-text showsmallcontent">${element.content}</p>
            <p class="card-text text-light"><small class="">Author: ${element.author}</small></p>
            <p class="card-text text-light"><small class="">Date: ${element.date}</small></p>
            <div>
              <button class="btn btn-light text-success m-2" onclick="readmore(${index})">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`
    }

  }
  home()

  let reader = new FileReader()

  function pickfile(ev) {
    let file = ev.target.files[0]
    // console.log(file);
    reader.onload = (file) => {
      // console.log(reader.result);
      document.getElementById("formimg").src = reader.result
      // reader.readAsDataURL(file)
    }

    if (file) {
      let data = reader.readAsDataURL(file);
    }
  }


  function newblog() {

    if (Sunzineloged_in_user == null) {
      window.location.href = "login.html"
    }

    document.getElementById("firstbuttonontop").style.display = "none"
    document.getElementById("firstblog").innerHTML = `
  <div class="col-sm-8 col-lg-6 p-2 m-auto my-3 bg-success text-light postbox m-2">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          <h3>Title</h3>
        </label>
        <input type="text" class="form-control" id="title" placeholder="Blog Title">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          <h4>Images</h4>
        </label>
        <div class=" form-control my-1 imgholder  d-flex align-center justify-content-center ">
          <img src="" class="h-100 m-auto" id="formimg" alt="IMAGE PREVIEW">
        </div>
        <input class="form-control" onchange="pickfile(event)" type="file" name="" id="">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          <h4>Content</h4>
        </label>
        <textarea class="form-control" id="content" placeholder="Blog Content" rows="20"></textarea>
      </div>
      <button class="btn btn-light text-success m-2" onclick="posttheinputblog()">Post Blog</button>
    </div>


`

  }

  function posttheinputblog() {
    document.getElementById("title").value
    document.getElementById("formimg").src
    document.getElementById("content").value
    // console.log(document.getElementById("title").value)
    // console.log(document.getElementById("formimg").src)
    // console.log(document.getElementById("content").value)
    let thetime = new Date()
    let thedate = thetime.getDate() + "/" + thetime.getMonth() + "/" + thetime.getFullYear()
    let time = thetime.getHours() + ":" + thetime.getMinutes() + ":" + thetime.getSeconds()
    // console.log(thedate + "   " + time);
    // console.log(Sunzineloged_in_user.name);
    // console.log(
    //   {
    //     title: document.getElementById("title").value,
    //     content: document.getElementById("content").value,
    //     image: document.getElementById("formimg").src,
    //     author: Sunzineloged_in_user.name,
    //     date: thedate + "   " + time,
    //     likedarray: [],
    //     comments: []
    //   }
    // );

    Sunzinebolgarray.push({
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      image: document.getElementById("formimg").src,
      author: Sunzineloged_in_user.name,
      date: thedate + "   " + time,
      likedarray: [],
      comments: []
    })

    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))

    home()

    // let today = new Date()
    // console.log(today);
    // console.log(today.getFullYear());
    // console.log(today.getDate());
    // console.log(today.getDay());
    // console.log(today.getHours());
    // console.log(today.getTimezoneOffset());
  }



  function readmore(i) {
    // console.log(Sunzinebolgarray[i]);

    document.getElementById("firstbuttonontop").style.display = "block"
    document.getElementById("firstblog").innerHTML = ""
    // console.log(Sunzinebolgarray[i]);
    document.getElementById("firstblog").innerHTML = `

     <div class="card border-success m-2" style="width: 38rem;">

<div class="card-img-top topcardimg position-relative" style="background-image:url(${Sunzinebolgarray[i].image});" >
  <button class="btn btn-success  position-absolute bottom-0 m-2 " onclick="viewtheimage(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal"  >click to view image</button>
</div>
<div class="card-body bg-success text-light ">
  <h5 class="card-title">${Sunzinebolgarray[i].title}</h5>
  <p class="card-text ">${Sunzinebolgarray[i].content}</p>
  <p class="card-text">Author: ${Sunzinebolgarray[i].author}</p>
  <p class="card-text">${Sunzinebolgarray[i].date}</p>
  <div>
    <button class="btn btn-success btn-outline-light text-light m-2" id="like${i}"  onclick="likethepost(${i})">like</button>
    <button class="btn btn-primary  text-light m-2 " id="unlike${i}" style="display: none;"  onclick="unlikethepost(${i})">unlike</button>

  </div>
</div>
<div id="commentdiv">
  
  </div>

</div>  
`
    let checkifyoulike = Sunzinebolgarray[i].likedarray.find((currentuserlike) => currentuserlike.name == Sunzineloged_in_user.name)
    if (checkifyoulike) {
      document.getElementById("like" + i).style.display = "none"
      document.getElementById("unlike" + i).style.display = "block"
    }
    // comment section
    document.getElementById("commentdiv").innerHTML += `
<div class="card  bg-light text-success m-2" id="" >
  <div class="card-header bg-success text-light">
    <p class="fs-5 m-0 fw-bold">Comment Section</p>
  </div>
  <div class="card-body">
    <h5 class="card-title">Write your comment</h5>
 <textarea name="" id="commentsectiontextarea" cols="30" rows="10" class="d-block my-2 text-success p-2  w-100"></textarea>
    <button class="btn btn-success" onclick="postcommenttotheblog(${i})">submit</button>
  </div>
  <div id="showcommentincommentsection">
    </div>
</div>`
    document.getElementById("showcommentincommentsection").innerHTML = ""
    for (let index = 0; index < Sunzinebolgarray[i].comments.length; index++) {
      const element = Sunzinebolgarray[i].comments[index];

      if (Sunzinebolgarray[i].comments[index].name == Sunzineloged_in_user.name) {
        document.getElementById("showcommentincommentsection").innerHTML += `
      <div class="card text-bg-success mb-3" >
    <div class="card-header "><p class="fw-bold fs-6 m-0">${element.name}</p></div>
    <div class="card-body">
      <p class="card-title">${element.thecomment}</p>
      <p class="card-text">${element.time}</p>
      <button class="btn btn-success text-light m-2 btn-outline-light" onclick="deletecomment(${index},${i})">Delete comment</button>

    </div>
  </div>`
      } else {
        document.getElementById("showcommentincommentsection").innerHTML += `
      <div class="card text-bg-success mb-3" >
    <div class="card-header "><p class="fw-bold fs-6 m-0">${element.name}</p></div>
    <div class="card-body">
      <p class="card-title">${element.thecomment}</p>
      <p class="card-text">${element.time}</p>

    </div>
  </div>`
      }

    }

  }

  function postcommenttotheblog(i) {
    if (Sunzineloged_in_user == null) {
      window.location.href = "login.html"
    }
    let thetime = new Date()
    let thedate = thetime.getDate() + "/" + thetime.getMonth() + "/" + thetime.getFullYear()
    let time = thetime.getHours() + ":" + thetime.getMinutes() + ":" + thetime.getSeconds()
    Sunzinebolgarray[i].comments.push({
      name: Sunzineloged_in_user.name,
      thecomment: document.getElementById("commentsectiontextarea").value,
      time: time + "  " + thedate
    })

    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))

    console.log(Sunzinebolgarray[i].comments);
    document.getElementById("showcommentincommentsection").innerHTML = ""
    for (let index = 0; index < Sunzinebolgarray[i].comments.length; index++) {
      const element = Sunzinebolgarray[i].comments[index];

      if (Sunzinebolgarray[i].comments[index].name == Sunzineloged_in_user.name) {
        document.getElementById("showcommentincommentsection").innerHTML += `
      <div class="card text-bg-success mb-3" >
    <div class="card-header "><p class="fw-bold fs-6 m-0">${element.name}</p></div>
    <div class="card-body">
      <p class="card-title">${element.thecomment}</p>
      <p class="card-text">${element.time}</p>
      <button class="btn btn-success text-light m-2 btn-outline-light" onclick="deletecomment(${index},${i})">Delete comment</button>

    </div>
  </div>`
      } else {
        document.getElementById("showcommentincommentsection").innerHTML += `
      <div class="card text-bg-success mb-3" >
    <div class="card-header "><p class="fw-bold fs-6 m-0">${element.name}</p></div>
    <div class="card-body">
      <p class="card-title">${element.thecomment}</p>
      <p class="card-text">${element.time}</p>

    </div>
  </div>`
      }
    }
    document.getElementById("commentsectiontextarea").value = ""
  }

  function viewtheimage(i) {
    document.getElementById("youwillbeshowingimg").src = Sunzinebolgarray[i].image
  }

  function likethepost(i) {

    if (Sunzineloged_in_user == null) {
      window.location.href = "login.html"
    }

    // console.log(Sunzinebolgarray[i].likedarray);
    Sunzinebolgarray[i].likedarray.push({
      name: Sunzineloged_in_user.name,
      like: true,
    })
    // console.log(Sunzinebolgarray[i].likedarray);
    let checkifyoulike = Sunzinebolgarray[i].likedarray.find((currentuserlike) => currentuserlike.name == Sunzineloged_in_user.name)
    if (checkifyoulike) {
      document.getElementById("like" + i).style.display = "none"
      document.getElementById("unlike" + i).style.display = "block"
    }

    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))


  }
  function unlikethepost(i) {
    if (Sunzineloged_in_user == null) {
      window.location.href = "login.html"
    }
    // console.log(Sunzinebolgarray[i].likedarray);

    let checkifyoulike = Sunzinebolgarray[i].likedarray.find((currentuserlike) => currentuserlike.name == Sunzineloged_in_user.name)
    if (checkifyoulike) {
      // console.log(checkifyoulike);
      Sunzinebolgarray[i].likedarray.splice(Sunzinebolgarray[i].likedarray.indexOf(checkifyoulike), 1);
      // console.log(Sunzinebolgarray[i].likedarray);
      document.getElementById("like" + i).style.display = "block"
      document.getElementById("unlike" + i).style.display = "none"
    }

    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))

  }

  function allyourblog() {
    document.getElementById("firstbuttonontop").style.display = "block"
    document.getElementById("firstblog").innerHTML = ""


    if (Sunzineloged_in_user == null) {
      document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2 p-2" style="max-width: 1040px;">
    login to check your blog
    </div>
`
    } else {
      for (let index = 0; index < Sunzinebolgarray.length; index++) {
        const element = Sunzinebolgarray[index];

        if (element.author != Sunzineloged_in_user.name) {
          continue
        } else {
          document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2" style="max-width: 1040px;">
      <div class="row  g-0">
        <div class="col-md-4 imgfocard2" style="background-image: url(${element.image});" id="" >
         
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p class="card-text showsmallcontent">${element.content}</p>
            <p class="card-text text-light"><small class="">Author: ${element.author}</small></p>
            <p class="card-text text-light"><small class="">Date: ${element.date}</small></p>
            <div>
              <button class="btn btn-light text-success m-2" onclick="readmore(${index})">read more</button>
              <button class="btn btn-light text-success m-2" onclick="deleteyourblog(${index})">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`
        }
      }

    }
    if (document.getElementById("firstblog").innerHTML == "") {
      document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2 p-2" style="max-width: 1040px;">
      you have no blog
    </div>
`
    }

  }

  function deleteyourblog(params) {
    Sunzinebolgarray.splice(params, 1)
    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))
    allyourblog()

  }

  function yourlikedblogs() {
    document.getElementById("firstbuttonontop").style.display = "block"
    document.getElementById("firstblog").innerHTML = ""
if (Sunzineloged_in_user==null) {
  document.getElementById("firstblog").innerHTML =`
  <div class="card mb-3 bg-success text-light m-2 p-2" style="max-width: 1040px;">
      login to check your liked blog
    </div>
  `

} else {
  for (let index = 0; index < Sunzinebolgarray.length; index++) {
      const element = Sunzinebolgarray[index];


      let checkifyoulike = Sunzinebolgarray[index].likedarray.find((currentuserlike) => currentuserlike.name == Sunzineloged_in_user.name)
      if (checkifyoulike) {
        document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2" style="max-width: 1040px;">
      <div class="row  g-0">
        <div class="col-md-4 imgfocard2" style="background-image: url(${element.image});" id="" >
         
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p class="card-text showsmallcontent">${element.content}</p>
            <p class="card-text text-light"><small class="">Author: ${element.author}</small></p>
            <p class="card-text text-light"><small class="">Date: ${element.date}</small></p>
            <div>
              <button class="btn btn-light text-success m-2" onclick="readmore(${index})">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`

      } else {
        continue
      }
    }
    if (document.getElementById("firstblog").innerHTML == "") {
      document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2 p-2" style="max-width: 1040px;">
     you don't have any liked blog
    </div>
`
    }
}

  }


  function searchforblog() {
    document.getElementById("inputtosearch").value

    // let result = [];

    // Sunzinebolgarray.forEach((obj, index) => {
    //   Object.values(obj).forEach(value => {
    //     if (typeof value === 'string' && value.includes(document.getElementById("inputtosearch").value)) {

    //       let check = result.find((cur) => cur == result)
    //       if (check) {
    //         continue
    //       } else {
    //         result.push(index);
    //       }
    //     }
    //   });
    // });

    // console.log(result);


    let result = [];

    Sunzinebolgarray.forEach((obj, index) => {
      let found = false;
      Object.values(obj).forEach(value => {
        if (!found && typeof value === 'string' && value.includes(document.getElementById("inputtosearch").value)) {
          result.push(index);
          found = true;
        }
      });
    });

    console.log(result);


    document.getElementById("firstblog").innerHTML = ""



    if (result.length == 0) {
      document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light p-2 m-2" style="max-width: 1040px;">
 Nothing match your input
</div>
`
    } else {

      for (let index = 0; index < result.length; index++) {
        // console.log(result[index]);
        const element = Sunzinebolgarray[result[index]];
        // console.log(element);



        document.getElementById("firstblog").innerHTML += `

<div class="card mb-3 bg-success text-light m-2" style="max-width: 1040px;">
  <div class="row  g-0">
    <div class="col-md-4 imgfocard2" style="background-image: url(${element.image});" id="" >
     
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${element.title}</h2>
        <p class="card-text showsmallcontent">${element.content}</p>
        <p class="card-text text-light"><small class="">Author: ${element.author}</small></p>
        <p class="card-text text-light"><small class="">Date: ${element.date}</small></p>
        <div>
          <button class="btn btn-light text-success m-2" onclick="readmore(${result[index]})">read more</button>
        </div>
      </div>
    </div>
  </div>
</div>
`
      }


    }
    document.getElementById("inputtosearch").value = ""
  }

  function deletecomment(index, i) {

    // console.log(i);
    // console.log(index, i);
    // console.log(Sunzinebolgarray[i].comments);
    Sunzinebolgarray[i].comments.splice(index, 1)
    // console.log(Sunzinebolgarray[i].comments);

    document.getElementById("showcommentincommentsection").innerHTML = ""
    for (let index = 0; index < Sunzinebolgarray[i].comments.length; index++) {
      const element = Sunzinebolgarray[i].comments[index];

      if (Sunzinebolgarray[i].comments[index].name == Sunzineloged_in_user.name) {
        document.getElementById("showcommentincommentsection").innerHTML += `
      <div class="card text-bg-success mb-3" >
    <div class="card-header "><p class="fw-bold fs-6 m-0">${element.name}</p></div>
    <div class="card-body">
      <p class="card-title">${element.thecomment}</p>
      <p class="card-text">${element.time}</p>
      <button class="btn btn-success text-light m-2 btn-outline-light" onclick="deletecomment(${index},${i})">Delete comment</button>

    </div>
  </div>`
      } else {
        document.getElementById("showcommentincommentsection").innerHTML += `
      <div class="card text-bg-success mb-3" >
    <div class="card-header "><p class="fw-bold fs-6 m-0">${element.name}</p></div>
    <div class="card-body">
      <p class="card-title">${element.thecomment}</p>
      <p class="card-text">${element.time}</p>

    </div>
  </div>`
      }

    }
    localStorage.setItem('Sunzinebolgarray', JSON.stringify(Sunzinebolgarray))
  }


