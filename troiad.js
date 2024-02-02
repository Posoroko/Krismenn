const agendaURL = 'https://krismenn.monsieuredgar.com/items/Agenda?fields=id,date,city.translations.name,show.translations.title&sort=date';
const agendaBox_div = document.getElementById('agendaBox');



const getItemsFromAgendaURL = async () => {
    const response = await fetch(agendaURL);
    const data = await response.json();
    console.log(data)
    injectEvents(data.data);
}

const createEventBox = (event) => {
    const eventBox_div = document.createElement('div');
    eventBox_div.classList.add('eventBox');
        const dateInfo_div = document.createElement('div');
        dateInfo_div.classList.add('dateInfo');
        dateInfo_div.classList.add('date');
    dateInfo_div.innerText = dateToFrenchFormat(event.date);
    eventBox_div.appendChild(dateInfo_div); 
    
        const wrapperBox_div = document.createElement('div');
        wrapperBox_div.classList.add('wrapperBox');
            const showName_div = document.createElement('div');
            showName_div.classList.add('showName', 'dateInfo', 'spectacle');
            showName_div.innerText = event.show.translations[0].title;
        wrapperBox_div.appendChild(showName_div);
            const ville_div = document.createElement('div');
            ville_div.classList.add('ville', 'dateInfo');
            ville_div.innerText = event.city.translations[0].name;
        wrapperBox_div.appendChild(ville_div);
    eventBox_div.appendChild(wrapperBox_div);
    agendaBox_div.appendChild(eventBox_div);
}

const injectEvents = (dates) => {
    dates.forEach(date => {
        createEventBox(date);
    });
}

const dateToFrenchFormat = (date) => {
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    return `${day}/${month}/${year}`;
}

getItemsFromAgendaURL();
