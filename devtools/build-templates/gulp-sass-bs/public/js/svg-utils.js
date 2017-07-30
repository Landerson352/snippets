window.SVGUtils = (function() {
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle){

      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);

      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      var d = [
          "M", start.x, start.y,
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");

      return d;
  }

  function updateProgressRing(element, amount, stroke) {
    var track = element.querySelector('.progress-ring-track');
    var fill = element.querySelector('.progress-ring-fill');
    track.setAttribute('stroke-width', stroke);
    fill.setAttribute('stroke-width', stroke);
    track.setAttribute('r', 50 - stroke/2);
    fill.setAttribute("d", describeArc(0, 0, 50 - stroke / 2, 0, 360 * amount));
  }

  return {
    updateProgressRing: updateProgressRing
  };
})();
