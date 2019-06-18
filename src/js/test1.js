require(["jquery", "lodash", "per"], function($, _, per){
    var arr = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(arr)

    
    var persons = per.list();
    console.log(persons)
    persons.forEach((item, index) => {
        $('body').append("<div>"+ item.id + ".&nbsp;&nbsp;&nbsp;<span>" 
        + item.name + "</span></div>");
    });
});