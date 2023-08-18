const textArray = [
  { text: "front-end Developer", color: "green" },
  { text: "ful Stack Developer", color: "yellow" },
  { text: "Programmer", color: "pink" },
  { text: "open-source Developer", color: "blue" }
];
let textIndex = 0;
let charIndex = 0;
const textElement = document.getElementById("typewriter-text");

function type() {
  if (charIndex === 0) {
    textElement.textContent = "I am ";
  }

  const currentText = textArray[textIndex].text;
  const currentColor = textArray[textIndex].color;

  if (charIndex < currentText.length) {
    textElement.innerHTML += `<span class="text-${currentColor}-500">${currentText.charAt(charIndex)}</span>`;
    charIndex++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  const currentText = textArray[textIndex].text;

  if (charIndex >= 0) {
    textElement.innerHTML = "I am " + currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 10);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

type(); // Start the typewriter effect

  // smooth scrolling 
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function redirectToURL() {
    window.location.href = 'https://drive.google.com/file/d/1I9VkWqq9_HrSLyVb0EeVo-CpaPE-VrvE/view?usp=sharing';
  }

  const viewButton = document.getElementById('viewButton');
  viewButton.addEventListener('click', function() {
    window.location.href = 'https://github.com/yusra05';
  });