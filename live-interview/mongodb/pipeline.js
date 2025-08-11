db.emp_dept.aggregate([
  {
    $lookup: {
      from: "emp",
      let: { deptId: "$_id" },
      pipeline: [
        { $match: { $expr: { $eq: ["$departmentId", "$$deptId"] } } },
        { $sort: { salary: -1 } },
        { $skip: 1 },
        { $limit: 3 },
        { $project: { name: 1, age: 1, departmentId: 1, salary: 1 } }
      ],
      as: "topEmployees"
    }
  }
])


// ------------------------------------or ------------------------------------------------

db.emp_dept.aggregate([
{
    $lookup:{
        from:"emp",
        localField:"_id",
        foreignField:"departmentId",
        as:"empDetails"
    }
},
{$unwind:"$empDetails"},
{
    $project:{
        name:1,
        personeName:"$empDetails.name",
         age:"$empDetails.name",
         departmentId:"$empDetails.departmentId",
          salary:"$empDetails.salary",
    }
},
{
    $sort:{
        salary:-1
    }
},

{
    $limit:3
},
{
    $skip:1
}

])