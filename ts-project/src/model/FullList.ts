import ListItem from "./ListItem"

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {

    private constructor(private _list: ListItem[] = []) {
            
    }
}