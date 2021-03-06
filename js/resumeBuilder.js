
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
    "welcomeMessage": "Welcome to my CV! Take a look around and contact me if you have any questions or suggestions.",
    "skills": [
        "Communication", "Computer coding", "Teamwork", "Typing"
    ],
    "biopic":"images/my_picture.jpg"
};

function inName(name) {
    name=bio.name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

$('#main').append(internationalizeButton);


bio.display = function(){
    
var role = bio.role;
var formattedRole=HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);

var name = bio.name;
var formattedName=HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%",mobile);
$("#topContacts, #footerContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%",email);
$("#topContacts, #footerContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%",github);
$("#topContacts, #footerContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedtwitter = HTMLtwitter.replace("%data%",twitter);
$("#topContacts, #footerContacts").append(formattedtwitter);

var mylocation = bio.contacts.location;
var formattedlocation = HTMLlocation.replace("%data%",mylocation);
$("#topContacts,#footerContacts").append(formattedlocation);

var biopic = bio.biopic;
var formattedbiopic = HTMLbioPic.replace("%data%",biopic);
$("#header").append(formattedbiopic);

var welcomeMessage = bio.welcomeMessage;
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%",welcomeMessage);
$("#header").append(formattedwelcomeMessage);

if(bio.skills.length){

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach( function(item){
        var formattedSkill = HTMLskills.replace( "%data%", item );
        $("#header").append(formattedSkill);
    }   );

}
}
bio.display();


var education = 
        {
        "schools":[{
                "name" : "Ravensbourne",
                "location" : "North Greenwich, London",
                "degree" : "level 3",
                "dates": "2013 - 2015",
                "major": "Design and Media"
        },
        {
                "name" : "Siauliai University",
                "location" : "Siauliai, Lithuania",
                "degree" : "Bachelor",
                "dates": "2007 - 2011",
                "major": "Business Administration and Management"
        }],
    "onlinecourses":{
                "title" : "Front-end developer course",
                "school" : "Udacity",
                "dates" : "2015 - present",
                "url": "http://udacity.com"
                }
    };

education.display = function(){

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
}
education.display();

var projects = 
        {
        "project":[{
               "title" : "HTML EMAILS",
                "dates": "2015 July",
                "description": "HTML responsive emails are used for advertising, marketing and promotional compains. This email is coded with html and css. Coding html email could be dificult because of the inline styles and table properties. Premailer, responsive email design tutorials and online images uploader helped me to sort this out. This email is created for all the devices and email software like outlook, gmail and others.",
                "images":["images/emails.jpg"]
        },
        {
                "title" : "GAME SILLY-SENTENCESS",
                "dates": "2015 May",
                "description": "This game was my final major project for Codezoners apprenticeship at Ravensbourne. Contains responsive image and d3.js object. Python was used for back-end programing.",
                "images":["images/game.jpg","images/game2.jpg"]
        }]

};
projects.display = function(){

    for (var pro in projects.project) {
    console.log( pro,  projects.project[pro]);

    var $projectEntry = $(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title );
    var formattedDate = HTMLprojectDates.replace("%data%", projects.project[pro].dates );
    var formattedDescription =  HTMLprojectDescription.replace("%data%", projects.project[pro].description );
    var formattedPictures="";
    projects.project[pro].images.forEach(function(item){
    formattedPictures += HTMLprojectImage.replace("%data%", item);

    });
    
    $projectEntry.append(formattedTitle + formattedDate + formattedDescription + formattedPictures);
    
    $('#projects').append($projectEntry);
}
}
 projects.display();



var work = {
    "jobs": [{
            "name" : "Cohaesus",
            "title" : "Junior Developer",
            "dates": "2015 - Present",
            "location" : "London, UK",
            "description": "Supporting development team. Participating in live projects, helping with BAU and other tasks."
        },
        {
            "name" : "BUPA",
            "title" : "Content Editor",
            "dates": "January, 2014 - February 2015",
            "location" : "London, UK",
            "description": "Creating and editing web pages in Sitecore CMS. Updating and optimising Bupa's website to meet the latest requirements. Ensure PDFs are labelled correctly, have appropriate file sizes, and are tagged for accessibility. Work through accessibility and usability issues via Active Standards to ensure the Bupa websites meet appropriate standards of accreditation. Assist with User Acceptance Testing of new projects, comparing developments against requirements."
        }]
};




work.display = function(){

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
}
 work.display();

 function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].loction;
        locationArray.push(newLocation);
    }
    return locationArray;
 }

 console.log(locationizer(work));


$("#mapDiv").append(googleMap);











