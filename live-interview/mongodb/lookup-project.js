db.orders.aggregate([
{
    $lookup:{
        from:"inventory",
        localField:"item",
        foreignField:"sku",
        as:"itemDetails"
    }
},
{
    $project:{
        item:1,
        price:1,
        
        sku:{$arrayElemAt:["$itemDetails.sku",0]},
        description: {$arrayElemAt:["$itemDetails.description",0]}
        
    }
}
])
