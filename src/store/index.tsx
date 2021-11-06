import { makeAutoObservable } from "mobx";

class Store {
    card = []
    filterArray = []
    index = 0
    filterLet = 2
    constructor() {
        makeAutoObservable(this)
    }
    addNewCard = (task, setTask) => {
        if (task !== '') {
            let newCard = { id: string, problem: string, completed: string }
            newCard = {
                id: this.index + 1,
                problem: task,
                completed: false,
            }
            this.card.push(newCard)
            this.index = this.index + 1
            setTask('')
        }
    }
    changeCheck = (id) => {
        this.card = this.card.map(el => el.id === id ? { ...el, completed: !el.completed } : el);
        this.filtering(this.filterLet)
    }
    removeCard = (id) => {
        this.card = this.card.filter(el => el.id !== id)
        this.filterArray = this.filterArray.filter(el => el.id !== id)
    }
    changeFilterLet = (filLet) => {
        this.filterLet = filLet
    }
    filtering = () => {
        if (this.filterLet === 0) {
            this.filterArray = this.card.filter(el => el.completed === true);
        } else if (this.filterLet === 1) {
            this.filterArray = this.card.filter(el => el.completed === false);
        } else {
            this.filterArray = this.card;
        }
    }
}
export default new Store();