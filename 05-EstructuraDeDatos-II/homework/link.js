

function linkedList() {
    this.head = null;
}

function node(val) {
    this.data = val;
    this.next = null;
}

//esta funcion conecta o agrega un nuevo valor a la linkedlist
linkedList.prototype.add = function (val) {
    const node = new Node(val) //creo nuevo nodo;
    if (!this.head) { //pregunto si no hay this.head
        this.head = node; //enlaso un nodo a la likendlist
    } else {//en caso contrario
        let current = this.head //se crea para que se encargue de recorrer hasta que no exista un siguiente
         //en current se guarda la referencia de que tiene this.head
        while(current.next){//
            current = current.next;
        }
        current.next = node;
    }
}

const list = new linkedList();

list.add(5);
list.add(25);
list.add(100);

console.log(list)


function LinkedList() {
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
const newNode = new Node(value);
if(this.head === null){
this.head = newNode;
} else {
   const current = this.head;
   while (current.next){
        current = current.next;
   }
   current.next = newNode;
}
}


LinkedList.prototype.remove = function () {

}

LinkedList.prototype.search = function (value) {

}