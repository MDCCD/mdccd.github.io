function highlightText(acronym) {
    let tableBody = document.getElementById('highlight');
    let highlitedItems = document.getElementsByClassName('highlight');
    

    for (let j = 0; j < highlitedItems.length; j++) {
        highlitedItems[j].className = '';
    }

    for (let i = 0; i<tableBody.children.length; i++) {
        let tableRow = tableBody.children[i];
        let tableData = tableRow.children[2];
        
        for (list of tableData.children) {
            for (listItem of list.children) {

                if (listItem.innerHTML.includes(acronym)) {
                    listItem.className = 'highlight';
                }

            }
        }
    }
}