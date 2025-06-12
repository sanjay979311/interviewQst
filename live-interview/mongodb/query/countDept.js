//db.getCollection("emp_dept").find({})


db.emp_dept.aggregate([
   {
       $lookup:{
           from:"emp",
           localField:"_id",
           foreignField:"departmentId",
           as:"employee"
       }
   },

      {
          $project:{
               name:"$name",
               empName:"$employee.name",
               employeeList:{$size:"$employee"}
          }
      }
   

])
