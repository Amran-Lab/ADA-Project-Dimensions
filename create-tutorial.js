//data classes
class Tutorial {
    constructor(id, title, description, coverImage) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.coverImage = coverImage
        this.steps = []
    }
}

class Step {
    constructor(id, title, media, caption) {
        this.id = id,
        this.title = title,
        this.media = media,
        this.caption = caption
    }
}

//generated unique id for class objects
function generateId(type) {
    let id = Math.random().toString(36).substr(2, 9);

    //need to check is id already in database? if no then:
    if (type == 'tutorial') {return 'TUT' + id}
    else if (type == 'step') {return 'STEP' + id}
    else {console.log('ERROR: Invalid type')}
}

function beginTutorialCreation() {
    document.querySelector('#create-tutorial-button').classList.add('hidden');
    document.querySelector('#create-tutorial-ui-container').classList.remove('hidden');

    //instantiate classes and set IDs
    let tutorial = new Tutorial;
    tutorial.id = generateId('tutorial');

    document.querySelector('#submit-step').addEventListener('click', function() {
        let step = new Step;
        step.id = generateId('step');

        let currentStepData = [];

        let inputTitle = document.querySelector('#input-title');
        let inputMedia = document.querySelector('#input-media');
        let inputCaption = document.querySelector('#input-caption');

        //input validation, cannot continue without populating fields
        if (inputTitle.value == '') {alert('Input a title for the step')}
        else {currentStepData.push(inputTitle.value)}

        /*
        if (inputMedia.files.length == 0) {alert('upload a file for the step')}
        else {currentStepData.push(inputMedia.files[0])}
        */
        
        //placeholder
        currentStepData.push('media placeholder')

        if (inputCaption.value == '') {alert('Input a caption for the step')}
        else {currentStepData.push(inputCaption.value)}

        //assign input to new step object of Step class
        if (currentStepData.length == 3) {
            step.title = currentStepData[0];
            step.media = currentStepData[1];
            step.caption = currentStepData[2];
            tutorial.steps.push(step);
        }

        console.log('tutorial:', tutorial);

        /*submit tutorial event listener {
            input tutorial title, description and cover image
            set inputs to new tutorial object of Tutorial class 
        }
        */
    });



    document.querySelector('#new-step').addEventListener('click', function() {
        //take data from steps saved previously in tutorial.steps
        //create HTML elements to display previous steps
        //populate freshly generated HTML elements with data from previous steps
    });
}

window.addEventListener('load', function() {
    document.querySelector('#create-tutorial-button').addEventListener('click', beginTutorialCreation)
});