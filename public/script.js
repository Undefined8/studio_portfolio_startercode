// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAIhrUeRq5w64TIk2Bf_uG3OanUE-mlzA",
    authDomain: "portfolio-3ac96.firebaseapp.com",
    databaseURL: "https://portfolio-3ac96.firebaseio.com",
    projectId: "portfolio-3ac96",
    storageBucket: "portfolio-3ac96.appspot.com",
    messagingSenderId: "1066703533063"
};
firebase.initializeApp(config);
var database = firebase.database();
var projects_ref = database.ref('/projects');

projects_ref.once('value', function(snapshot) {
    var projects = snapshot.val();
    console.log(projects);

    for (var i in projects) {
        var div = $("<div class='col-md-3'>");
        var title = $('<p>');
        var anchor = $("<a href=" + projects[i].site_url + ">");
        var img = $("<img class='img-fluid' src=" + projects[i].image_url +">");
        title.text(projects[i].title);
        div.append(title);
        anchor.append(img);
        div.append(anchor);
        $("#proj").append(div);
    }
});

