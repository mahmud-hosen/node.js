const EventEmitter = require('events');

class School extends EventEmitter{
    
    startPeriod(){
    console.log('Class Start');
        // Rise event when bell rings  
        setTimeout(() => {
            this.emit('bellRing',{period: 'first', age: 25});
        }, 5000)
    }
}

module.exports = School;
