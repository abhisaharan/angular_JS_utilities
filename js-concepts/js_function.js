<!--Variables declared within a JavaScript function, become LOCAL to the function.-->
<!--Local variables can only be accessed from within the function.-->

<!--A method is a function stored as a property.-->
var person = {
firstName: "John",
lastName : "Doe",
id       : 5566,
fullName : function() {
return this.firstName + " " + this.lastName; //In the example above, this is the person object that "owns" the fullName function.
}
};
console.log("person".length);
