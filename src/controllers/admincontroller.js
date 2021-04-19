const studentfetch = require('../model/studentmodel');
const companyfetch = require('../model/companymodel');
var totalstud;
exports.renderADMINPage = function(req,res){
    if(req.session.user!=null){
        console.log(req.session.user);
        studentfetch.selectData(function(err,result){
            companyfetch.selectData(function(err, resultCompany){
             const total = resultCompany.length + result.length;
             res.render('ADMIN',{total:total, student:result.length, company:resultCompany.length});
            });       
        });   
    }
    else{
        res.redirect('/');
    }
    //var totalstud;
        //student
   
}