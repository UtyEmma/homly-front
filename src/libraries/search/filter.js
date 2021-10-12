export function FilterResults (e, row, item) {    
  let filter, items, i, txtValue;

  filter = e.target.value.toUpperCase();
  items = document.querySelectorAll(row)

  for (i = 0; i < items.length; i++) {
    txtValue = items[i].querySelector(item).textContent || items[i].querySelector(item).innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}