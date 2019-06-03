Document.prototype.exportImage || (Document.prototype.exportImage = function(filePath) {

    // app.pngExportPreferences.pngQuality = PNGQualityEnum.HIGH;
    // app.pngExportPreferences.exportResolution = 300;

    if (filePath.indexOf('.png') !== -1) {
        this.exportFile(ExportFormat.PNG_FORMAT, filePath);
    } else {
        if (filePath.indexOf('.jpg') === -1) {
            filePath = filePath + '.jpg';
        }

        this.exportFile(ExportFormat.JPG, filePath);
    }

    return filePath;
});