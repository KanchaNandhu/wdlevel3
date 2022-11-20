[10:33 pm, 19/11/2022] Sravani Gnits: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <style>
        input#name:invalid:focus{
            border:3px solid red;
        }
        input#email:invalid:focus{
            border:3px solid red;
        }
        input#password:invalid:focus{
            border:3px solid red;
        }
        input#dob:invalid:focus{
            border:3px solid red;
        }

        body{
            background-color: rgb(103, 227, 230);
        }
        h2{
            color:red;
        }
        #j1{
            text-align: center;
        }
        #t1{
            display: flex;
            flex-direction: column;
            background-color: white;
            margin-left: 35%;
            margin-top: 5%;
            padding: 50px;
            max-width: 20%;
            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
            border-radius: 4%;
            font-family: sans-serif;
            font-weight: 600;
        }
        #name{
            border-radius: 5px;
            padding: 5px;
            width:80%;
            margin:10px;

        }
        #email{
            border-radius: 5px;
            width:80%;
            padding: 5px;
            margin:10px;

        }
        #password{
            border-radius: 5px;
            padding: 5px;
            width:80%;
            margin:10px;

        }
        #dob{
            border-radius: 5px;
            padding: 5px;
            width:80%;
            margin:10px;

        }

        #c1{
            display: inline-flex;
            margin:10px;
        
        }
        button{
            width:70px;
            padding:5px;
            border-radius: 15px;
            background-color: deepskyblue;
            color:white;
            border-width: 1px;
        }
        #table-box{
            margin:10px;
            display: flex;
            background-color: wheat;
            flex-direction: column;
            border:2px  solid black;
            justify-content: flex-start;
            align-items: left;
            border-radius:20px;
            height: 400px;
            width: 700px;

        }

        td,th{
            border:2px  solid black;
            width: 100px;
            text-align: center;
        }
    </style>
</head>
<body>

   <div>
    <form id="t1">
        <h2 id="j1"> Registration Form</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter full name" required >
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required>
        <div id="c1">
            <input type="checkbox" id="acceptTerms" name="acceptTerms">&nbsp;
            <label for="acceptTerms">Accept Terms and Conditions</label>
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>

    <div id="table-box">
        <h1>Entries</h1>
        <table id="user-table">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Dob</th>
            <th>Accepted terms?</th>
            </tr>
        </table>
      </div>
  </div>

    
</body>
<script >
    
const email=document.getElementById('email');
email.addEventListener('input',()=> Validate(email));

function Validate(ele){
    if (ele.validity.typeMismatch){
        ele.setCustomValidity("enter Email in right format");
        ele.reportValidity();
    }
    else{
        ele.setCustomValidity("");
    }
}

const dob=document.getElementById('dob');
dob.addEventListener('input',()=> verifydob(dob));

function verifydob(ele){
    var dob = new Date(ele.value);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    if (age<18 || age>55 ){
        ele.setCustomValidity("Age should be between 18 and 55 only !!");
        ele.reportValidity();
    }

    else{
        ele.setCustomValidity("");
    }
}



let userForm=document.getElementById("t1");
const retrieveEntries=()=> {
    let entries=localStorage.getItem("user-entries");
    if (entries){
        entries = JSON.parse(entries);
    }
    else{
        entries=[]
    }
    return entries;
}

let userEntries=retrieveEntries();

function displayEntries(){
    let table = document.getElementById("user-table");
    let entries = retrieveEntries();
    let str = `<tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Dob</th>
                    <th>Accepted terms?</th>
                </tr>\n`;
    for(let i=0;i<entries.length;i++){
        str += `<tr>
                    <td>${entries[i].Name}</td>
                    <td>${entries[i].Email}</td>
                    <td>${entries[i].Password}</td>
                    <td>${entries[i].Dob}</td>
                    <td>${entries[i]. AcceptTerms}</td>
                </tr>\n`;
    }
    table.innerHTML = str;
}

const SaveUserForm = (eve)=>{
    eve.preventDefault();
    const Name=document.getElementById("name").value;
    const Email=document.getElementById("email").value;
    const Password=document.getElementById("password").value;
    const Dob=document.getElementById("dob").value;
    const AcceptTerms=document.getElementById("acceptTerms").checked;

    const entry={
        Name,
        Email,
        Password,
        Dob,
        AcceptTerms
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
}
userForm.addEventListener("submit",SaveUserForm);
displayEntries();

</script>
</html>
[10:33 pm, 19/11/2022] Sravani Gnits: regi
[10:33 pm, 19/11/2022] Sravani Gnits: <!-- home.html -->
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>My Application</title>
</head>
<body>
   <h1>My Application Home</h1>
   <a href="./registration">registration</a>
   <a href="./project">Projects</a>
</body>
</html>
