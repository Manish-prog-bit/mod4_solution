(function() {
    var names = ["Yaakov", "Jason", "Jackson", "Jack", "Arnold", "Ronaldo", "Larry", "Paul", "jasmine", "jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();