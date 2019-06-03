Page.prototype.copyItemsToDocument || (Page.prototype.copyItemsToDocument =
    function(document) {
        for (i = this.allPageItems.length - 1; i >= 0; i--) {
            this.allPageItems[i].duplicate(document.activeLayer)
        }
    }
);