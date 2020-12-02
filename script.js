// Get Input Element
let filterInput = document.getElementById('filterInput');
// Add Event Listenner
filterInput.addEventListener('keyup', filterNames );

function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);

    let namesUl = document.getElementById('names');
    
    // Get List From Ul 
    let li = namesUl.querySelectorAll('li.collection-item');

    //Loop Through collection Item 
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
            
        } else{
            li[i].style.display = "none";
        }
    }

}

