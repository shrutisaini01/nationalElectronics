function isPlaceholder(url){
    if(!url) return true;
    return /^https?:\/\//i.test(url);
}

module.exports={isPlaceholder};