const xlsx = require("xlsx");
//workbook
var db = xlsx.readFile('kairos_placement1.xlsx', {cellDates:true});
//trainee worksheet
var ws = db.Sheets['Trainee Database'];
//trainee sheet data to JSON
var data = xlsx.utils.sheet_to_json(ws); 
//employee worksheet
var emp_ws = db.Sheets['Employee Access'];
//emp access level data to JSON
var emp_data = xlsx.utils.sheet_to_json(emp_ws); 

//columns to be read for 0-level access 
const columnsToRead = ['Unique ID Number', 'Name', 'Training Centre', 'DOB', 'Education', 'Client Order', 'Joining Date'];

function verify_access(uuid){
    var level = -1;
    emp_data.forEach((row)=>{
        if(row['Email ID']==uuid){
            level = row['Access Level'];
            return;
        }
    })
    return level;
}
//create new employee with access level
function new_emp(record){
    emp_data.push(record);
}


/**********************************************/
function new_entry(record){
    data.push(record);
}
//Update user profile
function update_user_profile(uuid, new_values){
    let flag=false;
    data.forEach((record)=>{
        if(record['Unique ID Number']==uuid){
            flag=true;
            for(let col in record){
                record[col] = new_values[col];
            }
            return record;
        }})
    if(!flag)
    new_entry(new_values);
};


//display
function display_all(level){
    var obj=[];
    if(level==1){
        return data;
    }
    else if(level==0){
        
        data.forEach(row => {
            profile = {};
            columnsToRead.forEach(column => {
                profile[column] = row[column];  
            });  
            obj.push(profile);
        });
    }
    return obj;
}
function display_one(uuid,level){
    let obj={};
    if(level==1){
        data.forEach(row => {
            if(row['Unique ID Number']==uuid){
                    obj = row;  
                return; 
            }
        });
        return obj;
    }
    else if(level==0){
        data.forEach(row => {
            if(row['Unique ID Number']==uuid){
                columnsToRead.forEach(column => {
                    obj[column] = row[column];  
                });  
                return; 
            }
        });
    }
    return obj;
}

//save all changes
function save_changes(){
ws = xlsx.utils.json_to_sheet(data);
emp_ws = xlsx.utils.json_to_sheet(emp_data);
db = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(db, ws, "Trainee Database");
xlsx.utils.book_append_sheet(db, emp_ws, "Employee Access");
xlsx.writeFile(db, "kairos_placement1.xlsx");
}

module.exports = {new_emp, update_user_profile, display_all, save_changes,display_one,verify_access};