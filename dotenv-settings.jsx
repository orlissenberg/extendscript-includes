/**
 * Read settings from a .env file.
 */

function readSettings() {
    if (typeof settings !== 'object') { 
        settings = {
            scriptPath: (new File($.fileName)).parent.fsName,
        }; 
    }

    var dotenv = new File(scriptPath + '/.env');
    dotenv.open("r");
    while (!dotenv.eof) {
        line = dotenv.readln();
        parts = line.split('=');

        if (parts.length == 2 && parts[0].charAt(0) !== '#') {
            var key = parts[0].toLowerCase();
            var value = parts[1].replace(/"/g, '');

            var booleans = settings.booleans || [];
            if (booleans.indexOf(key) !== -1) {
                value = (value == 'true');
            }
            settings[key] = value;
        }
    }
}
