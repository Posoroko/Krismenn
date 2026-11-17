const source = 'local'; // switch to 'api' to fetch from API
const agendaURL = 'https://krismenn.monsieuredgar.com/items/Agenda?fields=id,date,city.translations.name,show.translations.title&sort=date';
const agendaBox_div = document.getElementById('agendaBox');

const localAgendaData = [
  {
    date: '2026-12-27',
    show: { translations: [{ title: 'Quéré/Le Menn' }] },
    venue: { translations: [{ name: 'Salle Amzer Zo' }] },
    event: { translations: [{ name: 'Entre deux fests' }] },
    city: { translations: [{ name: 'Poullaouen' }] }
  },
  {
    date: '2027-01-28',
    show: { translations: [{ title: 'Bastard' }] },
    venue: { translations: [{ name: 'Théâtre du Champ au Roy' }] },
    event: { translations: [{ name: '' }] },
    city: { translations: [{ name: 'Guingamp' }] }
  },
  {
    date: '2027-01-31',
    show: { translations: [{ title: 'Bastard' }] },
    venue: { translations: [{ name: '' }] },
    event: { translations: [{ name: 'Petit Écho de la Mode' }] },
    city: { translations: [{ name: 'Châteauneuf-du-Faou' }] }
  },
  {
    date: '2027-03-09',
    show: { translations: [{ title: 'Bastard' }] },
    venue: { translations: [{ name: 'TRIOS-s' }] },
    event: { translations: [{ name: '' }] },
    city: { translations: [{ name: 'Inzinzac-Lochrist' }] }
  },
  {
    date: '2027-05-20',
    show: { translations: [{ title: 'Bastard' }] },
    venue: { translations: [{ name: '' }] },
    event: { translations: [{ name: 'Saison culturelle de Lesneven' }] },
    city: { translations: [{ name: 'Lesneven' }] }
  }
];

const fetchFromAPI = async () => {
  const response = await fetch(agendaURL);
  const data = await response.json();
  console.log(data);
  return data.data;
};

const getItemsFromAgendaURL = async () => {
  const data = source === 'api' ? await fetchFromAPI() : localAgendaData;
  injectEvents(data);
};

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
        
        if (event.venue.translations[0].name) {
            const venue_div = document.createElement('div');
            venue_div.classList.add('venue', 'dateInfo');
            venue_div.innerText = event.venue.translations[0].name;
            wrapperBox_div.appendChild(venue_div);
        }
        
        if (event.event.translations[0].name) {
            const eventName_div = document.createElement('div');
            eventName_div.classList.add('eventName', 'dateInfo');
            eventName_div.innerText = event.event.translations[0].name;
            wrapperBox_div.appendChild(eventName_div);
        }
        
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
