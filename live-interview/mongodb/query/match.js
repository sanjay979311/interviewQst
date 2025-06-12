db.emp_dept.aggregate([
{
    $lookup:{
        from:"emp",
        localField:"_id",
        foreignField:"departmentId",
        as:"employee"
    }
}
,{
    $unwind:"$employee"
},
{
    $match: {
      "employee.joinDate": {
        $gte: new ISODate("2023-01-01T00:00:00Z"),
        $lte: new ISODate("2025-12-31T23:59:59Z")
      }
    }
  },
{
    $group:{
        _id:"$name",
        totalEmployees:{$sum:1},
        totalDept:{$push:"$employee"}
    }
},


])
