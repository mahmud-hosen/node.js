const School = require('./school');

const school = new School();

// Register a listener for bell ring event
school.on('bellRing', ({ period, age}) => {
    console.log(`We need to run cause ${period} class end.`);

});

school.startPeriod();