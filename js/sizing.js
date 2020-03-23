// Just some code to resize the boxes of the grid accordingly
// This just resizes the boxes in case the screen size is changed.
const reSizeCells = () => {
    var tableWidth = document.getElementById('theTable').clientWidth;
    const cells = document.getElementsByTagName('td');
    var rowHeight = (tableWidth / 3) + 'px';
    var fontHeight = (tableWidth / 3 * .5) + 'px';
    for (var i=0; i<cells.length; i++) {
        cells[i].style.height = rowHeight;
        cells[i].style.width = rowHeight;
        cells[i].style.fontSize = fontHeight;
    }
}

// On Startup
reSizeCells();