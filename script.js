function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('active'); // Add the active class to slide in
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active'); // Remove the active class to slide out
}


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  let originalHTML = '';

  // Function to change the text based on window width
  function changeText() {
    // Select the target h2 element
    const h2Element = document.querySelector('.main .text-box h2');

    // Check if the element exists to avoid errors
    if (h2Element) {
      // Save the original HTML only once
      if (!originalHTML) {
        originalHTML = h2Element.innerHTML; // Store the original HTML content
      }

      // Change the text when the viewport width is 600px or less
      if (window.innerWidth <= 600) {
        h2Element.innerHTML = 'Jedinečný online tréninkový program vedený prvoligovým hráčem Matějem Koubkem, který ti pomůže zlepšit tvé fotbalové dovednosti 17krát '; // Set the new text
      } else {
        h2Element.innerHTML = originalHTML; // Reset to the original HTML content
      }
    }
  }

  // Run the function when the page loads
  changeText();

  // Add an event listener to call the function whenever the window is resized
  window.addEventListener('resize', changeText);


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Stop observing the element after the first intersection
        observer.unobserve(entry.target);
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  

  //Testimonial Data
// List of people objects
const people = [
  {
    name: "DAVID PĚCHOUČEK",
    testimonial: "Tato skupina je plná hodnoty, která jednoznačně převyšuje cenu. Určitě neváhejte! Kluci jsou vám vždycky nápomocni a se vším pomůžou! 💪",
    photo: "materials/person.svg",
  },
  {
    name: "LUKÁŠ KULICH",
    testimonial: "Myslím si že táto komunita je jedna z najlepších. Martin a Matej majú už niečo za sebou a zdieľajú informácie, ktoré by človek ťažko hľadal sám. Teším sa na čas strávený v tejto komunite a určite ma to posunie o krok ďalej. 💪",
    photo: "materials/person.svg",
  },
  {
    name: "ADAM KILIÁN",
    testimonial: "Cením práci adminů, protože si s tím dali opravdu velkou práci. Předávají nám jejich hodnotné zkušenosti a komunita se mi zdá jako bezva parta lidí! Rozhodně všem doporučuji to vyzkoušet. Sportu zdar a fotbalu zvlášť!",
    photo: "materials/person.svg",
  },
  {
    name: "TOMÁŠ PODĚBRADSKÝ",
    testimonial: "Tohle místo vás přiblíží k cíli, to co tu máte fakt stojí za to… super lidi a dva motivátoři, kteří tě poženou kupředu. Jestli je hlavní problém cena, věřte mi, že nic v podobném odvětví za tuto cenu nenajdete. Mohu jen doporučit a těším se, až nás tu bude ještě více.",
    photo: "materials/person.svg",
  },
  {
    name: "JAKUB LEDNICKÝ",
    testimonial: "Komunita s veľkým potenciálom... spojenie človeka, ktorý má cieľ a robí pre to všetko, a toho, čo už ten cieľ dokázal naplniť, znie ako skvelý nápad, kde sa každá jedna vec dá podložiť na dôkazoch.",
    photo: "materials/person.svg",
  },
  {
    name: "JIŘÍ FLEISCHMAN",
    testimonial: "Poprvé co jsem viděl tuhle skupinu, tak jsem si myslel, že to bude nějaká blbost. Ale pak jsem se odhodlal a zkusil jsem se připojit a zjistil jsem, jak je to skvělý. Možnost ptát se na cokoliv prvoligového fotbalisty je skvělá + ta videa se cvičeními jsou skvělý. 👍💪",
    photo: "materials/person.svg",
  },
  {
    name: "JAN REBL",
    testimonial: "Musim říct, že jsem to čekal horší, ale velmi příjemně jste mě překvapili. Je to opravdu skvělá akademie se spoustu skvělými lidmi, žádní namachrovanci, a to jich ve fotbalu je dost. Ale tohle je tak správná komunita, kde si navzájem pomůžeme a nikdo nikoho nebude soudit.",
    photo: "materials/person.svg",
  },
  {
    name: "ALEŠ VOSTRUHA",
    testimonial: "Práci, kterou admini této 'skupiny' provedli doposud, je bezpochyby neskutečná🤯, už jen to, že se někdo ráno zvedne a jeho první myšlenka je: půjdu vytvořit projekt, který může ostatním pomoct fyzicky i psychicky, je obdivuhodná👏.",
    photo: "materials/person.svg",
  },
];


let currentIndex = 0;

// Function to update the slider content
function updateSlider(index) {
  const person = people[index];
  document.querySelector('.photo').src = person.photo;
  document.querySelector('.testimonials_textbox2 h1').textContent = person.name;
  document.querySelector('.testimonials_textbox2 h2').textContent = person.testimonial;
}

// Event listeners for buttons
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % people.length; // Loop back to the start if at the end
  updateSlider(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + people.length) % people.length; // Loop to the end if at the start
  updateSlider(currentIndex);
});

// Initialize the slider with the first person
updateSlider(currentIndex);
