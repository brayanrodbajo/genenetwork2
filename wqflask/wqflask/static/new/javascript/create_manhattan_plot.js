// Generated by CoffeeScript 1.7.1
var create_manhattan_plot;

create_manhattan_plot = function() {
  var chrrect, data, h, halfh, margin, mychart, totalh, totalw, w;
  h = 500;
  w = 1200;
  margin = {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  halfh = h + margin.top + margin.bottom;
  totalh = halfh * 2;
  totalw = w + margin.left + margin.right;
  mychart = lodchart().lodvarname("lod.hk").height(h).width(w).margin(margin);
  data = js_data.json_data;
  d3.select("div#topchart").datum(data).call(mychart);
  chrrect = mychart.chrSelect();
  chrrect.on("mouseover", function() {
    return d3.select(this).attr("fill", "#E9CFEC");
  }).on("mouseout", function(d, i) {
    return d3.select(this).attr("fill", function() {
      if (i % 2) {
        return "#F1F1F9";
      }
      return "#FBFBFF";
    });
  });
  return mychart.markerSelect().on("click", function(d) {
    var r;
    r = d3.select(this).attr("r");
    return d3.select(this).transition().duration(500).attr("r", r * 3).transition().duration(500).attr("r", r);
  });
};

create_manhattan_plot();

$("#export").click((function(_this) {
  return function() {
    var filename, form, svg, svg_xml;
    svg = $("#topchart").find("svg")[0];
    svg_xml = (new XMLSerializer).serializeToString(svg);
    console.log("svg_xml:", svg_xml);
    filename = "manhattan_plot_" + js_data.this_trait;
    form = $("#exportform");
    form.find("#data").val(svg_xml);
    form.find("#filename").val(filename);
    return form.submit();
  };
})(this));

$("#export_pdf").click((function(_this) {
  return function() {
    var filename, form, svg, svg_xml;
    svg = $("#topchart").find("svg")[0];
    svg_xml = (new XMLSerializer).serializeToString(svg);
    console.log("svg_xml:", svg_xml);
    filename = "manhattan_plot_" + js_data.this_trait;
    form = $("#exportpdfform");
    form.find("#data").val(svg_xml);
    form.find("#filename").val(filename);
    return form.submit();
  };
})(this));
