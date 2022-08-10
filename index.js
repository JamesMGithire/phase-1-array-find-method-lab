// code your solution here
function superbowlWin(array) {
    // Criteria of object to be returned
    const findObj = (array) => array.result === "W"
    const found = array.find(findObj); // returns object
    return(typeof(found) === 'object' ? found.year : undefined);
}