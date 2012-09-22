for(var i = gBrowser.mCurrentTab._tPos - 1; i > -1; i--){
    try{
        gBrowser.removeTab(gBrowser.tabContainer.childNodes[i]);
    }catch(e){
        Components.utils.reportError(e);
    }
    
}