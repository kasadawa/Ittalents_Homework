function addTableRow() {
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var node = document.createTextNode("as");
    tr.appendChild(td);
    tr.appendChild(td);
    tr.appendChild(td);

    document.getElementById("tb").appendChild(tr);
    //document.td.appendChild(td);
};