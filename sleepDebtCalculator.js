const getSleepHours = day => {

    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 5
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 4
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 4
            break;
        case 'sunday':
            return 8
            break;
        default:
            return 'Error!';
    }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed this week.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You should get some rest because you missed your goal by ' + (actualSleepHours - idealSleepHours) + ' hours this week.');
    } else {
        console.log('Error! Check your entry!');
    }
};

calculateSleepDebt();