Document.prototype.copyMetadataToExport || (Document.prototype.copyMetadataToExport = function(jpegFilePath) {
    // Only support jpeg for now
    if (jpegFilePath.indexOf('.jpg') === -1) {
        return false;
    }

    // load the XMP library, requires Bridge CC to be installed
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }

    var xmpFile = new XMPFile(jpegFilePath, XMPConst.FILE_JPEG, XMPConst.OPEN_FOR_UPDATE);
    var xmp = xmpFile.getXMP();
    
    xmp.setProperty(XMPConst.NS_DC, "author", this.metadataPreferences.author);
    xmp.setProperty(XMPConst.NS_DC, "rights", this.metadataPreferences.copyrightNotice);
    xmp.setProperty(XMPConst.NS_DC, "description", this.metadataPreferences.description);
    
    xmp.setProperty(XMPConst.NS_DC, 'subject', null, XMPConst.PROP_IS_ARRAY);
    for (var s = 0; s < this.metadataPreferences.keywords.length; s++) {
        xmp.appendArrayItem(XMPConst.NS_DC, "subject", this.metadataPreferences.keywords[s]);
    }
    xmpFile.putXMP(xmp);
    xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);

    return true;
})