

const getHistory = (day)=>{
        document.querySelector('.number.selected').classList.toggle('selected');
        day.classList.toggle('selected');
        resum.innerHTML='';
         let load = document.createElement("li");
        load.classList.add('list-group-item')
        load.textContent= 'loading';
        resum.append(load);
    fetch('/exercises/list').then(res=>res.json()).then((list)=>{
        
        resum.innerHTML='';
        list.forEach(element => {
        let display = document.createElement("li");
        display.classList.add('list-group-item')
        display.textContent= element.name;
        resum.append(display)
        });
    })
    
}

const resum = document.getElementById('infoHistory');

const months=['Enero', 'Febrero','Marzo','Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre']
const espaciados=[2,5,6,2,4,0,2,5,1,3,6,1];