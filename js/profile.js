function profile(){

    var button_content1 = document.getElementById("edit_profile_btn")
    button_content1.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/4751/4751751.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-danger border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Edit Profile</button>
    `

    var button_content2 = document.getElementById("consults_btn")
    button_content2.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351119.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Consults</button>
    `

    var button_content3 = document.getElementById("med_hist_btn")
    button_content3.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/10299/10299454.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Medical History</button>
    `

    var button_content5 = document.getElementById("past_prescriptions_btn")
    button_content5.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/6599/6599288.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Past Prescriptions</button>
    `


    var change_content = document.getElementById("change_content")
    change_content.innerHTML = 
    `
    <form class="row g-3 mx-3 mt-3">
        <h1 style="margin-bottom: 10px;" id="content_header">Edit Profile</h1>

        <div class="col-md-6">
            <label for="inputUsername" class="form-label">Username</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputUsername" value="Hyunbinhubby">
        </div>
        <div class="col-md-6">
            <label for="currentPassword" class="form-label">Current Password</label>
            <input type="text" class="form-control border border-danger-subtle" id="currentPassword" value="asda1243fsef5">
        </div>


        <div class="col-md-6">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputName" value="Kim Tae Pyung">
        </div>
        <div class="col-md-6">
            <label for="newPassword" class="form-label">New Password</label>
            <input type="text" class="form-control border border-danger-subtle" id="newPassword" value="">
        </div>


        <div class="col-md-6">
            <label for="inputNationality" class="form-label">Nationality</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputNationality" value="South Korean">
        </div>
        <div class="col-md-6">
            <label for="confirmedPassword" class="form-label">Confirm Password</label>
            <input type="text" class="form-control border border-danger-subtle" id="confirmedPassword" value="">
        </div>


        <div class="col-md-2">
            <label for="inputGender" class="form-label">Gender</label>
            <select class="form-select border border-danger-subtle" id="inputGender">
                <option value="male" selected>Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="col-md-4">
            <label for="inputDOB" class="form-label">Date of Birth</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputDOB" value="25 September 1982">
        </div>
        <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputEmail" value="taepyung82@gmail.com">
        </div>


        <div class="col-md-2">
            <label for="inputDialingCode" class="form-label">IDD</label>
            <select class="form-select border border-danger-subtle" id="inputDialingCode">
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+33">+33</option>
                <option value="+49">+49</option>
                <option value="+81">+81</option>
                <option value="+86">+86</option>
                <option value="+91">+91</option>
                <option value="+55">+55</option>
                <option value="+61">+61</option>
                <option value="+82" selected>+82</option>
            </select>
        </div>
        <div class="col-md-4">
            <label for="inputPhoneNumber" class="form-label">Phone Number</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputPhoneNumber" value="1-910-2755">
        </div>
        <div class="col-md-6">

        </div>


        <div class="col-md-6">
            <label for="inputCountryCity" class="form-label">Country, City</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputCountry" value="South Korea, Seoul">
        </div>
        <div class="col-md-6">

        </div>


        <div class="col-md-6">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control border border-danger-subtle" id="inputAddress" value="288-8, Sajeong-dong">
        </div>
        <div class="col-md-6">

        </div>


        <div class="col-md-6">
            <label for="inputLanguage" class="form-label">Selected Language</label>
            <select class="form-select border border-danger-subtle" id="inputLanguage">
                <option value="english" selected>English</option>
                <option value="korean">Korean</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="chinese">Chinese</option>
                <option value="japanese">Japanese</option>
                <option value="arabic">Arabic</option>
                <option value="russian">Russian</option>
                <option value="italian">Italian</option>
            </select>
        </div>
        <div class="col-md-4">

        </div>
        <div class="col-md-2">
            <p></p>
            <button type="submit" class="btn btn-danger border border-danger-subtle p-3" style="width: 100%;">Save Changes</button>
        </div>
        
    </form>
    `
}


function consults(){

    var button_content1 = document.getElementById("edit_profile_btn")
    button_content1.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/4751/4751751.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Edit Profile</button>
    `

    var button_content2 = document.getElementById("consults_btn")
    button_content2.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351119.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-danger border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Consults</button>
    `

    var button_content3 = document.getElementById("med_hist_btn")
    button_content3.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/10299/10299454.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Medical History</button>
    `

    var button_content5 = document.getElementById("past_prescriptions_btn")
    button_content5.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/6599/6599288.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Past Prescriptions</button>
    `

    

    var change_content = document.getElementById("change_content")
    change_content.innerHTML =
    `
        <div class="row g-3 mx-3 mt-3">
            <h1 style="margin-bottom: 10px;" id="content_header">Consults</h1>
            <p> Edit the rest below </p>
        </div>
    `
}


function medical_history(){

    var button_content1 = document.getElementById("edit_profile_btn")
    button_content1.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/4751/4751751.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Edit Profile</button>
    `

    var button_content2 = document.getElementById("consults_btn")
    button_content2.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351119.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Consults</button>
    `

    var button_content3 = document.getElementById("med_hist_btn")
    button_content3.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/10299/10299454.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-danger border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Medical History</button>
    `


    var button_content5 = document.getElementById("past_prescriptions_btn")
    button_content5.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/6599/6599288.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Past Prescriptions</button>
    `


    var change_content = document.getElementById("change_content")
    change_content.innerHTML =
    `
        <div class="row g-3 mx-3 mt-3">
            <h1 style="margin-bottom: 10px;" id="content_header">Medical History</h1>
            <p> Edit the rest below </p>
        </div>
    `
}


function past_prescriptions(){

    var button_content1 = document.getElementById("edit_profile_btn")
    button_content1.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/4751/4751751.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Edit Profile</button>
    `

    var button_content2 = document.getElementById("consults_btn")
    button_content2.innerHTML = 
    `
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351119.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Consults</button>
    `

    var button_content3 = document.getElementById("med_hist_btn")
    button_content3.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/10299/10299454.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-white border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Medical History</button>
    `

    var button_content5 = document.getElementById("past_prescriptions_btn")
    button_content5.innerHTML = 
    `   
        <img src="https://cdn-icons-png.flaticon.com/512/6599/6599288.png" alt="personal_icon" class="img-fluid align-middle" style="height: 40px; width: 40px; margin-right: 10px;">
        <button type="button" class="btn btn-danger border border-0 btn-block m-0 p-2" style="width:auto; font-size:18px; text-align: left;">Past Prescriptions</button>
    `

    var change_content = document.getElementById("change_content")
    change_content.innerHTML =
    `
        <div class="row g-3 mx-3 mt-3">
            <h1 style="margin-bottom: 10px;" id="content_header">Past Prescriptions</h1>
            <p> Edit the rest below </p>
        </div>
    `
}



