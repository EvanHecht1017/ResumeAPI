const express = require('express');
const app = express()
const PORT = 8080;

app.use(  express.json())
app.listen(
    PORT,
    () => console.log('Local server has started')
)
app.get('/welcome', (req, res) => {
    res.status(200).send({
        welcome: 'Welcome to Evans informational API',
        education: `To hear about Evans education please do a get request to http//localhost:${PORT}/education`,
        workexp: `To hear about Evans work experience please do a get request to http//localhost:${PORT}/workexp`,
        game: `Post a number in place of guess on the day of Evans birthday to http//localhost:${PORT}/birthday/guess `,
        skills: `To hear about Evans technical and soft skills please do a get request to http//localhost:${PORT}/skills`,
    })
})
app.get('/education', (req,res) => {
    res.status(200).send({
        HighSchool: 'Went to Springboro High School',
        CCP: 'On top of being on the soccer team, being an avid skier, and being an active supporter of student athletics, Evan completed 60 credits of college courses at Miami University during HS',
        College: 'Evan is currently in his third year of his Bachelor of Computer Engineering at the University of Cincinnati',
        PostGrad: 'Evan strives to be a life-long learner'
    })
});
app.get('/workexp', (req,res) => {
    res.status(200).send({
        HighSchool: 'While in High-school, Evan consistently held down multiple jobs. Former employee of Dorothy Lane Market, Cleaner with Dean, Skyline Chili, and Wright Patt AFB Research',
        Current: 'In college, Evan has worked to pay for his education. Is currently a TA for ENED1100.',
        Internships: 'Evan had an amazing opportunity to join and provide to a high-scale/high-growth startup. Worked for a year at Physna, and was able to contribute positively to an immensely talented team',
        Future: 'Evan wants to be a future problem solver to make the world a better place. Evan wants to contribute and solve world issues using technology.'
    })
});
app.get('/skills', (req,res) => {
    res.status(200).send({
        Technical: 'Evan has an immense knowledge of programming concepts. Is profecient in nodejs, javascript, java, python, and Labview. Has intermediate knowledge in C++,Matlab, Go, Docker, Html, and CSS. Evan is currently working on building his front-end and backend skillset by learning APIS, REACT, MONGODB, and various NPM package applications.'
    })
});
app.get('/birthday', (req,res) => {
    res.status(200).send({
        month: 'November',
        day: 'sixteenth',
        year: '2000'
    })
});

app.post('/birthday/:id', (req, res) => {
    const {id} = req.params;
    if (id==16){
        res.send({
            Correct: 'You have guessed the correct date'
        })
    }
    if (id!=16) {
        res.status(418).send({message: 'Thats not the correct date'})
    }
});
