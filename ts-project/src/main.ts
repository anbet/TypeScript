import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplates'

const initApp = (): void => {
    const fullList = FullList.instance
    const templates = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()

        // Get the new item value
        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText = input.value.trim()
        if(!newEntryText.length) return

        // Calculate Item ID
        const itemId = fullList.list.length ? parseInt(fullList.list[fullList.list.length -1].id) + 1 : 1
        
        // Create new item
        const newItem = new ListItem(itemId.toString(), newEntryText)
        // Add item to full List
        fullList.addItem(newItem)
        // Re-render list with new element added in the list
        templates.render(fullList)
    })

    // Add listner when the list is cleared
    const clearList = document.getElementById('clearItemsButton') as HTMLButtonElement

    clearList.addEventListener('click', ():void =>{
        fullList.clearList()
        templates.clear()
    })

    // Load inital data
    fullList.load()

    // initial render of template
    templates.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp)
