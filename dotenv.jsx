/**
 * Read settings from a .env file.
 */

if (typeof DotEnv !== 'object') {
    DotEnv = {
        settings: {}
    };
}

DotEnv.readSettings = function(filePath, settings) {
    if (filePath === undefined) {
        filePath = (new File($.fileName)).parent.fsName + '/.env';
    }

    var dotenv = new File(filePath);
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

    DotEnv.settings = settings;
    return settings;
}

DotEnv.setTargetFolder = function(askForFolder, defaultFolder) {
    DotEnv.settings.target_folder = false;

    if (askForFolder) {
        var folder = Folder.selectDialog('Select a folder');
        if (folder != null && folder instanceof Folder) {
            DotEnv.settings.target_folder = folder.fsName + "/"
            return DotEnv.settings.target_folder;
        }
    }

    if (defaultFolder) {
        DotEnv.settings.target_folder = defaultFolder;
    }

    if (app.documents.length > 0) {
        DotEnv.settings.target_folder = app.activeDocument.filePath.fsName + '/';
    }

    return DotEnv.settings.target_folder;
}