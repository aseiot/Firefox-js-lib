var l= gBrowser.browsers.length;
for(var i = gBrowser.mCurrentTab._tPos + 1; i < l; i++){
    try{
        gBrowser.removeTab(gBrowser.tabContainer.childNodes[i]);
        i--;
    }catch(e){
        Components.utils.reportError(e);
    }
    
}