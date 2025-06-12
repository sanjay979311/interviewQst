//db.emp_dept.aggregate([
//{
//    $lookup:{
//        from:"emp",
//        localField:"_id",
//        foreignField:"departmentId",
//        as:"empDetail"
//    }
//},
//
//
//])

db.emp_dept.aggregate([
  {
    $lookup: {
      from: "emp",
      localField: "_id",
      foreignField: "departmentId",
      as: "empDetail"
    }
  },
  {
    $unwind: "$empDetail" // Flatten empDetail array
  },
  {
    $group: {
      _id: "$_id", // department ID
      departmentName: { $first: "$name" }, // pick department name
      totalEmployees: { $sum: 1 },
      totalSalary: { $sum: "$empDetail.salary" },
      avgSalary: { $avg: "$empDetail.salary" }
    }
  }
])
