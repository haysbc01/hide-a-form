angular.module("hideForm", []);

angular
  .module("hideForm")
  .controller("master", masterCtrl);

function masterCtrl (){
  var form = this;

  form.name = "Brian";
  form.bio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  form.books = "The Odyssey, The Illiad, Native Sun";
  form.js = "bootstrap, JQuery, and of cours Angular";


}
