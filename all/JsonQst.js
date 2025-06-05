// output like this
/*{
    "Math K": [
        {
            "Grade": "Math K",
            "Domain": "Counting & Cardinality"
        },
        {
            "Grade": "Math K",
            "Domain": "Geometry"
        }
    ],
    "Math 1": [
        {
            "Grade": "Math 1",
            "Domain": "Counting & Cardinality"
        },
        {
            "Grade": "Math 1",
            "Domain": "Orders of Operation"
        }
    ],
    "Math 2": [
        {
            "Grade": "Math 2",
            "Domain": "Geometry"
        }
    ]
}
*/

var standardsList = [
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Geometry"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Orders of Operation"},
    {"Grade": "Math 2", "Domain": "Geometry"}
];

var standardsObject = {};

standardsList.forEach(function(item) {
    // Use the "Grade" property as the key
    var key = item.Grade;

    // Create an array for the key if it doesn't exist in the object
    if (!standardsObject[key]) {
        standardsObject[key] = [];
    }

    // Push the current item into the array for the key
    standardsObject[key].push(item);
});

console.log( JSON.stringify( standardsObject, null, 4 ) )
// console.log(standardsObject);
