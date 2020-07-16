export class Model {
    user;
    items;
    constructor() {
        this.user='ferhat';
        this.items=[
            new todoitem("kahvaltı",true),
            new todoitem("spor",false),
            new todoitem("kitap",false),
            new todoitem("ders",false),
            new todoitem("proje",false)
        ];

    }
}

export class todoitem{
    description;
    action:boolean;
    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}