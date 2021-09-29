export function focusSearchBar (event) {
    if(event.key === '/' || event.code === 'Slash') event.preventDefault(); document.getElementById('search').focus()
}