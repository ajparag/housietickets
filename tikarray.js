const maximumDrawableNumber = 90;
const minimumDrawableNumber = 1;
const rangeLength = 9;
var ticketArray = [];
var ticketArray1 = [];
var colarray = [];
var availableNumbers = [];


function getOccurrence(array, value) {
    var cnt = 0;
    array.forEach((v) => (v === value && cnt++));
    return cnt;
}

function randomiser() {
    availableNumbers = [];
    ticketArray = [];
    ticketArray1 = [];
    colarray = [];
    for (let i = 1; i <= maximumDrawableNumber; i++) {
        availableNumbers.push(i);
    }
    var rangeStart = 0;
    for (var i = 1; i < 90; i += 10) {
        rangeStart = i;
        if (rangeStart > maximumDrawableNumber || rangeStart < minimumDrawableNumber) { console.log('Invalid.'); return 0; }
        const range = availableNumbers.slice(rangeStart - 1, rangeStart + rangeLength - 1);
        const rangeSet = new Set(range);
        if (rangeSet.has(0) && rangeSet.size === 1) {
            console.log('No more numbers left')
            return 0;
        } else {
            rangeSet.delete(0);
            const drawableNumbers = [...rangeSet.values()];
            const drawnNumber = drawableNumbers[Math.floor(Math.random() * drawableNumbers.length)];
            availableNumbers[drawnNumber - 1] = 0;
            ticketArray.push(drawnNumber);
        }

    }

    for (var j = 0; j < 2; j++) {
        const range2 = availableNumbers.slice(0, 28);
        const rangeSet2 = new Set(range2);

        if (rangeSet2.has(0) && rangeSet2.size === 1) {

            console.log('No more numbers...')

            return 0;

        } else {

            rangeSet2.delete(0);

            const drawableNumbers = [...rangeSet2.values()];

            const drawnNumber = drawableNumbers[Math.floor(Math.random() * drawableNumbers.length)];

            availableNumbers[drawnNumber - 1] = 0;

            ticketArray.push(drawnNumber);
        }
    }
    const range3 = availableNumbers.slice(29, 48);
    const rangeSet3 = new Set(range3);

    if (rangeSet3.has(0) && rangeSet3.size === 1) {

        console.log('No more numbers...')

        return 0;

    } else {

        rangeSet3.delete(0);

        const drawableNumbers = [...rangeSet3.values()];

        const drawnNumber = drawableNumbers[Math.floor(Math.random() * drawableNumbers.length)];

        availableNumbers[drawnNumber - 1] = 0;

        ticketArray.push(drawnNumber);
    }
    const range4 = availableNumbers.slice(49, 58);
    const rangeSet4 = new Set(range4);

    if (rangeSet4.has(0) && rangeSet4.size === 1) {

        console.log('No more numbers...')

        return 0;

    } else {

        rangeSet4.delete(0);

        const drawableNumbers = [...rangeSet4.values()];

        const drawnNumber = drawableNumbers[Math.floor(Math.random() * drawableNumbers.length)];

        availableNumbers[drawnNumber - 1] = 0;

        ticketArray.push(drawnNumber);
    }
    for (var j = 0; j < 2; j++) {
        const range5 = availableNumbers.slice(59, 89);
        const rangeSet5 = new Set(range5);

        if (rangeSet5.has(0) && rangeSet5.size === 1) {

            console.log('No more numbers...')

            return 0;

        } else {

            rangeSet5.delete(0);

            const drawableNumbers = [...rangeSet5.values()];

            const drawnNumber = drawableNumbers[Math.floor(Math.random() * drawableNumbers.length)];

            availableNumbers[drawnNumber - 1] = 0;

            ticketArray.push(drawnNumber);
        }
    }

    var chk = 0;
    for (i = 0; i < 15; i++) {
        chk = Math.floor(ticketArray[i] / 10);
        colarray.push(chk);
    }
    if (chk == 9) {
        chk = 8;
    }
    if (getOccurrence(colarray, 0) > 3 || getOccurrence(colarray, 1) > 3 || getOccurrence(colarray, 2) > 3 || getOccurrence(colarray, 3) > 3 || getOccurrence(colarray, 4) > 3 || getOccurrence(colarray, 5) > 3 || getOccurrence(colarray, 6) > 3 || getOccurrence(colarray, 7) > 3 || getOccurrence(colarray, 8) > 3) {
        return randomiser();
    }

    for (var j = 0; j < 15; j++) {
        for (var k = 1; k <= (15 - j); k++) {
            if (ticketArray[j] > ticketArray[j + k]) {
                var temp = ticketArray[j];
                ticketArray[j] = ticketArray[j + k];
                ticketArray[j + k] = temp;
            }
        }
    }
    ticketArray1 = ticketArray;

    var ticket1 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var singlenos = ticketArray1;
    var y = 0;
    for (var h = 0; h < 9; h++) {
        if (getOccurrence(colarray, h) == 3) {
            var threenos = ticketArray1.filter(threeno => Math.floor(threeno / 10) == h);
            ticket1[0][h] = threenos[0];
            ticket1[1][h] = threenos[1];
            ticket1[2][h] = threenos[2];
            for (i = 0; i < 3; i++) {
                var x = threenos[i];
                var index1 = singlenos.indexOf(x);
                singlenos[index1] = 0;
            }
        } else if (getOccurrence(colarray, h) == 2) {
            var twonos = ticketArray1.filter(twono => Math.floor(twono / 10) == h);
            for (i = 0; i < 2; i++) {
                var x = twonos[i];
                var index2 = singlenos.indexOf(x);
                singlenos[index2] = 0;
            }
            var remainder1 = twonos[0] % 10;
            var remainder2 = twonos[1] % 10;
            if (remainder1 <= 5 && remainder2 <= 6 && getOccurrence(ticket1[0], 0) >= 5 && ticket1[0][h] == 0 && ticket1[1][h] == 0) {
                ticket1[0][h] = twonos[0];
                ticket1[1][h] = twonos[1];
            } else if (remainder1 <= 5 && remainder2 <= 9 && getOccurrence(ticket1[0], 0) >= 5 && ticket1[0][h] == 0 && ticket1[1][h] == 0) {
                ticket1[0][h] = twonos[0];
                ticket1[2][h] = twonos[1];
            } else if (getOccurrence(ticket1[1], 0) >= 5 && ticket1[1][h] == 0 && ticket1[2][h] == 0) {
                ticket1[1][h] = twonos[0];
                ticket1[2][h] = twonos[1];
            }
        }
    }

    for (var i = 0; i < 15; i++) {
        var column = Math.floor(singlenos[i] / 10);
        if (column == 9) {
            column = 8;
        }
        remainder = singlenos[i] % 10;
        if (remainder <= 3 && getOccurrence(ticket1[0], 0) >= 5 && ticket1[0][column] == 0) {
            ticket1[0][column] = singlenos[i];
        } else if (remainder <= 6 && getOccurrence(ticket1[1], 0) >= 5 && ticket1[1][column] == 0) {
            ticket1[1][column] = singlenos[i];
        } else if (getOccurrence(ticket1[2], 0) >= 5 && ticket1[2][column] == 0) {
            ticket1[2][column] = singlenos[i];
        } else if (getOccurrence(ticket1[0], 0) >= 5 && ticket1[0][column] == 0) {
            ticket1[0][column] = singlenos[i];
        } else if (getOccurrence(ticket1[1], 0) >= 5 && ticket1[1][column] == 0) {
            ticket1[1][column] = singlenos[i];
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 9; j++) {
            if (ticket1[i][j] != 0) {
                y = y + 1;
            }
        }
    }
    if (y < 15) {
        return randomiser();
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 7; j++) {
            if (ticket1[i][j] != 0 && ticket1[i][j + 1] != 0 && ticket1[i][j + 2] != 0) {
                return randomiser();
            }
        }

    }

    return ticket1;
}

function getTickets() {
    var tickets = [];
    var multickets = randomiser();
    tickets.push(multickets);
    return tickets;
}