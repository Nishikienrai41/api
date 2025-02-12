const url="chttps://api.clashroyale.com/v1/cards";
const cardsContainer = document.getElementById("clashCards");
const key = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUxMTNkZDk4LTExYjktNGNmMy1iM2RmLTQ3ZWNlMGJlNGY3MCIsImlhdCI6MTczOTM0OTQyOSwic3ViIjoiZGV2ZWxvcGVyLzRjN2VlZDhiLTZhODAtYmViYy0wYTEwLWE0NDE0Mjc0YTc3NiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.csfeWlQg-ZFzdblsX1RQoqM-Okbe8R2fxI7BJ9-7VwNG2flWjqtVPbvJuNxns-ZORxApAwdYAuvY0J6Fu5JlPw";

async function getData() {
try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`hhtp error: ${response.status}`);
    }
    const data = await response.json();
    const cards = data.items;
    console.log(cards);
    console.log(data);
    displayCards(cards);
} catch (error) {
    console.error("er ging iets fout met het verkrijgen van de data", error);
        document.getElementById("clashCards").innerHTML=`<p style = "color:red;">oeps... het werkt even niet. Kom later terug</p>`;
    } finally {
        console.log("clashCards is werkt");
    }
};



function displayCards(cards) {
    console.log("cards in display functie: ", cards);
    cards.forEach(ifo => {
    const { cards, Players, clans, leaderboards} = royale;

       
    console.log(`cards: ${kaarten} | Players: ${spelers} | clans: ${Clans} | leaderboards: ${Ranglijst}`);
    const toonCards = document.createElement("div"); // Maak een nieuw <div>-element
    toonCards.className = "clashCards";
    toonCards.innerHTML = `
    <h2>${card.name}</h2>
        <p>Rarity: ${card.rarity}</p>
        <p>Elixir Cost: ${card.elixirCost}</p>
        <img src="${card.iconUrls.medium}" alt="${card.name}" />
    `;
    cards.appendChild(toonCards); // Voeg het toe aan de body (of een andere bestaande container)
    const pElements = toonCards.getElementsByClassName("kaarten");
    Array.from(pElements).forEach(pElement => {
    });
})};


getData();
















// const url="https://developer.clashroyale.com/#/documentation";
// const clash = document.getElementById("clashCards");

// async function getData() {
//     try {
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`hhtp error: ${response.status}`);
//         }
//         const data = await response.json();
//         const cards = data.results;
//         console.log(parkings);
//         displayData(parkings);
//     } catch (error) {
//         console.error("er ging iets fout met het verkrijgen van de data", error);
//         document.getElementById("parking-data").innerHTML=`<p style = "color:red;">oeps... het werkt even niet. Kom later terug</p>`;
//     } finally {
//         console.log("getData finished");
//     }
// };



// function displayData(card) {
//     console.log("cards in display functie: ", cards);
//     cards.forEach(royale =>{

//         const { cards, clans, players, leaderboards} = royale;

        
//        console.log(`bezetting: ${occupation} | capaciteit: ${totalcapacity} | naam: ${name} | open: ${status}`);
//        const parkingCard = document.createElement("div"); // Maak een nieuw <div>-element
//        parkingCard.className = "parking";
//        parkingCard.innerHTML = `
//             <h2>${name}</h2>
//             <p>bezetting: ${occupation}</p>
//             <p>capaciteit: ${totalcapacity}</p>
//             <p class="status">${status}</p>
//        `;
//        parkingDiv.appendChild(parkingCard); // Voeg het toe aan de body (of een andere bestaande container)
//        const pElements = parkingCard.getElementsByClassName("status");
//        Array.from(pElements).forEach(pElement => {
//         pElement.classList.add(isopennow ? "open" : "gesloten");
//        });
//     });
// };


// getData();