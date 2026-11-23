function showScreen (screenId) {
  const allScreens = document.querySelectorAll('.screen');

  allScreens.forEach(screen => {
    screen.classList.remove('active');
  })

  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

function showSubscreen (subscreenId) {
  const allSubscreens = document.querySelectorAll('.subscreen');

  allSubscreens.forEach(subscreen => {
    subscreen.classList.remove('active');
  })

  const targetSubscreen = document.getElementById(subscreenId);
  if (targetSubscreen) {
    targetSubscreen.classList.add('active');
  }
}

function activeNavOption (navOptionId) {
  const allNavOptions = document.querySelectorAll('.nav-button');

  allNavOptions.forEach(navOption => {
    navOption.classList.remove('active');
  })

  const targetNavOption = document.getElementById(navOptionId);
  targetNavOption.classList.add('active');
}

function activeNavButton (buttonId) {
  const allNavButtons = document.querySelectorAll('.doc-switch-button>div>button');

  allNavButtons.forEach(navButton => {
    navButton.classList.remove('active');
  })

  const targetButton = document.getElementById(buttonId);
  targetButton.classList.add('active');
}

// Initialize project
function initializeProject() {
  // TODO: implement
}

// Fetch documents from server
async function loadDocuments() {
  // TODO: implement
}