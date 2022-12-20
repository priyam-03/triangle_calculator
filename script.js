var count = 0;
document.getElementById("alert").style.display = "none";
function picture() {
    if (document.getElementById("s1").value != '') {
        // side.push(document.getElementById("s1").value);
        document.getElementById("sidea").style.stroke = "black";
        document.getElementById("sidea").style.opacity = "1";
        document.getElementById("a").style.opacity = "1";
    }
    if (document.getElementById("s1").value == '') {
        document.getElementById("sidea").style.stroke = "rgb(255,0,0)";
        document.getElementById("sidea").style.opacity = "0.5";
        document.getElementById("a").style.opacity = "0.5";
    }
    if (document.getElementById("s2").value != '') {
        document.getElementById("sideb").style.stroke = "black";
        document.getElementById("sideb").style.opacity = "1";
        document.getElementById("b").style.opacity = "1";
    }
    if (document.getElementById("s2").value == '') {
        document.getElementById("sideb").style.stroke = "rgb(255,0,0)";
        document.getElementById("sideb").style.opacity = "0.5";
        document.getElementById("b").style.opacity = "0.5";
    }
    if (document.getElementById("s3").value != '') {
        document.getElementById("sidec").style.stroke = "black";
        document.getElementById("sidec").style.opacity = "1";
        document.getElementById("c").style.opacity = "1";

    }
    if (document.getElementById("s3").value == '') {
        document.getElementById("sidec").style.stroke = "rgb(255,0,0)";
        document.getElementById("sidec").style.opacity = "0.5";
        document.getElementById("c").style.opacity = "0.5";
    }
    if (document.getElementById("a1").value != '') {
        // side.push(document.getElementById("s1").value);
        document.getElementById("anglea").style.stroke = "rgba(24, 7, 1, 0.767)";
        document.getElementById("A").style.opacity = "1";
        document.getElementById("anglea").style.opacity = "0.82";
    }
    if (document.getElementById("a1").value == '') {
        document.getElementById("anglea").style.stroke = "rgb(37, 125, 207)";
        document.getElementById("A").style.opacity = "0.5";
        document.getElementById("anglea").style.opacity = "0.5";
    }
    if (document.getElementById("a2").value != '') {
        document.getElementById("angleb").style.stroke = "rgba(24, 7, 1, 0.767)";
        document.getElementById("B").style.opacity = "1";
        document.getElementById("angleb").style.opacity = "0.82";
    }
    if (document.getElementById("a2").value == '') {
        document.getElementById("angleb").style.stroke = "rgb(37, 125, 207)";
        document.getElementById("B").style.opacity = "0.5";
        document.getElementById("angleb").style.opacity = "0.5";
    }
    if (document.getElementById("a3").value != '') {
        document.getElementById("anglec").style.stroke = "rgba(24, 7, 1, 0.767)";
        document.getElementById("C").style.opacity = "1";
        document.getElementById("anglec").style.opacity = "0.82";
    }
    if (document.getElementById("a3").value == '') {
        document.getElementById("anglec").style.stroke = "rgb(37, 125, 207)";
        document.getElementById("C").style.opacity = "0.5";
        document.getElementById("anglec").style.opacity = "0.5";
    }
}
function calculate() {

    // var canvas = document.getElementsByTagName("canvas");
    var canvas = document.getElementById("canvas");
    var y = canvas.getContext('2d');
    var canvas1 = document.getElementById("canvas1");
    var y1 = canvas1.getContext('2d');


    var side = [];
    var angle = [];
    var count1 = 0;
    var count2 = 0;

    if (document.getElementById("s1").value != '') {
        side.push(document.getElementById("s1").value);

    }
    if (document.getElementById("s2").value != '') {
        side.push(document.getElementById("s2").value);
    }
    if (document.getElementById("s3").value != '') {
        side.push(document.getElementById("s3").value);
    }
    if (document.getElementById("a1").value != '') {
        angle.push(document.getElementById("a1").value);
    }
    if (document.getElementById("a2").value != '') {
        angle.push(document.getElementById("a2").value);
    }
    if (document.getElementById("a3").value != '') {
        angle.push(document.getElementById("a3").value);
    }
    var a1 = document.getElementById("s1").value;
    var b = document.getElementById("s2").value;
    var c = document.getElementById("s3").value;
    var A = document.getElementById("a1").value;
    var B = document.getElementById("a2").value;
    var C = document.getElementById("a3").value;
    var s = [];
    var a = [];
    s[0] = a1;
    s[1] = b;
    s[2] = c;
    a[0] = A;
    a[1] = B;
    a[2] = C;


    if ((side.length + angle.length) != 3) {
        swal("Please make absolutely three inputs");
    }
    else {
        count++;
    }
    if (side.length == 3 && angle.length == 0) {

        if (parseFloat(side[0]) + parseFloat(side[1]) > parseFloat(side[2]) && parseFloat(side[1]) + parseFloat(side[2]) > parseFloat(side[0]) && parseFloat(side[0]) + parseFloat(side[2]) > parseFloat(side[1]) && parseFloat(side[0]) > 0 && parseFloat(side[1]) > 0 && parseFloat(side[2]) > 0) {
            document.getElementById("a1").value = ((Math.acos((-side[0] * side[0] + side[1] * side[1] + side[2] * side[2]) / (2 * side[2] * side[1]))) * 180 / Math.PI).toFixed(2);
            document.getElementById("a2").value = ((Math.acos((side[0] * side[0] - side[1] * side[1] + side[2] * side[2]) / (2 * side[0] * side[2]))) * 180 / Math.PI).toFixed(2);
            document.getElementById("a3").value = ((Math.acos((side[0] * side[0] + side[1] * side[1] - side[2] * side[2]) / (2 * side[0] * side[1]))) * 180 / Math.PI).toFixed(2);


        }
        else {
            swal("Please put proper values")
        }
    }
    if (side.length == 2 && angle.length == 1) {
        var g;
        var n;
        var w = 0;

        if (angle[0] >= 180 || side[0] <= 0 || side[1] <= 0 || angle[0] <= 0) {
            swal("put proper values");
        }
        else {

            for (k = 0; k < s.length; k++) {
                if (s[k] == '') {
                    g = k;

                }
            }

            for (i = 0; i < a.length; i++) {
                if (a[i] != '') {

                    if (i == g) {

                        var h = Math.cos(a[i] / 180 * Math.PI);
                        // alert("h=" + h);
                        var l = 2;
                        var m = 0;

                        for (k = 0; k < s.length; k++) {
                            if (s[k] != '') {
                                l = parseFloat(l) * parseFloat(s[k]);
                                m = parseFloat(m) + parseFloat(s[k] * s[k]);
                                w = parseFloat(w) + parseFloat(s[k]);
                            }

                        }

                        var u = Math.sqrt(m - l * h);
                        // alert(u);

                        document.getElementById("s" + (g + 1)).value = u.toFixed(2);

                    }
                }
            }
            for (i = 0; i < a.length; i++) {
                if (a[i] != '') {

                    if (i == g) {

                        // alert("g=" + g);
                        // alert("w=" + w);
                        var x;

                        if (g == 0) {
                            x = (s[1]) - (s[2]);
                        }
                        else {
                            x = (w) - (2 * (s[0]));

                        }

                        var v;
                        v = (Math.atan(x / (w * Math.tan(a[g] / 180 * Math.PI / 2)))) * 180 / Math.PI;


                        if (g == 0) {
                            document.getElementById("a2").value = (90 + parseFloat(v) - angle[0] / 2).toFixed(2);
                            document.getElementById("a3").value = (90 - parseFloat(v) - angle[0] / 2).toFixed(2);
                        }
                        else {
                            document.getElementById("a1").value = (90 - parseFloat(v) - angle[0] / 2).toFixed(2);
                            for (i = 1; i < a.length; i++) {
                                if (a[i] == "") {
                                    document.getElementById("a" + (i + 1)).value = (180 - parseFloat(document.getElementById("a1").value) - parseFloat(angle[0])).toFixed(2);
                                }
                            }
                        }
                    }
                }
            }
            var o;
            var r;

            for (i = 0; i < a.length; i++) {
                if (a[i] != '') {
                    // alert("i=" + i);
                    r = i;
                }
            }
            if (r != g) {
                o = s[r] / (Math.sin(a[r] / 180 * Math.PI));
                // alert("o=" + o);

                // alert("r=" + r);
                var q = a[r];
                // alert("q=" + q)
                var flag;
                for (k = 0; k < s.length; k++) {
                    if (s[k] != '' && k != r) {
                        // * 180 / Math.PI
                        var z3 = k;
                        if (a[r] < 90 && s[r] < s[k] * Math.sin(a[r] / 180 * Math.PI)) {
                            flag = 3;
                            swal("No such triangle possible");
                        }
                        else if (a[r] > 90 && s[r] <= s[k]) {
                            flag = 4;
                            swal("No such triangle possible");
                        }
                        else if (a[r] == 90 && s[r] > s[k]) {
                            flag = 5;
                            swal("No such triangle possible");
                        }
                        else if (a[r] < 90 && s[r] > s[k] * Math.sin(a[r] / 180 * Math.PI) && s[k] > s[r]) {
                            swal("For these set of data two set of triangles possible");
                            flag = 2;
                            // alert("k=" + k);
                            var p1 = (Math.asin(s[k] / o)) * 180 / Math.PI;
                            var p2 = 180 - p1;
                            // document.getElementById("a" + (parseInt(k) + 1)).value = ;
                            // alert("a"+(parseInt(k)+1));
                            // alert(s[k] / o);

                            var t1 = 180 - p1 - q;
                            var t2 = 180 - p2 - q;
                            // alert("t=" + t);

                            // alert(flag);
                            var a3 = [];
                            var s3 = [];
                            s3 = [[,], [,], [,]];
                            a3 = [[,], [,], [,]];
                            // console.log(s3);
                            s3[k][0] = s[k];
                            s3[k][1] = s[k];
                            s3[r][0] = s[r];
                            s3[r][1] = s[r];
                            a3[k][0] = p1.toFixed(2);
                            a3[k][1] = p2.toFixed(2);
                            a3[r][0] = a[r];
                            a3[r][1] = a[r];
                        }
                        else {
                            // alert("k=" + k);
                            document.getElementById("a" + (parseInt(k) + 1)).value = ((Math.asin(s[k] / o)) * 180 / Math.PI).toFixed(2);
                            // alert("a"+(parseInt(k)+1));
                            // alert(s[k] / o);
                            var p = document.getElementById("a" + (parseInt(k) + 1)).value;
                            // alert("p=" + p)
                            var t = 180 - p - q;
                            // alert("t=" + t);
                            if (t <= 0) {
                                p = 180 - p;
                                t = 180 - p - q;
                            }
                            flag = 1;
                            // alert(flag);
                        }
                    }
                }
                if (flag == 1) {
                    // alert(flag);
                    for (k = 0; k < s.length; k++) {
                        if (s[k] == '') {
                            document.getElementById("s" + (k + 1)).value = (o * (Math.sin(t / 180 * Math.PI))).toFixed(2);
                            document.getElementById("a" + (k + 1)).value = t;
                        }
                    }
                }
                else if (flag == 2) {
                    // alert(flag);
                    var z1 = o * (Math.sin(t1 / 180 * Math.PI));
                    var z2 = o * (Math.sin(t2 / 180 * Math.PI));
                    // alert("z1=" + z1);
                    // alert("z2=" + z2);
                    var z;
                    for (i = 0; i < s.length; i++) {
                        if (s[i] == "") {
                            z = i;
                        }
                    }
                    s3[z][0] = z1.toFixed(2);
                    s3[z][1] = z2.toFixed(2);
                    a3[z][0] = t1.toFixed(2);
                    a3[z][1] = t2.toFixed(2);
                }
            }
        }
    }
    var sum = 0;
    if (side.length == 1 && angle.length == 2) {
        if ((parseFloat(angle[0]) + parseFloat(angle[1])) >= 180 && side[0] >= 0) {
            swal("put proper values");
        }
        else {
            for (i = 0; i < a.length; i++) {

                if (a[i] != '') {

                    sum = parseFloat(sum) + parseFloat(a[i]);

                }
            }
            for (i = 0; i < a.length; i++) {
                if (a[i] == '') {
                    var e = parseInt(i) + 1;
                }
            }
            document.getElementById("a" + e).value = (180 - parseFloat(sum)).toFixed(2);
            var d;
            var f;
            for (k = 0; k < s.length; k++) {
                if (s[k] != '') {

                    f = parseInt(k) + 1;
                    d = parseFloat(s[parseInt(f) - 1]) / Math.sin((document.getElementById("a" + f).value) / 180 * Math.PI);
                    //   alert(d);

                }
            }
            for (j = 1; j <= s.length; j++) {
                if (s[j - 1] == '') {

                    document.getElementById("s" + j).value = (d * (Math.sin((document.getElementById("a" + j).value) / 180 * Math.PI))).toFixed(2);
                    // alert((Math.sin((document.getElementById("a" + j).value) / 180 * Math.PI)))
                }
            }
        }


    }
    var temp = " ";
    // var max;
    // var halfperimeter;
    // var area;

    var a2 = [];
    var s2 = [];
    s2[0] = document.getElementById('s1').value;
    s2[1] = document.getElementById('s2').value;
    s2[2] = document.getElementById('s3').value;
    a2[0] = document.getElementById('a1').value;
    a2[1] = document.getElementById('a2').value;
    a2[2] = document.getElementById('a3').value;

    var perimeter = (parseFloat(s2[0]) + parseFloat(s2[1]) + parseFloat(s2[2]));
    if (perimeter < 0.1) {
        var halfperimeter = perimeter / 2;
        var area = (Math.sqrt(halfperimeter * (halfperimeter - s2[0]) * (halfperimeter - s2[1]) * (halfperimeter - s2[2])));
        var median = [];
        var height = [];
        median[0] = (Math.sqrt(2 * (s2[1] * s2[1] + s2[2] * s2[2]) - s2[0] * s2[0]) / 2);
        median[1] = (Math.sqrt(2 * (s2[0] * s2[0] + s2[2] * s2[2]) - s2[1] * s2[1]) / 2);
        median[2] = (Math.sqrt(2 * (s2[1] * s2[1] + s2[0] * s2[0]) - s2[2] * s2[2]) / 2);
        height[0] = (area * 2 / s2[0]);
        height[1] = (area * 2 / s2[1]);
        height[2] = (area * 2 / s2[2]);
        var inradious = (area / halfperimeter);
        var circumradious = (s2[0] / (2 * Math.sin(a2[0] / 180 * Math.PI)));
    }
    else {
        perimeter = perimeter.toFixed(2)
        var halfperimeter = perimeter / 2;
        var area = (Math.sqrt(halfperimeter * (halfperimeter - s2[0]) * (halfperimeter - s2[1]) * (halfperimeter - s2[2]))).toFixed(2);
        var median = [];
        var height = [];
        median[0] = (Math.sqrt(2 * (s2[1] * s2[1] + s2[2] * s2[2]) - s2[0] * s2[0]) / 2).toFixed(2);
        median[1] = (Math.sqrt(2 * (s2[0] * s2[0] + s2[2] * s2[2]) - s2[1] * s2[1]) / 2).toFixed(2);
        median[2] = (Math.sqrt(2 * (s2[1] * s2[1] + s2[0] * s2[0]) - s2[2] * s2[2]) / 2).toFixed(2);
        height[0] = (area * 2 / s2[0]).toFixed(2);
        height[1] = (area * 2 / s2[1]).toFixed(2);
        height[2] = (area * 2 / s2[2]).toFixed(2);
        var inradious = (area / halfperimeter).toFixed(2);
        var circumradious = (s2[0] / (2 * Math.sin(a2[0] / 180 * Math.PI))).toFixed(2);

    }

    if (side.length == 3 && angle.length == 0) {
        if (parseFloat(side[0]) + parseFloat(side[1]) > parseFloat(side[2]) && parseFloat(side[1]) + parseFloat(side[2]) > parseFloat(side[0]) && parseFloat(side[0]) + parseFloat(side[2]) > parseFloat(side[1]) && parseFloat(side[0]) > 0 && parseFloat(side[1]) > 0 && parseFloat(side[2]) > 0) {

            temp = "<table>";
            temp = temp + "<tr><th>Variable</th><th>Value</th></tr>";

            temp = temp + "<tr>";
            temp += "<td>Side a</td>";
            temp += "<td>" + s2[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Side b</td>";
            temp += "<td>" + s2[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>side c</td>"
            temp += "<td>" + s2[2] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle A</td>"
            temp += "<td>" + a2[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle B</td>"
            temp += "<td>" + a2[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle C</td>";
            temp += "<td>" + a2[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median a</td>"
            temp += "<td>" + median[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median b</td>"
            temp += "<td>" + median[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median c</td>"
            temp += "<td>" + median[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height a</td>"
            temp += "<td>" + height[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height b</td>"
            temp += "<td>" + height[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height c</td>"
            temp += "<td>" + height[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Area </td>"
            temp += "<td>" + area + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Perimeter</td>"
            temp += "<td>" + perimeter + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Circumradious</td>"
            temp += "<td>" + circumradious + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Inradious</td>"
            temp += "<td>" + inradious + "</td>"
            temp = temp + "</tr>";
            temp += "</table>";
            max = parseFloat(s2[0]);
            // alert("max=" + max)
            for (i = 0; i < 3; i++) {
                // alert(max + " " + s2[i]);
                if (max < parseFloat(s2[i])) {

                    max = parseFloat(s2[i]);
                }
            }

            // alert("max=" + max);
            if (max == s2[0]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 50, - parseFloat(s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("b ", parseFloat((s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("a ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("A ", parseFloat(s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 45, -parseFloat(s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 205);
                y.fillText("B ", 257, 218);

            }
            else if (max == s2[1]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 50, -parseFloat(s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("B ", parseFloat(s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 45, -parseFloat(s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
            else if (max == s2[2]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) + 50, -parseFloat(s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", parseFloat((s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", 144, 225);
                y.fillText("B ", 31, 218);
                y.fillText("C ", parseFloat(s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) + 45, -parseFloat(s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
        }
        else if (parseFloat(side[0]) < 0 || parseFloat(side[1]) < 0 || parseFloat(side[2]) < 0) {
            temp = "<p>" + "length of all side should be positive" + "</p>";
        }
        else if (parseFloat(side[0]) + parseFloat(side[1]) <= parseFloat(side[2]) || parseFloat(side[1]) + parseFloat(side[2]) <= parseFloat(side[0]) || parseFloat(side[0]) + parseFloat(side[2]) <= parseFloat(side[1]) || parseFloat(side[0]) <= 0 || parseFloat(side[1]) <= 0 || parseFloat(side[2]) <= 0) {
            temp = "<p>" + "sum of side of any two sides in a triangle  will be greater than other side and length of all side should be positive" + "</p>";
        }
        else if (parseFloat(side[0]) + parseFloat(side[1]) <= parseFloat(side[2]) || parseFloat(side[1]) + parseFloat(side[2]) <= parseFloat(side[0]) || parseFloat(side[0]) + parseFloat(side[2]) <= parseFloat(side[1])) {
            temp = "<p>" + "sum of side of any two sides in a triangle  will be greater than other side " + "</p>";

        }


    }
    if (side.length == 1 && angle.length == 2) {
        if (parseFloat(angle[0]) + parseFloat(angle[1]) >= 180) {
            temp = "<p>" + "Sum of two given angles cannot be greater than be 180 degree as sum of three angle equals to 180 degree" + "</p>";

        }
        else if (angle[0] <= 0 || angle[1] <= 0) {
            temp = "<p>" + "all the angle of a triangle must be greater than zero " + "</p>";
        }
        else if (side[0] <= 0) {
            temp = "<p>" + "all the side of a triangle must be greater than zero " + "</p>";
        }
        else if (side[0] <= 0 && angle[0] <= 0 || angle[1] <= 0) {
            temp = "<p>" + "all the angle and sides of a triangle must be greater than zero " + "</p>";
        }
        else if (parseFloat(angle[0]) + parseFloat(angle[1]) >= 180 && side[0] <= 0 && angle[0] <= 0 || angle[1] <= 0) {
            temp = "<p>" + "all the angle and sides of a triangle must be greater than zero and Sum of two given angles cannot be greater than be 180 degree as sum of three angle equals to 180 degree" + "</p>";
        }
        else if (parseFloat(angle[0]) + parseFloat(angle[1]) >= 180 && angle[0] <= 0 || angle[1] <= 0) {
            temp = "<p>" + "all the angle  of a triangle must be greater than zero and Sum of two given angles cannot be greater than be 180 degree as sum of three angle equals to 180 degree" + "</p>";
        }
        else if (parseFloat(angle[0]) + parseFloat(angle[1]) >= 180 && side[0] <= 0) {
            temp = "<p>" + "all the  and sides of a triangle must be greater than zero and Sum of two given angles cannot be greater than be 180 degree as sum of three angle equals to 180 degree" + "</p>";
        }
        else {
            temp = "<table>";
            temp = temp + "<tr><th>Variable</th><th>Value</th></tr>";

            temp = temp + "<tr>";
            temp += "<td>Side a</td>";
            temp += "<td>" + s2[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Side b</td>";
            temp += "<td>" + s2[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>side c</td>"
            temp += "<td>" + s2[2] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle A</td>"
            temp += "<td>" + a2[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle B</td>"
            temp += "<td>" + a2[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle C</td>";
            temp += "<td>" + a2[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median a</td>"
            temp += "<td>" + median[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median b</td>"
            temp += "<td>" + median[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median c</td>"
            temp += "<td>" + median[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height A</td>"
            temp += "<td>" + height[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height B</td>"
            temp += "<td>" + height[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height C</td>"
            temp += "<td>" + height[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Area </td>"
            temp += "<td>" + area + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Perimeter</td>"
            temp += "<td>" + perimeter + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Circumradious</td>"
            temp += "<td>" + circumradious + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Inradious</td>"
            temp += "<td>" + inradious + "</td>"
            temp = temp + "</tr>";
            temp += "</table>";
            max = parseFloat(s2[0]);
            // alert("max=" + max);
            for (i = 0; i < 3; i++) {
                // alert(max + " " + s2[i]);
                if (max < parseFloat(s2[i])) {

                    max = parseFloat(s2[i]);
                }
            }

            // alert("max=" + max)
            if (max == s2[0]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 50, - parseFloat(s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("b ", parseFloat((s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("a ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("A ", parseFloat(s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 45, -parseFloat(s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 205);
                y.fillText("B ", 257, 218);

            }
            else if (max == s2[1]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 50, -parseFloat(s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("B ", parseFloat(s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 45, -parseFloat(s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
            else if (max == s2[2]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) + 50, -parseFloat(s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", parseFloat((s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", 144, 225);
                y.fillText("B ", 31, 218);
                y.fillText("C ", parseFloat(s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) + 45, -parseFloat(s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
        }
    }
    if (side.length == 2 && angle.length == 1) {
        if (side[0] <= 0 || side[1] <= 0 || angle[0] <= 0 || angle[0] > 180) {
            temp = "<p>" + "all the  and sides of a triangle must be greater than zero and any angle cannot be greater than be 180 degree as sum of three angle equals to 180 degree" + "</p>";
        }
        else if (flag == 3 || flag == 4) {
            temp = "<p>" + "No such triangle possible" + "</p>"
        }
        else if (flag == 2) {
            var perimeter1 = (parseFloat(s3[0][0]) + parseFloat(s3[1][0]) + parseFloat(s3[2][0])).toFixed(2);
            var halfperimeter1 = perimeter1 / 2;
            var area1 = (Math.sqrt(halfperimeter1 * (halfperimeter1 - s3[0][0]) * (halfperimeter1 - s3[1][0]) * (halfperimeter1 - s3[2][0]))).toFixed(2);
            var median1 = [];
            var height1 = [];
            median1[0] = (Math.sqrt(2 * (s3[1][0] * s3[1][0] + s3[2][0] * s3[2][0]) - s3[0][0] * s3[0][0]) / 2).toFixed(2);
            median1[1] = (Math.sqrt(2 * (s3[0][0] * s3[0][0] + s3[2][0] * s3[2][0]) - s3[1][0] * s3[1][0]) / 2).toFixed(2);
            median1[2] = (Math.sqrt(2 * (s3[1][0] * s3[1][0] + s3[0][0] * s3[0][0]) - s3[2][0] * s3[2][0]) / 2).toFixed(2);
            height1[0] = (area1 * 2 / s3[0][0]).toFixed(2);
            height1[1] = (area1 * 2 / s3[1][0]).toFixed(2);
            height1[2] = (area1 * 2 / s3[2][0]).toFixed(2);
            var inradious1 = (area1 / halfperimeter1).toFixed(2);
            var circumradious1 = (s3[0][0] / (2 * Math.sin(a3[0][0] / 180 * Math.PI))).toFixed(2);
            var perimeter2 = parseFloat(s3[0][1]) + parseFloat(s3[1][1]) + parseFloat(s3[2][1]);
            var halfperimeter2 = perimeter2 / 2;
            var area2 = (Math.sqrt(halfperimeter2 * (halfperimeter2 - s3[0][1]) * (halfperimeter2 - s3[1][1]) * (halfperimeter2 - s3[2][1]))).toFixed(2);
            var median2 = [];
            var height2 = [];
            median2[0] = (Math.sqrt(2 * (s3[1][1] * s3[1][1] + s3[2][1] * s3[2][1]) - s3[0][1] * s3[0][1]) / 2).toFixed(2);
            median2[1] = (Math.sqrt(2 * (s3[0][1] * s3[0][1] + s3[2][1] * s3[2][1]) - s3[1][1] * s3[1][1]) / 2).toFixed(2);
            median2[2] = (Math.sqrt(2 * (s3[1][1] * s3[1][1] + s3[0][1] * s3[0][1]) - s3[2][1] * s3[2][1]) / 2).toFixed(2);
            height2[0] = (area2 * 2 / s3[0][1]).toFixed(2);
            height2[1] = (area2 * 2 / s3[1][1]).toFixed(2);
            height2[2] = (area2 * 2 / s3[2][1]).toFixed(2);
            var inradious2 = (area2 / halfperimeter2).toFixed(2);
            var circumradious2 = (s3[0][1] / (2 * Math.sin(a3[0][1] / 180 * Math.PI))).toFixed(2);
            temp += "<p>" + "Two triangle possible " + "</p>"


            temp += "<p>" + "First triangle " + "</p>"
            temp += "<table>";
            temp = temp + "<tr><th>Variable</th><th>Value</th></tr>";

            temp = temp + "<tr>";
            temp += "<td>Side a</td>";
            temp += "<td>" + s3[0][0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Side b</td>";
            temp += "<td>" + (s3[1][0]) + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>side c</td>"
            temp += "<td>" + s3[2][0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle A</td>"
            temp += "<td>" + a3[0][0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle B</td>"
            temp += "<td>" + a3[1][0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle C</td>";
            temp += "<td>" + a3[2][0] + "</td>"


            temp = temp + "</tr>";
            temp += "<td>Median a</td>"
            temp += "<td>" + median1[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median b</td>"
            temp += "<td>" + median1[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median c</td>"
            temp += "<td>" + median1[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height a</td>"
            temp += "<td>" + height1[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height b</td>"
            temp += "<td>" + height1[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height c</td>"
            temp += "<td>" + height1[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Area </td>"
            temp += "<td>" + area1 + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Perimeter</td>"
            temp += "<td>" + perimeter1 + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Circumradious</td>"
            temp += "<td>" + circumradious1 + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Inradious</td>"
            temp += "<td>" + inradious1 + "</td>"
            temp = temp + "</tr>";
            temp += "</table>";
            temp += "<p>" + "Second triangle " + "</p>"

            temp += "<table>";
            temp = temp + "<tr><th>Variable</th><th>Value</th></tr>";
            temp = temp + "<tr>";
            temp += "<td>Side a</td>";
            temp += "<td>" + s3[0][1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Side b</td>";
            temp += "<td>" + s3[1][1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>side c</td>"
            temp += "<td>" + s3[2][1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle A</td>"
            temp += "<td>" + a3[0][1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle B</td>"
            temp += "<td>" + a3[1][1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle C</td>";
            temp += "<td>" + a3[2][1] + "</td>"


            temp = temp + "</tr>";
            temp += "<td>Median a</td>"
            temp += "<td>" + median2[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median b</td>"
            temp += "<td>" + median2[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median c</td>"
            temp += "<td>" + median2[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height a</td>"
            temp += "<td>" + height2[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height b</td>"
            temp += "<td>" + height2[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height c</td>"
            temp += "<td>" + height2[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Area </td>"
            temp += "<td>" + area2 + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Perimeter</td>"
            temp += "<td>" + perimeter2 + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Circumradious</td>"
            temp += "<td>" + circumradious2 + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Inradious</td>"
            temp += "<td>" + inradious2 + "</td>"
            temp = temp + "</tr>";
            temp += "</table>";
            max = parseFloat(s3[0][0]);
            // alert("max=" + max);
            for (i = 0; i < 3; i++) {
                // alert(max + " " + s2[i]);
                if (max < parseFloat(s3[i][0])) {

                    max = parseFloat(s3[i][0]);
                }
            }
            // alert("max=" + max);

            if (max == s3[0][0]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s3[1][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) + 50, - parseFloat(s3[1][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("b ", parseFloat((s3[1][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) / 2) + 38, -parseFloat((s3[1][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s3[1][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) / 2) + 151, -parseFloat((s3[1][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) / 2) + 211);
                y.fillText("a ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("A ", parseFloat(s3[1][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) + 45, -parseFloat(s3[1][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) + 205);
                y.fillText("B ", 257, 218);

            }
            else if (max == s3[1][0]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s3[0][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) + 50, -parseFloat(s3[0][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s3[0][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) / 2) + 38, -parseFloat((s3[0][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s3[0][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) / 2) + 151, -parseFloat((s3[0][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("B ", parseFloat(s3[0][0] * 200 / max * Math.cos(a3[2][0] / 180 * Math.PI)) + 45, -parseFloat(s3[0][0] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
            else if (max == s3[2][0]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s3[0][0] * 200 / max * Math.cos(a3[1][0] / 180 * Math.PI)) + 50, -parseFloat(s3[0][0] * 200 / max * Math.sin(a3[1][0] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s3[0][0] * 200 / max * Math.cos(a3[1][0] / 180 * Math.PI)) / 2) + 38, -parseFloat((s3[0][0] * 200 / max * Math.sin(a3[1][0] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", parseFloat((s3[0][0] * 200 / max * Math.cos(a3[1][0] / 180 * Math.PI)) / 2) + 151, -parseFloat((s3[0][0] * 200 / max * Math.sin(a3[1][0] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", 144, 225);
                y.fillText("B ", 31, 218);
                y.fillText("C ", parseFloat(s3[0][0] * 200 / max * Math.cos(a3[1][0] / 180 * Math.PI)) + 45, -parseFloat(s3[0][0] * 200 / max * Math.sin(a3[1][0] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
            max = parseFloat(s3[0][1]);
            // alert("max=" + max);
            for (i = 0; i < 3; i++) {
                // alert(max + " " + s2[i]);
                if (max < parseFloat(s3[i][1])) {

                    max = parseFloat(s3[i][1]);
                }
            }
            // alert("max=" + max);

            if (max == s3[0][1]) {
                y1.beginPath();
                y1.moveTo(50, 210);
                y1.lineTo(parseFloat(s3[1][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) + 50, - parseFloat(s3[1][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) + 210);
                y1.lineTo(250, 210);
                y1.lineTo(50, 210);
                y1.stroke();
                y1.font = "20px Arial";
                y1.fillText("b ", parseFloat((s3[1][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) / 2) + 38, -parseFloat((s3[1][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) / 2) + 211);
                y1.fillText("c ", parseFloat((s3[1][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) / 2) + 151, -parseFloat((s3[1][1] * 200 / max * Math.sin(a3[2][0] / 180 * Math.PI)) / 2) + 211);
                y1.fillText("a ", 144, 225);
                y1.fillText("C ", 31, 218);
                y1.fillText("A ", parseFloat(s3[1][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) + 45, -parseFloat(s3[1][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) + 205);
                y1.fillText("B ", 257, 218);

            }
            else if (max == s3[1][1]) {
                y1.beginPath();
                y1.moveTo(50, 210);
                y1.lineTo(parseFloat(s3[0][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) + 50, -parseFloat(s3[0][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) + 210);
                y1.lineTo(250, 210);
                y1.lineTo(50, 210);
                y1.stroke();
                y1.font = "20px Arial";
                y1.fillText("a ", parseFloat((s3[0][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) / 2) + 38, -parseFloat((s3[0][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) / 2) + 211);
                y1.fillText("c ", parseFloat((s3[0][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) / 2) + 151, -parseFloat((s3[0][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) / 2) + 211);
                y1.fillText("b ", 144, 225);
                y1.fillText("C ", 31, 218);
                y1.fillText("B ", parseFloat(s3[0][1] * 200 / max * Math.cos(a3[2][1] / 180 * Math.PI)) + 45, -parseFloat(s3[0][1] * 200 / max * Math.sin(a3[2][1] / 180 * Math.PI)) + 205);
                y1.fillText("A ", 257, 218);

            }
            else if (max == s3[2][1]) {
                y1.beginPath();
                y1.moveTo(50, 210);
                y1.lineTo(parseFloat(s3[0][1] * 200 / max * Math.cos(a3[1][1] / 180 * Math.PI)) + 50, -parseFloat(s3[0][1] * 200 / max * Math.sin(a3[1][1] / 180 * Math.PI)) + 210);
                y1.lineTo(250, 210);
                y1.lineTo(50, 210);
                y1.stroke();
                y1.font = "20px Arial";
                y1.fillText("a ", parseFloat((s3[0][1] * 200 / max * Math.cos(a3[1][1] / 180 * Math.PI)) / 2) + 38, -parseFloat((s3[0][1] * 200 / max * Math.sin(a3[1][1] / 180 * Math.PI)) / 2) + 211);
                y1.fillText("b ", parseFloat((s3[0][1] * 200 / max * Math.cos(a3[1][1] / 180 * Math.PI)) / 2) + 151, -parseFloat((s3[0][1] * 200 / max * Math.sin(a3[1][1] / 180 * Math.PI)) / 2) + 211);
                y1.fillText("c ", 144, 225);
                y1.fillText("B ", 31, 218);
                y1.fillText("C ", parseFloat(s3[0][1] * 200 / max * Math.cos(a3[1][1] / 180 * Math.PI)) + 45, -parseFloat(s3[0][1] * 200 / max * Math.sin(a3[1][1] / 180 * Math.PI)) + 205);
                y1.fillText("A ", 257, 218);

            }
        }
        else {
            temp = "<table>";
            temp = temp + "<tr><th>Variable</th><th>Value</th></tr>";

            temp = temp + "<tr>";
            temp += "<td>Side a</td>";
            temp += "<td>" + s2[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Side b</td>";
            temp += "<td>" + s2[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>side c</td>"
            temp += "<td>" + s2[2] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle A</td>"
            temp += "<td>" + a2[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle B</td>"
            temp += "<td>" + a2[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle C</td>";
            temp += "<td>" + a2[2] + "</td>"


            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median A</td>"
            temp += "<td>" + median[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median B</td>"
            temp += "<td>" + median[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Median C</td>"
            temp += "<td>" + median[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height A</td>"
            temp += "<td>" + height[0] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height B</td>"
            temp += "<td>" + height[1] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Height C</td>"
            temp += "<td>" + height[2] + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Area </td>"
            temp += "<td>" + area + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Perimeter</td>"
            temp += "<td>" + perimeter + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Circumradious</td>"
            temp += "<td>" + circumradious + "</td>"
            temp = temp + "</tr>";
            temp = temp + "<tr>";
            temp += "<td>Inradious</td>"
            temp += "<td>" + inradious + "</td>"
            temp = temp + "</tr>";
            temp += "</table>";
            max = parseFloat(s2[0]);
            // alert("max=" + max);
            for (i = 0; i < 3; i++) {
                // alert(max + " " + s2[i]);
                if (max < parseFloat(s2[i])) {

                    max = parseFloat(s2[i]);
                }
            }
            // alert("max=" + max);

            if (max == s2[0]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 50, - parseFloat(s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("b ", parseFloat((s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("a ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("A ", parseFloat(s2[1] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 45, -parseFloat(s2[1] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 205);
                y.fillText("B ", 257, 218);

            }
            else if (max == s2[1]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 50, -parseFloat(s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", parseFloat((s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", 144, 225);
                y.fillText("C ", 31, 218);
                y.fillText("B ", parseFloat(s2[0] * 200 / max * Math.cos(a2[2] / 180 * Math.PI)) + 45, -parseFloat(s2[0] * 200 / max * Math.sin(a2[2] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
            else if (max == s2[2]) {
                y.beginPath();
                y.moveTo(50, 210);
                y.lineTo(parseFloat(s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) + 50, -parseFloat(s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) + 210);
                y.lineTo(250, 210);
                y.lineTo(50, 210);
                y.stroke();
                y.font = "20px Arial";
                y.fillText("a ", parseFloat((s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) / 2) + 38, -parseFloat((s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) / 2) + 211);
                y.fillText("b ", parseFloat((s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) / 2) + 151, -parseFloat((s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) / 2) + 211);
                y.fillText("c ", 144, 225);
                y.fillText("B ", 31, 218);
                y.fillText("C ", parseFloat(s2[0] * 200 / max * Math.cos(a2[1] / 180 * Math.PI)) + 45, -parseFloat(s2[0] * 200 / max * Math.sin(a2[1] / 180 * Math.PI)) + 205);
                y.fillText("A ", 257, 218);

            }
        }
    }
    if (angle.length == 3 && side.length == 0) {
        if (angle[0] <= 0 || angle[1] <= 0 || angle[2] <= 0 || (parseFloat(angle[0]) + parseFloat(angle[1]) + parseFloat(angle[2])) != 180) {
            temp = "<p>" + "all the angle and sides of a triangle must be greater than zero and sum of three angle equals to 180 degree" + "</p>";

        }
        else {
            temp = "<table>";
            temp = temp + "<tr><th>Variable</th><th>Value</th></tr>";
            if (a[0] == a[1]) {
                if (a[1] == a[2]) {
                    temp = temp + "<tr>";
                    temp += "<td>Side a</td>";
                    temp += "<td>" + "k" + "</td>"
                    temp = temp + "</tr>";

                    temp = temp + "<tr>";
                    temp += "<td>Side b</td>";
                    temp += "<td>" + "k" + "</td>"
                    temp = temp + "</tr>";

                    temp = temp + "<tr>";
                    temp += "<td>side c</td>"
                    temp += "<td>" + "k" + "</td>"
                    temp = temp + "</tr>";

                }
            }
            else {
                temp = temp + "<tr>";
                temp += "<td>Side a</td>";
                temp += "<td>" + (Math.sin(a[0] / 180 * Math.PI)).toFixed(3) + "k" + "</td>"
                temp = temp + "</tr>";

                temp = temp + "<tr>";
                temp += "<td>Side b</td>";
                temp += "<td>" + (Math.sin(a[1] / 180 * Math.PI)).toFixed(3) + "k" + "</td>"
                temp = temp + "</tr>";

                temp = temp + "<tr>";
                temp += "<td>side c</td>"
                temp += "<td>" + (Math.sin(a[2] / 180 * Math.PI)).toFixed(3) + "k" + "</td>"
                temp = temp + "</tr>";
            }
            temp = temp + "<tr>";
            temp += "<td>Angle A</td>"
            temp += "<td>" + a[0] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle B</td>"
            temp += "<td>" + a[1] + "</td>"
            temp = temp + "</tr>";

            temp = temp + "<tr>";
            temp += "<td>Angle C</td>";
            temp += "<td>" + a[2] + "</td>"
            temp += "</table>";
            temp += "<p>" + "Here k can be any positive rational number" + "</p>";
        }

    }

    document.getElementById("res").innerHTML = temp;
    if (count > 0) {

        document.getElementById("alert").style.display = "block";
    }



}
function disable(x) {
    if (count > 0) {

        x.disabled = true;

        x.style.opacity = 0.49;
        x.style.cursor = "not-allowed";
        // swal("Values are already calculated,To again calculate please press the reset button to calculate a new set of data");
    }
    else if (count == 0) {
        x.disabled = false;

        x.style.opacity = 1;
        x.style.cursor = "pointer";
    }

}

function reset() {
    count = 0;
    window.location.reload();
}
