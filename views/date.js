exports.getDate = function() {
    let today = new Date();
    let day = "";
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("eng-US", options); 
}