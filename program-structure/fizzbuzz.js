
var startTime =new Date().getTime()
for (var i = 1; i < 100; i++) {
    var output = '';
    if (i % 3 == 0) {
        output += 'FIZZ';
    }
    if (i % 5 == 0) {
        output += 'BUZZ';
    }
    console.log(output || i);
}

var endTime = console.log((new Date).getTime() - startTime)
