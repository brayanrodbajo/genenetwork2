// Generated by CoffeeScript 1.6.1
(function() {
  var collection_hover;

  console.log("before get_traits_from_collection");

  collection_hover = function() {
    var this_collection_url;
    console.log("Hovering over:", $(this));
    this_collection_url = $(this).find('.collection_name').prop("href");
    this_collection_url += "&json";
    return console.log("this_collection_url", this_collection_url);
  };

  $(function() {
    console.log("inside get_traits_from_collection");
    return $(document).on("mouseover", ".collection_line", collection_hover);
  });

}).call(this);