
var bio = {
    "name" : "Greta Kavaliauskaite",
    "role":"Junior Developer",
    "contacts": {
        "mobile":"+447462122877",
        "email":"kavaliauskaite3@gmail.com",
        "github" : "gretak",
        "twitter" : "gretakava",
        "location" : "London"
    },
    "welcomeMsg": "Welcome to my CV! Take a look around and contact me if you have any questions or suggestions.",
    "skills": [
        "Communication", "Computer coding", "Teamwork", "Typing"
    ],
    "bioPic":"images/my_picture.jpg"
}


var role = bio.role;
var formattedRole=HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);

var name = bio.name;
var formattedName=HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%",mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%",email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%",github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedtwitter = HTMLtwitter.replace("%data%",twitter);
$("#topContacts").append(formattedtwitter);
$("#footerContacts").append(formattedtwitter);

var mylocation = bio.contacts.location;
var formattedlocation = HTMLlocation.replace("%data%",mylocation);
$("#topContacts").append(formattedlocation);
$("#footerContacts").append(formattedlocation);

var bioPic = bio.bioPic;
var formattedbioPic = HTMLbioPic.replace("%data%",bioPic);
$("#header").append(formattedbioPic);

var welcomeMsg = bio.welcomeMsg;
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",welcomeMsg);
$("#header").append(formattedwelcomeMsg);

if(bio.skills.length>0){

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach( function(item){
        var formattedSkill = HTMLskills.replace( "%data%", item );
        $("#header").append(formattedSkill);
    }   );

}



var education = 
        {
        "schools":{
        "recent school": 
        {
                "name" : "Ravensbourne",
                "location" : "North Greenwich, London",
                "degree" : "level 3",
                "dates": "2013 - 2015",
                "major": "Design and Media"
        },
        "previous school":
        {
                "name" : "Siauliai University",
                "location" : "Siauliai, Lithuania",
                "degree" : "Bachelor",
                "dates": "2007 - 2011",
                "major": "Business Administration and Management"
        }
    },
    "onlinecourses":{
                "title" : "Front-end developer course",
                "school" : "Udacity",
                "dates" : "2015 - present",
                "url": "http://udacity.com"
                }
    }


for (var school in education.schools) {
    console.log( school,  education.schools[school]);

    var $educationEntry = $(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name );
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree );
    var formattedDates =  HTMLschoolDates.replace("%data%", education.schools[school].dates );
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);


    $educationEntry.append( formattedName + formattedDegree);
    $educationEntry.append( formattedDates + formattedLocation + formattedMajor);

    $('#education').append($educationEntry);
}

    var $educationOnlineClasses = $(HTMLonlineClasses);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses.school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses.dates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlinecourses.url);

    $educationOnlineClasses.append(formattedOnlineTitle+formattedOnlineSchool+formattedOnlineDates+formattedOnlineUrl);
    
    $('#education').append($educationOnlineClasses);


var projects = 
        {
        "project":{
        "project 1": 
        {
                "title" : "HTML EMAILS",
                "dates": "2015 July",
                "description": "HTML responsive emails are used for advertising, marketing and promotional compains. This email is coded with html and css. Coding html email could be dificult because of the inline styles and table properties. Premailer, responsive email design tutorials and online images uploader helped me to sort this out. This email is created for all the devices and email software like outlook, gmail and others.",
                "projectPic":["images/emails.jpg"]
        },
        "project 2":
        {
                "title" : "GAME SILLY-SENTENCESS",
                "dates": "2015 May",
                "description": "This game was my final major project for Codezoners apprenticeship at Ravensbourne. Contains responsive image and d3.js object. Python was used for back-end programing.",
                "projectPic":["images/game.jpg","images/game2.jpg"]
        }

    }
}

    for (var pro in projects.project) {
    console.log( pro,  projects.project[pro]);

    var $projectEntry = $(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title );
    var formattedDate = HTMLprojectDates.replace("%data%", projects.project[pro].dates );
    var formattedDescription =  HTMLprojectDescription.replace("%data%", projects.project[pro].description );
    var formattedPictures="";
    projects.project[pro].projectPic.forEach(function(item){
    formattedPictures += HTMLprojectImage.replace("%data%", item);

    });
    
    $projectEntry.append(formattedTitle + formattedDate + formattedDescription + formattedPictures);
    
    $('#projects').append($projectEntry);

}



var work = {
    "jobs": {

        "recent job": {
            "name" : "Cohaesus",
            "title" : "Junior Developer",
            "dates": "2015 - Present",
            "location" : "London, UK",
            "description": "Supporting development team. Participating in live projects, helping with BAU and other tasks."
        },
        "second job":{
            "name" : "BUPA",
            "title" : "Content Editor",
            "dates": "January, 2014 - February 2015",
            "location" : "London, UK",
            "description": "Creating and editing web pages in Sitecore CMS. Updating and optimising Bupa's website to meet the latest requirements. Ensure PDFs are labelled correctly, have appropriate file sizes, and are tagged for accessibility. Work through accessibility and usability issues via Active Standards to ensure the Bupa websites meet appropriate standards of accreditation. Assist with User Acceptance Testing of new projects, comparing developments against requirements."
        }
    }
}





for (var job in work.jobs) {
    console.log( job, work.jobs[job]);

    var $workEntry = $(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].name );
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title );
    var formattedDates =  HTMLworkDates.replace("%data%", work.jobs[job].dates );
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $workEntry.append( formattedEmployer + formattedTitle);
    $workEntry.append( formattedDates + formattedLocation + formattedDescription);
    
    $('#workExperience').append($workEntry);

}


$("#mapDiv").append(googleMap);









