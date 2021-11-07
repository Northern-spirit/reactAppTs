import { makeAutoObservable } from "mobx";
import { Todos, Todo } from "./../components/App"

class Store {
    cards: Todos = []
    filterArray: Todos = []
    index: number = 0
    filterValue: number = 2
    constructor() {
        makeAutoObservable(this)
    }
    addNewCard = (task, setTask) => {
        if (task !== '') {
            this.cards.push(
                {
                    id: this.index + 1,
                    problem: task,
                    completed: false,
                }
            )
            this.index = this.index + 1
            setTask('')
        }
    }
    changeCheck = (id) => {
        this.cards = this.cards.map(el => el.id === id ? { ...el, completed: !el.completed } : el);
        this.filtering()
    }
    removeCard = (id) => {
        this.cards = this.cards.filter(el => el.id !== id)
        this.filterArray = this.filterArray.filter(el => el.id !== id)
    }
    changefilterValue = (filLet) => {
        this.filterValue = filLet
    }
    filtering = () => {
        if (this.filterValue === 0) {
            this.filterArray = this.cards.filter(el => el.completed === true);
        } else if (this.filterValue === 1) {
            this.filterArray = this.cards.filter(el => el.completed === false);
        } else {
            this.filterArray = this.cards;
        }
    }
}
export default new Store();